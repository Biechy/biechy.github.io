---
sidebar_position: 1
---

import styles from "/src/components/MarkdownFeatures/styles.module.css";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Reminders

Suppose $f:K \rightarrow \mathbb R$

<Tabs>
<TabItem value="differential" label="Differential" attributes={{type: "definition"}}>
<div class="tab-content" data-type="definition">
The differential of $f$ is a linear function $df$ such that 
$$
    f(x+h)=f(x)+d_xf(h)+o(||h||)
$$
with $f(a)=o(g(a)) \Leftrightarrow \lim_{a \rightarrow 0} \frac{f(a)}{g(a)}=0$.

</div>
</TabItem>
</Tabs>

<Tabs>
<TabItem value="differential" label="Example" attributes={{type: "exercise"}}>
<div class="tab-content" data-type="exercise">
Suppose $f(x)=2x^2$,

$f(x+h)=2(x+h)^2=2x^2+4xh+2h^2=f(x)+d_xf(h)+o(||h||)$ with $d_xf=4x$

</div>
</TabItem>
</Tabs>

<Tabs>
<TabItem value="derivative" label="Derivative" attributes={{type: "definition"}}>
<div class="tab-content" data-type="definition">
The derivative of a function $f$ is $\partial_h f(x) = \lim_{t \rightarrow 0} \frac{f(x+th)-f(x)}{t}$
</div>
</TabItem>
</Tabs>

<Tabs>
<TabItem value="implication" label="Proposition" attributes={{type: "proposition"}}>
<div class="tab-content" data-type="proposition">
If $d_xf(h)$ exist, then  $\partial_h f(x)$ also exist.
</div>
</TabItem>
</Tabs>

:::note

The opposite can not be true.

$f(x,y) = \frac{xy}{\sqrt{x^2+y^2}}$ if $(x,y) \neq (0,0)$ else $f(x,y) = f(0,0) = 0$

$f(x,y)=\frac{xy}{\sqrt{x^2+y^2}}=\frac{r^2 \cos(\theta)\sin(\theta)}{r}=r \cos(\theta)\sin(\theta) \xrightarrow{r \rightarrow 0} 0$, continue !

$\partial_x f(0, 0)=\lim_{t \rightarrow 0} \frac{f(th, 0)-f(0,0)}{t}=0$ and
$\partial_y f(0, 0)=\lim_{t \rightarrow 0} \frac{f(0, th)-f(0,0)}{t}=0$

$f(0+h_1,0+h_2)=\frac{(0+h_1)(0+h_2)}{\sqrt{(0+h_1)^2+(0+h_2)^2}}=\frac{h_1h_2}{\sqrt{h_1^2+h_2^2}}$

but $\frac{h_1h_2}{\sqrt{h_1^2+h_2^2}}=\frac{h_1h_2}{||h||}$ is not a $o(||h||)$ cause if we use $(x_n,y_n)=(1/n,1/n) \Rightarrow \frac{h_1h_2/||h||}{||h||} = 1/2$ !

:::

<Tabs>
<TabItem value="gradient" label="Gradient" attributes={{type: "definition"}}>
<div class="tab-content" data-type="definition">
The gradient is the unique vector $\nabla f$ such that $d_xf(h)=<\nabla f(x)|h>$, i.e
$
\nabla f(x) =
\begin{pmatrix}
\partial_{x_1}f(x) \\
\partial_{x_2}f(x) \\
\vdots \\
\partial_{x_n}f(x)
\end{pmatrix}
$
</div>
</TabItem>
</Tabs>

<Tabs>
<TabItem value="gradient" label="Gradient" attributes={{type: "definition"}}>
<div class="tab-content" data-type="definition">
The Jacobian matrix is the generalization of the gradient but for function $f$ that outputs in multidimensional space, 
$
J_f(x) =
\begin{pmatrix}
\partial_{x_1}f_1(x) & \partial_{x_2}f_1(x) & \cdots & \partial_{x_n}f_1(x) \\
\partial_{x_1}f_2(x) & \partial_{x_2}f_2(x) & \cdots & \partial_{x_n}f_2(x) \\
\vdots & \vdots & \ddots & \vdots \\
\partial_{x_1}f_m(x) & \partial_{x_2}f_m(x) & \cdots & \partial_{x_n}f_m(x)
\end{pmatrix}
$
</div>
</TabItem>
</Tabs>

<Tabs>
<TabItem value="hessian" label="Hessian" attributes={{type: "definition"}}>
<div class="tab-content" data-type="definition">
The Hessian matrix is the second order of the gradient,

$
H_f(x) = \nabla^2 f =
\begin{pmatrix}
\partial^2_{x_1}f(x) & \partial^2_{x_1, x_2}f(x) & \cdots & \partial^2_{x_1, x_n}f(x) \\
\partial^2_{x_2, x_1}f(x) & \partial^2_{x_2}f(x) & \cdots & \partial^2_{x_2, x_n}f(x) \\
\vdots & \vdots & \ddots & \vdots \\
\partial^2_{x_n,x_1}f(x) & \partial^2_{x_n,x_2}f(x) & \cdots & \partial^2_{x_n}f(x)
\end{pmatrix}
$

</div>
</TabItem>
</Tabs>

:::note

Be careful because sometimes the denotation $\nabla^2 f$ mean $<\nabla f|\nabla f>$

:::
