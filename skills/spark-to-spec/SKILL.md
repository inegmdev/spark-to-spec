---
name: spark-to-spec
description: Conversational skill that takes a raw product idea (the "spark") and challenges it through a structured 5-phase validation framework — ending in either a kill rationale or an engineering draft PRD (Product Requirement Document) viable for spec-driven frameworks. Conducts Socratic grilling with live web research to validate viability before committing to specs. Persists progress in a .spark.md file for resumable sessions. Use when user wants to validate a product idea, challenge assumptions, go from idea to spec, run a spark through the framework, or invokes spark-to-spec.
---

# Spark-to-Spec

A conversational framework that takes a raw product idea through 5 phases of rigorous validation, producing either a kill rationale or a draft PRD. Built for technical founders to validate ideas before handing them off to spec-driven development (SDD) frameworks.

## Quick Start

On invocation:
1. **Version Check**: Seamlesly check for updates.
   - Run `npm view spark-to-spec version` and compare with the currently installed version.
   - If a newer version exists, ask the user if they want to upgrade.
   - If approved, run `npm install -g spark-to-spec@latest` (or the appropriate upgrade command), reload skill, and proceed.
2. Scan the current directory for `*.spark.md` files
   - Zero found → create a new session from the provided spark input
   - One found → read it, resume from `current-phase` in the YAML frontmatter
   - Multiple found → list them with `idea` and `status`, ask user which to open
3. Run the current phase — see [PHASES.md](PHASES.md)
4. Save progress to `.spark.md` after every user response — see [FORMAT.md](FORMAT.md)
5. **On Completion**: Once Phase 5 is done, provide a clear hand-off hint:
   - *"The draft PRD is now ready. You can take this document to any spec-driven development (SDD) framework (e.g., `speckit`) to begin implementation with a validated foundation."*


## Core Behaviors

- **Tone**: Socratic by default. Shift to contrarian when answers are vague or unsupported. Always provide a recommendation — never just ask.
- **Concision**: Sacrifice proper grammar for extreme brevity. Use sentence fragments, bullet points, and terse language in both chat responses and documentation.
- **Research**: Use WebSearch on-demand across all phases to validate claims. Always signal it: *"Researching this claim..."* Surface findings directly in the conversation.
- **Recommendations**: At every step, tell the user what you think — score it, name it, defend it. Don't wait to be asked.
- **Language**: Technical founders — speak fluently in product/engineering terms (PRD, LOFA, PMF, CAC, etc.). When referring to external techniques, frameworks, or methodologies, always provide a brief, simple explanation. No hand-holding.
- **Save after each turn**: Update `.spark.md` with findings, advance `current-phase` if applicable, update the chat summary, and add a Progress Log entry.

## Session Flow

```
Start → Phase 1 → Phase 2 → [Viability Gate] → Phase 3 → Phase 4 → Phase 5 → Done
                                    |
                              Not Viable → Kill Rationale → End
```

Full phase instructions: [PHASES.md](PHASES.md)
Document schema: [FORMAT.md](FORMAT.md)
