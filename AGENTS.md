# AI Agent Instructions

This repository currently contains a frontend-only React application under `frontend/`.

## Key facts
- Frontend stack: React 19, TypeScript, Vite, Tailwind CSS, daisyUI.
- App entrypoint: `frontend/src/main.tsx`.
- Routing: `createBrowserRouter` is configured in `frontend/src/main.tsx`.
- Pages live in `frontend/src/pages/`.
- Reusable UI components live in `frontend/src/components/` and nested folders.
- Static content/data is stored in `frontend/src/assets/data/`.
- Image assets live in `frontend/src/assets/imgs/`.

## Important files
- `frontend/package.json` - install/build/lint scripts
- `frontend/vite.config.ts` - Vite plugin configuration
- `frontend/eslint.config.js` - lint setup for TS and React
- `frontend/tsconfig.json` + referenced `frontend/tsconfig.app.json` and `frontend/tsconfig.node.json`
- `frontend/src/main.tsx` - router and app bootstrap
- `frontend/src/App.tsx` - current app shell
- `frontend/src/components/Nav.tsx` - navigation UI and mobile menu

## Common conventions
- Keep component names PascalCase.
- Keep data-driven content in `src/assets/data/` rather than duplicating values in JSX.
- When changing navigation, update both `main.tsx` and `Nav.tsx`.
- Use React Router `Link` for internal navigation.
- Preserve the existing Vite + Tailwind + daisyUI pipeline.

## Run commands
```bash
cd frontend
npm install
npm run dev
npm run build
npm run lint
npm run preview
```

## Agent guidance
- Focus edits inside `frontend/` unless the task explicitly references a different folder.
- Do not assume a backend exists; this repo is frontend-only today.
- If the task involves routes or page layout, validate both `frontend/src/main.tsx` and `frontend/src/App.tsx`.
- Prefer using existing component and page structure over adding new top-level files unless needed.
- Link to `frontend/README.md` for Vite/React setup details rather than copying general Vite template docs.
