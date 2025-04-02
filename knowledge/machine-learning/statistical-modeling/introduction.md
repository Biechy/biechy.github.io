---
sidebar_position: 1
---

import styles from "/src/components/MarkdownFeatures/styles.module.css";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Introduction


:::info

Statistical learning is based on "well-formed"statistical models. This makes it easy to define likelihood.

:::

## Probability and Statistics

<Tabs>
<TabItem value="rv" label="Random Variable" attributes={{type: "definition"}}>
<div class="tab-content" data-type="definition">
    A **random variable** (r.v) $X$ is a measurable function from a probability space $(\Omega , \mathcal A, \mathbb P)$ to a measurable space $(E, \mathcal E)$
</div>
</TabItem>
</Tabs>
If you don't understand anything, that's okay. You just need to remember that this is an application of a large space we don't know about to our real world. If you want to fully understand this definition, take a look at the [Appendix](/knowledge/machine-learning/statistical-modeling/appendix#measure).

:::note

    A data $x$ is a realization of the random variable $X$.

:::

<Tabs>
<TabItem value="coin" label="Exemple 1" attributes={{type: "exercise"}}>
<div class="tab-content" data-type="exercise">
    You can imagine that you're flipping a coin. You'll know it's either heads or tails (i.e. $E=\{heads, tails\}$) without knowing the pulse you're giving (i.e. $\Omega$).
</div>
</TabItem>
<TabItem value="complex" label="Exemple 2" attributes={{type: "exercise"}}>
<div class="tab-content" data-type="exercise">
    A random variable can be more complex: the next word you think of (with $E=\text{dictionnary}$ and $\Omega$ can be the whole structure of your brain and your knowledge)... 
</div>
</TabItem>
</Tabs>

<Tabs>
<TabItem value="law-rv" label="Law of X" attributes={{type: "definition"}}>
<div class="tab-content" data-type="definition">
    The **law of $X$** or the probability distribution of $X$ is its measure of probability $\mathbb P_X$ on $(E, \mathcal E)$. 
    $$ \forall \varepsilon \in \mathcal E, \mathbb P_X := (X^{-1}(\varepsilon)) $$
</div>
</TabItem>
</Tabs>
If you don't understand anything again, that's okay too. You just need to remember that the law of $X$ is a function that describes how the values of $X$ are distributed. **Many of these are already known and have names: bernoulli, normal, gamma, etc.** A part of the job of a probability/statistics researcher is to play with them. If you want to fully understand this definition, take a look at the [Appendix](/knowledge/machine-learning/statistical-modeling/appendix#measure).

## Statistical models

Statistical modeling is the basis of all statistical inference. To model an experiment is to propose a theoretical law for the random variable $X = (X_1, . . . , X_n)$.

<Tabs>
<TabItem value="statistical model" label="Statistical model" attributes={{type: "definition"}}>
<div class="tab-content" data-type="definition">
    A **statistical model** $\mathcal M$ is the tuple $\mathcal M := ( \mathcal X^n, \mathcal A^n, \mathcal P)$ where $(\mathcal X^n, \mathcal A^n)$ is a measurable space, $\mathcal P$ is a family of probability law (i.e $\mathcal P = (\mathbb P^n_\theta)_{\theta \in \Theta}$) and $n$ is just the number of variable.
</div>
</TabItem>
</Tabs>

It may seem complicated at first, but reassuringly it's not. Let's look at an example through an exercise.

<Tabs>
<TabItem value="coin question" label="Exercise" attributes={{type: "exercise"}}>
<div class="tab-content" data-type="exercise">
    Give the statistical model of a $m$ identical flipping coin. A priori, we don't know if the coins are balanced.
</div>
</TabItem>
<TabItem value="coin tips" label="Tips" attributes={{type: "tips"}}>
<div class="tab-content" data-type="tips">
    0. Forget $\mathcal A$ if you didn't understand the [Appendix](/knowledge/machine-learning/statistical-modeling/appendix#measure).
    1. How many variables you will have?
    2. What value can the flipping coin take? I.e What is the arrival set?
    3. You don't have to take a all family of probability law: you can just take one law! In this way, which one do you choose? And what are the possible values of $\theta$?
</div>
</TabItem>
<TabItem value="coin proof" label="Result" attributes={{type: "proof"}}>
<div class="tab-content" data-type="proof">
    The number of coin is $m$ so we have $n=m$. Each coin can get the value 0 or 1, so the set is $\mathcal X = \{0,1\}$ and the $\sigma$-algebra is $\mathcal A = \sigma(\{0,1\})$ of the measurable space. The law of each coin is a bernoulli noted $\mathcal B(\theta)$ and because we don't know if the coins are balanced, $\theta$ can be between $0$ and $1$, so $\Theta=[0,1]$. So finaly, $\mathcal M = (\{0,1\}^m, \sigma(\{0,1\})^m, (\mathcal B(\theta)^m)_{\theta \in [0.1]})$

    Note: Maybe you're frustrated because you haven't found Bernouilli's law, that's normal. In statistical modeling, the family of laws often comes from the hat like that. It's with experience and by analyzing throws that we can get this law reflex.  That's why we talk about modeling and not reproduction. 
</div>
</TabItem>
</Tabs>

:::note

If the distribution is i.i.d, we can use the direct notation $\mathcal M$ is the tuple $\mathcal M := ( \mathcal X, \mathcal A, \mathbb P_{\theta\in \Theta})$

:::



<Tabs>
<TabItem value="parametric model" label="Parametric model" attributes={{type: "definition"}}>
<div class="tab-content" data-type="definition">
   $\mathcal M$ is said **parametric** when $\Theta$ has a finite dimension.
</div>
</TabItem>
</Tabs>

<Tabs>
<TabItem value="unparametric model" label="Unparametric model" attributes={{type: "definition"}}>
<div class="tab-content" data-type="definition">
   $\mathcal M$ is said **unparametric** when $\Theta$ has a unfinished dimension.
</div>
</TabItem>
</Tabs>
 As unparametric is less restrictive than parametric, it can be used with a wide range of assumptions.

<Tabs>
<TabItem value="identifiability" label="Identifiability" attributes={{type: "definition"}}>
<div class="tab-content" data-type="definition">
   $\mathcal M$ is identifiable when $\forall \theta, \theta ' \in \Theta, \mathbb P_\theta = \mathbb P_{\theta'} \Rightarrow \theta = \theta'$
</div>
</TabItem>
</Tabs>

This assumption is essential for a good machine learning model and is **often forgotten by data scientists**. I hope the example below speaks for itself.


<Tabs>
<TabItem value="identifiability example 1" label="Example 1" attributes={{type: "exercise"}}>
<div class="tab-content" data-type="exercise">
    Assume $\mathcal M = ( \mathbb R, \mathcal B, \mathcal P = (\mathcal N(\alpha + \beta, 1 ), \mathcal N(\gamma + \beta, 1)), \theta=(\alpha, \gamma, \beta))$ is **NOT** identifiable because for $\theta = (1,1,0)$ and $\theta' = (0,0,1)$ we have $\mathcal N(\alpha + \beta, 1 ) = \mathcal N(\gamma + \beta, 1) =\mathcal N(1, 1)$. So if we create an ML algo. to find the good parameters, it could not choose between $\theta$ and $\theta '$ from the data.
</div>
</TabItem>
<TabItem value="identifiability example 2" label="Example 2" attributes={{type: "exercise"}}>
<div class="tab-content" data-type="exercise">
    If you are already ok with linear regression, we have the model $\mathcal M = ( \mathbb R \times \mathbb R, \mathcal B, \mathcal P = \{ P_{(\beta, \sigma ^2)} | \beta \in \mathbb R\}, \theta=(\beta_1 , \beta_2))$ where $P_{(\beta, \sigma ^2)}$ specifies the conditional distribution $Y | X_1, X_2=x_1, x_2 \sim \mathcal N(x_1 \beta_1 + x_2 \beta_2, \sigma^2)$. The identifiability can depend on the data it self. For example if $X_1 \sim 2X_2$ we have $Y | X_1, X_2=x_1, x_2 \sim \mathcal N(2 x_2 \beta_1 + x_2 \beta_2, \sigma^2)$ and so $\theta = (1,0)$ or $\theta = (0,2)$ gives $Y | X_1, X_2=x_1, x_2 \sim \mathcal N(2 x_2, \sigma^2)$. **That's why for linear regression, we have to keep only one variable of the correlated variables**.
</div>
</TabItem>
</Tabs>

<Tabs>
<TabItem value="domination" label="Dominated model" attributes={{type: "definition"}}>
<div class="tab-content" data-type="definition">
   $
    \forall \mathbb P \in \mathcal P, \forall A \in \mathcal A, \mathbb P_\theta(A) = \int_A f_\theta(x)d\xi(x)
   $
   with $\xi$ a positive $\sigma$-finite measure that dominate $\mathbb P$ (i.e when $\xi = 0 \Rightarrow \mathbb P = 0$)
</div>
</TabItem>
</Tabs>
Again, if you didn't understand everything: that's ok. Just remember that in statistics, we precise that the family of laws is not a set of horrible function with the "domination".

## Likelihood

<Tabs>
<TabItem value="likelihood" label="Likelihood" attributes={{type: "definition"}}>
<div class="tab-content" data-type="definition">
In a parametric dominated model with the realizations $x_1, ...,x_n$, the likelihood is the function:
   $
    L(\theta;x_1, ..., x_n) = f_\theta(x_1, ..., x_n)
   $

For a i.i.d sample, $L(\theta;x_1, ..., x_n) = \prod^n_{i=1} f_\theta(x_i)$
</div>
</TabItem>
</Tabs>

<Tabs>
<TabItem value="likelihood example 1" label="Example 1" attributes={{type: "exercise"}}>
<div class="tab-content" data-type="exercise">
    For an i.i.d $n$-sample $x=(x_1,...,x_n)$ of gaussian law $\mathcal N(\mu, \sigma^2)$. Assume that we know $\sigma^2$, the likelihood of the model is $L(\mu;x)=\frac{1}{\sqrt{2 \pi \sigma^2}^n} \exp (- \frac{\sum^n_{i=1} (x_i-\mu)^2}{2\sigma^2})$
</div>
</TabItem>
<TabItem value="likelihood example 2" label="Example 2" attributes={{type: "exercise"}}>
<div class="tab-content" data-type="exercise">
    For an i.i.d $n$-sample $x=(x_1,...,x_n)$ of Bernoulli law $\mathcal B(\theta)$. The likelihood of the model is $L(\theta;x)=\prod ^n_{i=1} \theta^{x_i}(1-\theta)^{1-x_i}$
</div>
</TabItem>
</Tabs>

:::note

For simplicity for i.i.d sample, we often use $\ell_\theta:=\log f_\theta$ with the log-likelihood $\log L(\theta; x_1,...x_n)=\sum^n_{i=1} f_\theta(x_i)$

:::

It's important to understand what likelihood is, and how it differs from classical probability. It's the same function, but not from the same point of view. 
For probabilities, we know the framework in which we're doing the experiment, for example, I know that my coin is fair and I can calculate the probabilities from there (the density is a function of $x$, the expected result).
In the case of likelihood, we don't know the precise framework, but knowing the results, we try to assign a probability of having these results for each possible framework (the density is a function of $\theta$, the setting parameter).