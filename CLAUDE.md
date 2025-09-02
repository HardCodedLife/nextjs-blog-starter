# Claude Code Configuration

## ESLint & Prettier Setup

### ESLint Configuration
The project uses ESLint with the following configuration in `eslint.config.mjs`:

- **Base configs**: Next.js core web vitals, TypeScript support, and Prettier integration
- **Custom rules**:
  - React/Next.js: Disabled `react-in-jsx-scope` (not needed in Next.js), warning for exhaustive deps
  - TypeScript: Error for unused vars (except those starting with `_`), warnings for explicit `any`
  - Import organization: Automatic import sorting and grouping
  - Code quality: Enforce `const` over `let`, no `var`, warn on `console` statements

### Prettier Configuration
Located in `.prettierrc` with these settings:
- Single quotes
- 2-space indentation
- 80 character line width
- Trailing commas (ES5)
- Semicolons enabled
- Arrow functions without parentheses for single params

### Commands
- **Lint**: `pnpm run lint` or `npm run lint`
- **Format**: `pnpm exec prettier --write .` or `npx prettier --write .`

### IDE Integration
For VS Code, install the ESLint and Prettier extensions. Add to your settings.json:
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

### Package Dependencies
All required packages are already installed:
- `eslint`, `prettier`
- `eslint-config-next`, `eslint-config-prettier`
- `@typescript-eslint/eslint-plugin`, `@typescript-eslint/parser`
- Various ESLint plugins for React, imports, etc.