# UI Smoke Checklist

Status: v1.1 governance review candidate. This is a checklist, not test evidence.

## Verification Level

Record build/commit, target OS, display scale, test date, scope and evidence separately.

- [ ] Simulated verification
- [ ] VM verification
- [ ] Real-device verification
- [ ] Field verification

Use PASS / FAIL / NOT_TESTED / NOT_APPLICABLE with evidence and reason; do not mark all levels as passed by inference.

## UI Checks

- [ ] App starts normally
- [ ] Main navigation displays normally
- [ ] Core page layout is not broken at target resolution and scaling
- [ ] Empty, loading, error, unknown and offline states are distinguishable
- [ ] Status badges are readable; critical states do not rely on color alone
- [ ] Text contrast meets the applicable design target; keyboard access and visible focus checked where applicable
- [ ] Common tasks are clear and redundant navigation is removed
- [ ] Essential business functions, critical warnings and risk confirmations remain available
- [ ] Detailed logs and authorized evidence remain accessible without cluttering normal workflows
- [ ] No real IP / GPS / password / token appears in public or synthetic materials
- [ ] No vague “verified” wording appears
- [ ] UI-only changes preserve business logic and existing security gates

Reference: [WCAG 2.2](https://www.w3.org/TR/WCAG22/). Record actual results separately; checklist completion is not certification.
