# Claude Code Configuration

## ESLint & Prettier Setup

### ESLint Configuration
The project uses ESLint with a modern flat configuration in `eslint.config.mjs`:

- **Base configs**: Next.js core web vitals, TypeScript support, and Prettier integration
- **Custom rules**:
  - React/Next.js: Disabled `react-in-jsx-scope` (not needed in Next.js), disabled prop-types
  - TypeScript: Error for unused vars (except those starting with `_`), warnings for explicit `any`
  - Import organization: Automatic import sorting and grouping with alphabetical order
  - Code quality: Enforce `const` over `let`, no `var`, warn on `console` statements, require strict equality

### Prettier Configuration
Located in `.prettierrc` with these settings:
- Single quotes
- 2-space indentation  
- 80 character line width
- Trailing commas (ES5)
- Semicolons enabled
- Arrow functions without parentheses for single params
- LF line endings

### Dependencies
Current packages installed:
- `eslint@^9`, `prettier@3.6.2`
- `eslint-config-next@15.5.2`, `eslint-config-prettier@10.1.8`
- `@typescript-eslint/eslint-plugin@8.42.0`, `@typescript-eslint/parser@8.42.0`
- `eslint-plugin-prettier@5.5.4`, `eslint-plugin-import@2.32.0`
- `eslint-plugin-react-hooks@5.2.0`, `@next/eslint-plugin-next@15.5.2`

### Commands
- **Build**: `pnpm run build` (includes linting and type checking)
- **Lint**: `pnpm run lint`
- **Format**: `pnpm exec prettier --write .`

### TypeScript Compatibility
- **TypeScript**: 5.9.2 (supports `moduleResolution: "bundler"`)
- **Compatible with**: Next.js 15.5.2 and modern ESLint flat config

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

### Build Status
✅ Build working locally and on Vercel
✅ ESLint and Prettier integration complete
✅ TypeScript 5.x compatibility confirmed

## Project Structure

### Source Directory Organization
The project uses Next.js `src` directory structure for better code organization:

```
nextjs-blog-starter/
├── src/
│   └── app/           # App Router pages, layouts, and components
│       ├── favicon.ico
│       ├── globals.css
│       ├── layout.tsx
│       └── page.tsx
├── public/            # Static assets
└── [config files]     # Configuration files at root
```

### Benefits of `src` Directory
- **Clean separation**: Source code isolated from configuration files
- **Better organization**: All application code centralized in `src/`
- **Import optimization**: `@/` alias maps to `./src/*` for clean imports
- **Industry standard**: Follows common React/TypeScript project patterns

### Path Mapping Configuration
TypeScript configuration in `tsconfig.json`:
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "src/**/*.ts", "src/**/*.tsx", ".next/types/**/*.ts"]
}
```

This allows importing from `src/` using the `@/` alias:
```typescript
import Component from '@/app/components/Component'
```