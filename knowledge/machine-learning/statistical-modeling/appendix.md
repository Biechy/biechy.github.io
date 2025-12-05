import styles from "/src/components/MarkdownFeatures/styles.module.css";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Appendix

TODOOOOOOOOOOOOOOO

This appendix is intended to go into more detail on certain subjects that have been skimmed over in this chapter, because of their minor impact on the overall understanding of the subject.

Although not essential, I encourage you to read this page.

# Measure

# Bayes

Bayesian statistics are another statistical framework that is often contrasted with frequentist statistics. In theoretical statistics, there is a battle between these two fields. In machine learning, we are not dealing with theory, so we don't care: we use both!

### Maximum A Posteriori Estimation

The Bayesian framework comes from Bayes' formula, which in its Bayesian notation is written as:

$$
    \pi(\theta|x) = \frac{f(x|\theta) \pi(\theta)}{f(x)}=\frac{f(x|\theta) \pi(\theta)}{\int f(x|\theta') \pi(\theta')d\theta'}
$$

where $\pi(\theta)$ is the prior law and $\pi(\theta|x)$ the posterior law.

You can see that frequentists and Bayesians do not view statistics in the same way. The former believe that probability is the long-term frequency of a random event, while the latter believe that probability measures a belief or subjective degree of uncertainty regarding an event or parameter.

:::note

A lot of "learning Bayesians statistics" is to learn the links between prior law and posterior law when you put some data from an other law, i.e the conjugate laws.

:::

<Tabs>
<TabItem value="MAP" label="Maximum a posteriori estimation (MAP)" attributes={{type: "definition"}}>
<div class="tab-content" data-type="definition">
The Maximum a posteriori estimation is the estimator given by
$$ 
\hat \theta_{MAP}:=\arg\max_{\theta \in \Theta}\pi(\theta|x)=\arg\max_{\theta \in \Theta}f(x|\theta) \pi(\theta)
$$
</div>
</TabItem>
</Tabs>

:::note

When $\pi(\theta)$ is a uniform law, it coincides with the MLE.

:::

<Tabs>
<TabItem value="MAP" label="Exemple" attributes={{type: "exercise"}}>
<div class="tab-content" data-type="exercise">
    Let's estimate the parameters $\theta$ of $\mathcal B(\theta)$

</div>
</TabItem>
</Tabs>
