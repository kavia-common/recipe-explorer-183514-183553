# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]
- Upgraded dependencies:
  - react -> 18.3.1
  - react-dom -> 18.3.1
  - Added dev tooling: eslint 8.x, @eslint/js, eslint-plugin-react to support flat config in `eslint.config.mjs`
- Kept `react-scripts` at 5.x for Create React App compatibility.
- Fixed ESLint a11y warning in SignIn: replaced `href="#"` with `/forgot-password` and added `role`, `aria-label`, and click handler to preserve behavior in the generated view.

## Build notes
- If Browserslist warns about outdated `caniuse-lite`, run `npx update-browserslist-db@latest`.
