# Mathematical notation

| Symbol | Meaning |
| --- | --- |
| $s$ and $s'$ | current and next state |
| $a$ | action |
| $r$ | scalar reward observed after an action |
| $\gamma\in[0,1]$ | discount factor |
| $\pi(a\mid s)$ | probability of action $a$ in state $s$ under policy $\pi$ |
| $G_t$ | return from time $t$ |
| $V^\pi(s)$ | expected return from state $s$ following $\pi$ |
| $Q^\pi(s,a)$ | expected return after $(s,a)$ and then following $\pi$ |
| $\delta_t$ | temporal-difference error |
| $\theta$ | neural-network parameters |

Scalars are lowercase, vectors are bold lowercase, and matrices are uppercase.
The chapter uses finite episodic examples so terminal handling can be inspected
without hiding assumptions in notation.
