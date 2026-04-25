---
title: "Understanding ICH E9(R1) Estimands in Clinical Trials"
date: "2026-04-10"
category: "Biostatistics"
excerpt: "The estimand framework transforms how we define and communicate trial objectives. Here's what every clinical team needs to know."
---

The International Council for Harmonisation's E9(R1) addendum introduced the estimand framework as a systematic approach to aligning trial objectives, design, conduct, and analysis. For clinical teams accustomed to the traditional approach of simply defining a primary endpoint, the shift to estimand thinking can feel significant — but the payoff in clarity and regulatory alignment is substantial.

## What Is an Estimand?

An estimand is a precise description of the treatment effect you intend to measure in your clinical trial. It answers a deceptively simple question: *what question is this trial actually trying to answer?*

ICH E9(R1) defines an estimand through five attributes:

1. **Population** — Which patients are you studying?
2. **Variable (endpoint)** — What are you measuring?
3. **Intervention** — What treatment comparison are you making?
4. **Intercurrent events** — How are you handling events that affect interpretation (treatment discontinuation, rescue medication, death)?
5. **Population-level summary** — How are you summarizing the individual-level responses (mean difference, odds ratio, hazard ratio)?

The critical innovation of E9(R1) is forcing explicit decisions about intercurrent events before the trial begins — not as an afterthought during analysis.

## Why Intercurrent Events Matter

In traditional analysis, sponsors often handled post-randomization complications through implicit choices in the statistical analysis plan: last observation carried forward, per-protocol analysis, or simply excluding patients who discontinued. These choices were rarely made explicit or tied back to the clinical question the trial was meant to answer.

The estimand framework requires you to explicitly select one of five strategies for each intercurrent event:

- **Treatment policy** — ignore the event; include all data regardless
- **Composite** — incorporate the event into the endpoint
- **While on treatment** — restrict the analysis to observations before the event
- **Hypothetical** — estimate what would have happened if the event had not occurred
- **Principal stratum** — restrict to the subpopulation for whom the event would not have occurred

Each strategy answers a subtly different clinical question. Getting this wrong means your analysis doesn't answer the question your trial was designed to address.

## Practical Implications for SAP Development

For biostatisticians developing Statistical Analysis Plans, estimand thinking changes the workflow considerably:

**Earlier engagement with clinical teams.** Estimand decisions are inherently clinical, not statistical. The biostatistician must engage with the clinical team during protocol development to understand what question the trial is trying to answer, and then translate that into precise estimand specifications.

**More explicit sensitivity analyses.** Once a primary estimand is defined, the SAP should include sensitivity analyses using alternative strategies for key intercurrent events. This demonstrates robustness and is increasingly expected by regulators.

**Alignment with missing data assumptions.** The estimand framework makes the connection between missing data assumptions and scientific objectives more explicit. A treatment-policy estimand with a missing-at-random assumption has a specific scientific meaning that must be justified.

## Regulatory Expectations

The FDA, EMA, and other ICH member agencies have endorsed E9(R1) and are increasingly expecting estimand specifications in clinical trial submissions. Reviewers will look for:

- Explicit estimand specification in the protocol
- Alignment between the estimand and the primary analysis method
- Pre-specified sensitivity analyses that test the robustness of the primary estimand
- Justification for the strategies chosen for each intercurrent event

Early engagement with regulatory agencies through Type B meetings (FDA) or Scientific Advice (EMA) to align on the estimand is becoming best practice, particularly for pivotal trials.

## Getting Started

For teams new to estimand thinking, the most practical starting point is a protocol review exercise: go through your current primary and key secondary endpoints and, for each one, explicitly answer the five estimand attribute questions. You'll almost certainly find ambiguities in your current language — events that weren't addressed, or implicit assumptions that were never made explicit.

The estimand framework is ultimately not about adding complexity. It's about making explicit the choices that were always being made implicitly — and ensuring those choices are the right ones for the clinical question at hand.
