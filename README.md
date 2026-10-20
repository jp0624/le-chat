# Le-Chat

A real estate website proof of concept with property carousels, search controls and branded agent presentation.

[Live demo](https://lechatrealestate.vercel.app/)

## Local development

Run these commands from the repository root:

```sh
npm install
npm run dev
```

Available scripts:

- `npm run build`: `tsc && vite build`.
- `npm run lint`: `eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0`.
- `npm run preview`: `vite preview`.

## Main dependencies

`react`, `firebase`. See `package.json` for the full dependency list and versions.

Configure the external services used by the application before testing data-dependent features. Use your own development credentials and keep secrets out of Git.
