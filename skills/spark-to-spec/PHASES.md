# Phase Instructions

## Phase 1: Deconstruct the Spark

**Objective**: Strip emotional bias, isolate hypotheses, map the problem space.  
**Book anchor**: *Build* (Tony Fadell), *The Lean Product Playbook* (Dan Olsen)

Conduct a Socratic interview covering these three areas — one question at a time:

1. **Opinion vs. Data baseline** — What does the user *know* to be true vs. what are they *assuming*? Force them to label each claim explicitly.
2. **Target customer** — Who specifically? Not "small businesses" — a job title, a workflow, a context.
3. **The Fadell Heartache Test** — Why must this product exist? What specific frustration does it uniquely eliminate? If the user can't articulate this with emotional conviction, flag it.

Research during Phase 1: Search for existing solutions, adjacent products, and market context. Challenge the user's assumptions with what you find.

**Deliverable**: Idea Brief & Problem Map written to the Phase 1 section of `.spark.md`. Use terse language and fragments.

---

## Phase 2: Extract Unbiased Truth

**Objective**: Simulate customer discovery. Banish hypotheticals. Find behavioral evidence.  
**Book anchor**: *The Mom Test* (Rob Fitzpatrick)

Run a Mom Test-style interrogation — one question at a time:

1. Ask about *past actions*, never hypotheticals. "How do you currently handle X?" not "Would you use a tool that does X?"
2. Force quantification of friction — has the target customer spent *time, money, or manual effort* on this problem? A spreadsheet hack, a custom script, a paid workaround = real pain. "It'd be nice" = not real pain.
3. Research: Search Reddit, Hacker News, industry forums, and product reviews for complaints about current solutions and evidence of the problem in the wild. Surface what you find.

**Deliverable**: Unbiased User Interview Insights written to Phase 2 section. Use terse language and fragments.

---

## Viability Gate (End of Phase 2)

Score the idea on 6 dimensions (1–5 each). Use research findings and the user's answers as evidence.

| Dimension | Weight | What earns a high score |
|---|---|---|
| Pain Severity | 25% | Active workarounds, people paying for partial solutions, vocal complaints online |
| Market Size | 15% | Large enough addressable audience for the intended business model |
| Existing Alternatives | 15% | Weak, fragmented, or absent competition — not entrenched incumbents |
| Differentiation Potential | 20% | A specific, defensible gap — not just "better UX" |
| Founder Fit | 15% | Domain expertise, network access, prior experience with the problem |
| Willingness to Pay | 10% | Evidence people currently spend money on this category |

**Weighted threshold**: Score < 2.5 → Not Viable.

### If Not Viable:
- State clearly: "This idea does not pass the viability threshold."
- Show the scored breakdown with reasoning for each dimension.
- Write a kill rationale to `.spark.md` (what specifically makes it non-viable, what would need to change).
- Set `status: not-viable` in frontmatter. End the session.

### If Viable:
- Present the scored assessment with reasoning.
- Recommend continuing with conviction: "Here's why I think this is worth building."
- If the user challenges a score, require evidence before updating it. Don't capitulate to optimism.
- Set `status: viable` and advance to Phase 3.

---

## Phase 3: Map the Product-Market Fit Matrix

**Objective**: Align features to underserved needs. Cut everything that doesn't differentiate.  
**Book anchor**: *The Lean Product Playbook* (Dan Olsen)

1. List the target customer's top 3–5 underserved needs, derived from Phase 2 findings.
2. For each need, map proposed features that address it.
3. Apply the Differentiation Filter — for every proposed feature, ask: "Does this feature directly contribute to our differentiation from existing alternatives?" If no, cut it from the MVP scope.
4. Research: Search competitor feature sets and product pages. Find the actual gap — be specific about where this product outperforms existing options.

**Deliverable**: Value Proposition Canvas & Core Feature List written to Phase 3 section. Use terse language and fragments. Features should be named, scoped, and tied to a specific need.

---

## Phase 4: Prototype Handoff Brief

**Objective**: Force the user to inhabit the end-user's perspective. Produce a tailored prototype brief.  
**Book anchor**: *Sprint* (Jake Knapp)

First, detect the product type from Phase 1–3 findings. Then produce the appropriate brief:

### Frontend web app or marketing site
- Produce a detailed design brief for `/hallmark` (the Hallmark skill).
- Include: target user, core user journey (step by step), key screens, tone/aesthetic direction, critical CTAs.
- Tell the user: "Run `/hallmark` with this brief to generate the UI."

### Backend service or API
- Produce an OpenAPI 3.0 stub (YAML) covering the core endpoints.
- Recommend a mock framework: [Mockoon](https://mockoon.com) for GUI, [Prism](https://stoplight.io/prism) for CLI, or [MSW](https://mswjs.io) for frontend integration testing.
- Provide the exact setup command to get a mock running locally.

### Mobile app
- Produce a screen-by-screen flow description covering the critical path.
- Include a Framer or Figma prompt the user can paste to generate wireframes.

### CLI tool
- Produce an annotated terminal session transcript showing the exact UX — commands, flags, output formatting, error states.

### Data pipeline or infrastructure
- Produce a Mermaid diagram of the data flow.
- Describe the happy path: input → transformation → output with example data at each stage.

### SaaS / multi-surface product
- Identify the single most critical surface (the one that delivers core value) and treat it as the product type above.

Frame the brief from the end user's perspective, not the builder's. The question to answer: "What does the user *experience*?"

**Deliverable**: Product-type-appropriate prototype brief written to Phase 4 section. Use terse language and fragments.

---

## Phase 5: De-Risk & Document the MVP Spec

**Objective**: Harden validated findings into an engineering draft PRD.  
**Book anchor**: *Testing Business Ideas* (Bland/Osterwalder), *The Lean Startup* (Ries)

Build the PRD section by section, grilling the user on each:

1. **Problem Statement** — one tight paragraph. No fluff. Reviewable against Phase 1 findings.
2. **Target User** — specific persona: role, context, workflow, current pain.
3. **Core Features** — from Phase 3 feature list. Each feature needs: name, one-line description, acceptance criteria.
4. **Experimentation Matrix** — pair every core feature with an explicit post-launch experiment. What assumption does this feature test? How will you know if it worked?
5. **Leap-of-Faith Assumptions (LOFAs)** — the 3–5 assumptions that *must* be true for the product to succeed. If any LOFA is false, the product fails.
6. **Metrics Baseline** — precise telemetry, not vanity metrics. What events to instrument on day one? What retention signal tells you the product is working?
7. **Out of Scope** — explicit list of what is NOT in the MVP. Prevents scope creep.

**Deliverable**: Full draft PRD written to Phase 5 section. Use terse language and fragments throughout. Update frontmatter: `status: complete`, `current-phase: complete`.

Add a final Progress Log entry: `[DATE] Phase 5 complete — draft PRD finalized.`
