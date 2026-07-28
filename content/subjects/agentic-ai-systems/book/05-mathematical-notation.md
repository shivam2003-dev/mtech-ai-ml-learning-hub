# Mathematical notation

Let $s_t$ be the agent state at step $t$, $o_t$ an observation, $a_t$ an
action, and $r_t$ a tool result. A policy $pi(a_t\mid s_t)$ chooses an action;
the transition function $T(s_{t+1}\mid s_t,a_t,r_t)$ updates state. A trace
$\tau=(s_0,a_0,r_0,\ldots,s_T)$ records one run. We use $C$ for a cost budget,
$\delta$ for a failure probability, and $\mathcal{E}$ for cited evidence.
