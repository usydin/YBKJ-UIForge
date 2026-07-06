# AGENTS.md — YBKJ-UIForge

## Project Role

YBKJ-UIForge is the reusable UI forge for YBKJ smart maintenance products and selected personal projects.

It stores design principles, design tokens, reusable UI patterns, AI development rules, Codex / Trae prompts, smoke checklists, and project migration guides.

## Core Rules

- Do not add real factory data, real IP addresses, real GPS coordinates, passwords, tokens, or real asset ledgers.
- Do not generate code that writes to industrial devices, fire alarm panels, cameras, or network equipment.
- Do not include cracking, bypassing, brute-force, unauthorized protocol access, or firmware modification instructions.
- Prefer reusable rules, tokens, templates, and migration guides over project-specific one-off content.
- Every project-specific rule must tighten the common rules, not loosen them.
- Verification status must be explicit: simulated, VM verified, real-device verified, or field verified.
- Do not write vague statements such as “verified” without specifying the verification level.

## Output Expectations

When modifying this repository, always provide:

1. Changed file list
2. Purpose of the change
3. Reusable scope
4. Project-specific limitations
5. Risk notes
6. Next recommended step
