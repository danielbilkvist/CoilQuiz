# CoilQuiz

Quiz app built with React and Vite.

## Run locally

1. Install dependencies:

	```bash
	npm install
	```

2. Start development server:

	```bash
	npm run dev
	```

3. Build for production:

	```bash
	npm run build
	```

## Deployment notes

The Vite base path is configurable and defaults to `./` so builds work on most static hosts out of the box.

- Default behavior (no config): good for Netlify, Vercel, static file hosting, and most root/subfolder deployments.
- GitHub Pages project site (for example `https://username.github.io/CoilQuiz/`): set `VITE_BASE_PATH=/CoilQuiz/` before building.

PowerShell example:

```powershell
$env:VITE_BASE_PATH="/CoilQuiz/"; npm run build
```

cmd example:

```cmd
set VITE_BASE_PATH=/CoilQuiz/ && npm run build
```
