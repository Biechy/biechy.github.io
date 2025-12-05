---
sidebar_position: 1
---

import styles from "/src/components/MarkdownFeatures/styles.module.css";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Introduction

<Tabs>
<TabItem value="feature" label="Feature Space" attributes={{type: "definition"}}>
<div class="tab-content" data-type="definition">
The **feature space** $\mathcal X$. Usually $\mathcal X=\mathbb R^d$ but you can also have qualitative variable.
</div>
</TabItem>
</Tabs>

<Tabs>
<TabItem value="target" label="Target Space" attributes={{type: "definition"}}>
<div class="tab-content" data-type="definition">
The **target space** $\mathcal Y$. It can be ever compact $\mathbb R$ or countable $\mathbb N$.
</div>
</TabItem>
</Tabs>

<Tabs>
<TabItem value="dataset" label="Dataset" attributes={{type: "definition"}}>
<div class="tab-content" data-type="definition">
A **dataset** is a couple $\mathcal D_n:=(X_i, Y_i)$ where $X_i, Y_i$ r.v from $\mathcal X,\mathcal Y$
</div>
</TabItem>
</Tabs>

:::note

You can split a dataset in a train and a test dataset or a train, a validation and a test dataset.

:::

<Tabs>
<TabItem value="hypothesis class" label="Hypothesis class" attributes={{type: "definition"}}>

<div class="tab-content" data-type="definition">
The **hypothesis class** is the set $\mathcal H = \{h : \mathcal X \rightarrow \mathcal Y; h \text{ measurable }\}$ with $h$ a **predictor**.
</div>
</TabItem>
</Tabs>

<Tabs>
<TabItem value="learning rule" label="Learning rule" attributes={{type: "definition"}}>
<div class="tab-content" data-type="definition">
A learning rule is a mapping from training data to hypotheses in a given hypothesis class, i.e $\hat h : \mathcal D_n \rightarrow \mathcal H$
</div>
</TabItem>
</Tabs>

:::note

By habit, we will not note the conditioning to the dataset of the learning rule: $\hat h (\mathcal D_n)(x):=\hat h (x)$

:::

<Tabs>
<TabItem value="loss" label="Loss function" attributes={{type: "definition"}}>
<div class="tab-content" data-type="definition">
A **loss function** is $\ell : \mathcal Y \times \mathcal Y \rightarrow \mathbb R^+$
</div>
</TabItem>
</Tabs>

<Tabs>
<TabItem value="risk" label="Risk" attributes={{type: "definition"}}>
<div class="tab-content" data-type="definition">
The **risk** of a predictor is $R(\hat h) = \mathbb E(\ell(\hat h(X), Y) )$
</div>
</TabItem>
</Tabs>

:::note

Depending the dataset that you use (i.e train, validation, test) you can have different type of risk. The most important is the generalization one with the test dataset.

:::

<Tabs>
<TabItem value="empirical risk" label="Empirical risk" attributes={{type: "proposition"}}>
<div class="tab-content" data-type="proposition">
Most of time, we don't know the law of the data so we need to estimate $R(\hat h|\mathcal D_n)$ with $\hat{\mathcal R}(\hat h)=\frac{1}{n}\sum_i\ell(\hat h(x_i),y_i)$
</div>
</TabItem>
</Tabs>

:::note

You can also estimate $R(\hat h)$ via cross validation, bootstrap, etc.

:::

<Tabs>
<TabItem value="risk bayes" label="Bayes Risk" attributes={{type: "definition"}}>
<div class="tab-content" data-type="definition">
The **bayes risk** is the best possible risk from the hypothesis class, i.e $\mathcal R^* = \inf_{h \in \mathcal H}\mathbb E(\ell(h(X), Y) )$
</div>
</TabItem>
</Tabs>

<Tabs>
<TabItem value="excess risk" label="Excess risk" attributes={{type: "definition"}}>
<div class="tab-content" data-type="definition">
The **excess risk** is $R(h)-R^*$
</div>
</TabItem>
</Tabs>

<Tabs>
<TabItem value="decomposition empirical risk" label="Decomposition of the Empirical Risk" attributes={{type: "proposition"}}>
<div class="tab-content" data-type="proposition">
$R(\hat h)-R^*=\inf_{h \in \mathcal H}R^*-R(h) + \left( (R(\hat h)-R^*)- (\inf_{h \in \mathcal H}R(h) -R^*) \right)$
</div>
</TabItem>
</Tabs>

:::note

That is the approximation/estimation error (same than bias/variance)

:::
