# Mathematical notation

We use $x$ for one value, $\mathbf{x}$ for a vector, and $X$ for a matrix or
dataset. A request rate is $\lambda$ requests per second; a service rate is
$\mu$. Latency is a non-negative random variable $L$, with percentiles written
as $p_{95}(L)$. A budget is an inequality, not an average: a service may be
required to satisfy $p_{99}(L) \leq 300\,\mathrm{ms}$ while returning a valid
response for every accepted request.

For an ML endpoint, $\hat{y}=f_\theta(\mathbf{x})$ is a prediction, $\theta$ is
the deployed parameter snapshot, and $v(\theta)$ identifies its version. A
contract couples the input schema, output schema, error semantics, and evidence
required to operate the function.
