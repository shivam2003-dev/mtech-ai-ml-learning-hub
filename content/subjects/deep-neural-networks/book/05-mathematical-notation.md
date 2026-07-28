# Mathematical notation

Scalars use italic lowercase letters, vectors use bold lowercase letters,
matrices use bold uppercase letters, and higher-order arrays are described with
their axes. Unless noted otherwise, mathematical coordinate vectors are column
vectors and software batches store one example per row.

For batch size \(b\), input width \(d\), hidden width \(m\), and output width
\(k\):

\[
\mathbf{X}\in\mathbb{R}^{b\times d},\quad
\mathbf{W}\in\mathbb{R}^{d\times m},\quad
\mathbf{H}\in\mathbb{R}^{b\times m}.
\]

A superscript \(\mathsf T\) denotes transpose. A gradient
\(\nabla_{\mathbf{x}}f\) is oriented explicitly in its local context.
Elementwise operations are stated as elementwise. Expectations, empirical
averages, losses, logits, probabilities, and calibrated probabilities are not
used interchangeably.

Every chapter defines symbols before use, states differentiability and shape
assumptions, and distinguishes an exact equality from numerical approximation
or software assignment.

