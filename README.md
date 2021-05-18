# Clean React Project Boilerplate

Includes Webpack, Babel, SASS, PostCSS (w/ Autoprefixer), PropTypes.

_Testing Setup:_ Jest + React Testing Library

## Start Development

```
npm start
```

## Build (with Webpack Bundle Analyzer)

```
npm run build:analyze
```

Open the generated `report.html` in the `/dist` folder.

## Environment Variables

Environment variables will be dynamically loaded from:

```
.env.development
.env.production
```

- Create them in the root folder.
