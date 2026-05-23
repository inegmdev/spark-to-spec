# .spark.md Document Format

The skill creates and owns `.spark.md` files. One file per idea. Human-readable at every stage.

## File Naming

Derive from the idea title in kebab-case: `my-idea-name.spark.md`  
If no clear title yet: `spark-YYYY-MM-DD.spark.md`

## Full Template

```markdown
---
spark-version: 1.0
idea: "One-line idea title"
status: in-progress
current-phase: 1
completed-phases: []
viability-score: null
viability-verdict: null
created: YYYY-MM-DD
last-updated: YYYY-MM-DD
---

## The Spark

[Original idea as provided by the user — verbatim or closely summarized]

## Progress Log

- [YYYY-MM-DD] Session started — Phase 1 begun

## Phase 1: Deconstruct

<!-- Populated after Phase 1 completes -->
<!-- Contains: Opinion vs. Data baseline, target customer definition, Heartache Test findings -->

## Phase 2: Extract

<!-- Populated after Phase 2 completes -->
<!-- Contains: behavioral evidence found, research findings, customer discovery insights -->

## Viability Verdict

<!-- Populated after Phase 2 viability gate -->
<!--
Scored assessment:
| Dimension             | Score | Reasoning |
|-----------------------|-------|-----------|
| Pain Severity         | x/5   | ...       |
| Market Size           | x/5   | ...       |
| Existing Alternatives | x/5   | ...       |
| Differentiation       | x/5   | ...       |
| Founder Fit           | x/5   | ...       |
| Willingness to Pay    | x/5   | ...       |
| **Weighted Total**    | x.x   |           |

Verdict: [Viable / Not Viable]
Rationale: ...
-->

## Phase 3: Map

<!-- Populated after Phase 3 completes — only if viable -->
<!-- Contains: underserved needs list, feature-to-need mapping, cut features list -->

## Phase 4: Prototype Brief

<!-- Populated after Phase 4 completes -->
<!-- Contains: product type detected, prototype brief/artifacts, tool recommendations -->

## Phase 5: MVP Spec (PRD)

<!-- Populated after Phase 5 completes -->
<!--
### Problem Statement
### Target User
### Core Features
### Experimentation Matrix
### Leap-of-Faith Assumptions (LOFAs)
### Metrics Baseline
### Out of Scope
-->

## Chat Summary

<!-- Running, highly compressed log of the conversation. Updated after every turn. -->
```

## YAML Frontmatter Fields

| Field | Values | Purpose |
|---|---|---|
| `spark-version` | `1.0` | Schema version for future migrations |
| `idea` | string | One-line title for listing/resuming |
| `status` | `in-progress`, `viable`, `not-viable`, `complete` | Session state |
| `current-phase` | `1`–`5`, `complete` | Where to resume |
| `completed-phases` | array of ints | Which phases have written content |
| `viability-score` | float or null | Weighted score from the viability gate |
| `viability-verdict` | `viable`, `not-viable`, or null | Gate result |
| `created` | ISO date | First session date |
| `last-updated` | ISO date | Updated each save |

## Resume Logic

1. Read YAML frontmatter.
2. Check `current-phase` — resume from that phase.
3. Read existing phase sections and `Chat Summary` for context.
4. Add a new Progress Log entry: `[DATE] Session resumed — Phase N continued`.
5. Update `last-updated`, phase content, and `Chat Summary` on **every turn**.
