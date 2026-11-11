# Example overlay: Aesop

This is a **reference overlay** for [aesop](https://github.com/ryancosans/aesop). It does not ship inside Aesop today; you can merge it into aesop’s `AGENTS.md` and link here for the generic rules.

## Project summary

- **Stack:** Bun, TypeScript
- **Priority:** speed, low CPU, low memory
- **Game:** `public/` — the run lives in the browser
- **Entry:** `server.ts`

## File placement

| What | Where |
|------|-------|
| HTTP routing | `src/server/` |
| Adventure beats | `src/adventure/` |
| Narration | `src/speech/` |
| Scene images | `src/scene-image/` |
| Beat types | `src/adventure/types.ts` |
| The game | `public/` — entry `public/app.js`, steps in `public/game/` |

## Performance checklist (Aesop)

- [ ] Adventure beats are not cached
- [ ] OpenAI is called only for the feature the player asked for

## Beat shape changes

1. Update `src/adventure/types.ts`
2. Update the DM prompt, parser, and mocks in the same change
3. Update the client module in `public/game/` that reads the new field
4. Note breaking changes in the commit message

## The page

`public/app.js` wires listeners only. Each action and step lives in `public/game/`, one exported function per file. No bundler or client framework.

Shared state modules: `public/game/session.js`, `public/game/elements.js`.
