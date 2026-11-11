# Examples

Small **TypeScript** snippets for teaching and agent context. They are not a runnable package — each file stands alone. Rule modules in [`rules/`](../rules/) remain the source of truth; these files add named before/after pairs you can link from overlays or docs.

## Index

| File | Verdict | Illustrates |
|------|---------|-------------|
| [`typescript/entry-delegates.ts`](typescript/entry-delegates.ts) | Allowed | Thin entry, logic one hop away |
| [`typescript/entry-with-logic.ts`](typescript/entry-with-logic.ts) | Not allowed | Business rules inside an entry |
| [`typescript/create-user-delegates.ts`](typescript/create-user-delegates.ts) | Allowed | HTTP handler → step file |
| [`typescript/route-orchestrator.ts`](typescript/route-orchestrator.ts) | Allowed | Orchestrator: sequential steps, early return |
| [`typescript/passthrough-wrapper.ts`](typescript/passthrough-wrapper.ts) | Not allowed | Passthrough entry → orchestrator |
| [`typescript/nested-chain.ts`](typescript/nested-chain.ts) | Not allowed | Matryoshka call stack |
| [`typescript/single-line-wrapper.ts`](typescript/single-line-wrapper.ts) | Not allowed | Single-line wrapper |
| [`typescript/inline-nested-call.ts`](typescript/inline-nested-call.ts) | Not allowed | Nested calls on one line |

Related rule modules: [`one-hop.md`](../rules/one-hop.md), [`no-single-line-wrappers.md`](../rules/no-single-line-wrappers.md), [`http-handlers.md`](../rules/http-handlers.md).
