# Parallel LLC — Website

Marketing site for Parallel LLC. Static, no build step, no framework. Just HTML, CSS, and a small amount of vanilla JavaScript.

## Structure

```
parallel-site/
├── index.html          # the page
├── assets/
│   ├── styles.css      # all styling
│   └── main.js         # nav, scroll reveals, contact form
├── vercel.json         # hosting config (clean URLs + headers)
├── .gitignore
└── .cursor/rules/      # project context for the Cursor agent
```

## Run locally

No install needed. Either:

- Open `index.html` directly in a browser, or
- In Cursor / VS Code, install the **Live Server** extension, right-click `index.html`, and choose *Open with Live Server*. This gives you auto-reload while editing.

## Edit

Everything lives in three files. To change copy or structure, edit `index.html`. To change look and feel, edit `assets/styles.css` (design tokens are the CSS variables in `:root` at the top). Behavior is in `assets/main.js`.

### Before going live

1. **Contact email** — open `assets/main.js` and change the `CONTACT_EMAIL` constant to your real inbox. The form currently opens the visitor's mail client with the fields pre-filled (no backend required). To collect submissions silently instead, wire the form to a service like Formspree.
2. **Capability Statement** — in `index.html`, the `#snapshot` section has fields marked *"To be added"* for UEI, CAGE Code, and NAICS. Fill them in or delete the section if not needed yet.

## Deploy (Vercel)

1. Push this folder to a GitHub repo.
2. At vercel.com, **Add New → Project**, import the repo. Vercel auto-detects a static site, no settings to change. Deploy.
3. You get a working `*.vercel.app` URL immediately.

## Point the GoDaddy domain at it

1. In the Vercel project: **Settings → Domains → Add**, enter `parallelllc.com`.
2. Vercel shows the exact DNS records to create (typically an A record on the root and a CNAME on `www`).
3. In GoDaddy: **Domain → DNS → Manage DNS**, add the records Vercel gave you.
4. Vercel provisions SSL automatically once it sees the records. Propagation is usually minutes.

The `*.vercel.app` URL keeps working as a fallback; the custom domain becomes the primary public address.
