# AGENTS.frontend.md

## Frontend Rules

- Use design tokens for colors, spacing, radius, shadow, and typography.
- Avoid default purple-blue gradients, heavy glassmorphism, excessive radii and heavy shadows when they obscure information or weaken brand coherence.
- Prefer task-driven information density; do not force dense tables or generic dashboard layouts into every product.
- Separate normal workflows from detailed engineering diagnostics; keep essential business functions, safety gates and authorized logs accessible.
- Do not convey critical status by color alone. Use appropriate contrast, keyboard interaction and visible focus; evaluate applicable WCAG 2.2 requirements.
- UI components must receive data via props or hooks where appropriate to the existing framework; do not impose a React architecture on native desktop applications.
- UI-only tasks must not change business logic, permission boundaries, device I/O or production deployment.
- Verify the actual target platform, display scaling and workflow. Record verification level and evidence; do not claim untested compliance.
