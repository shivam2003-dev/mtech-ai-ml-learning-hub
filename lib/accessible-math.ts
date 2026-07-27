type HastNode = {
  type?: string;
  tagName?: string;
  value?: string;
  properties?: Record<string, unknown>;
  children?: HastNode[];
};

type VFileLike = {
  data: Record<string, unknown>;
};

const mathSourceKey = "mathSources";

function classesOf(node: HastNode): string[] {
  const value = node.properties?.className;
  return Array.isArray(value) ? value.map(String) : [];
}

function textOf(node: HastNode): string {
  if (node.type === "text") return node.value ?? "";
  return (node.children ?? []).map(textOf).join("");
}

function visit(node: HastNode, callback: (node: HastNode) => void) {
  callback(node);
  for (const child of node.children ?? []) visit(child, callback);
}

/**
 * Save each TeX source before rehype-mathjax replaces the source node.
 * The ordered list is consumed by rehypeLabelMathSvg in the same pipeline.
 */
export function rehypeCaptureMathSources() {
  return (tree: HastNode, file: VFileLike) => {
    const sources: string[] = [];
    visit(tree, (node) => {
      const classes = classesOf(node);
      if (
        classes.includes("math-inline") ||
        classes.includes("math-display") ||
        classes.includes("language-math")
      ) {
        sources.push(textOf(node).trim());
      }
    });
    file.data[mathSourceKey] = sources;
  };
}

/**
 * Give every server-rendered MathJax SVG an accessible name and title.
 * Visual MathJax output remains unchanged; assistive technology receives the
 * exact TeX expression rather than an unnamed image.
 */
export function rehypeLabelMathSvg() {
  return (tree: HastNode, file: VFileLike) => {
    const sources = Array.isArray(file.data[mathSourceKey])
      ? (file.data[mathSourceKey] as string[])
      : [];
    let expressionIndex = 0;

    visit(tree, (node) => {
      if (node.tagName !== "mjx-container") return;

      const source = sources[expressionIndex] ?? "mathematical expression";
      expressionIndex += 1;
      const svg = (node.children ?? []).find((child) => child.tagName === "svg");
      if (!svg) return;

      const titleId = `math-expression-${expressionIndex}`;
      svg.properties = {
        ...svg.properties,
        role: "img",
        focusable: "false",
        ariaLabelledBy: titleId,
      };
      svg.children = [
        {
          type: "element",
          tagName: "title",
          properties: { id: titleId },
          children: [{ type: "text", value: `Mathematical expression: ${source}` }],
        },
        ...(svg.children ?? []),
      ];
    });
  };
}
