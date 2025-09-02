import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals', 'prettier'],
    rules: {
      // React/Next.js specific
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      
      // Code quality
      "prefer-const": "error",
      "no-var": "error",
      "no-console": "warn",
      "eqeqeq": "error"
    }
  }),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      "*.config.*",
    ],
  }
]

export default eslintConfig
