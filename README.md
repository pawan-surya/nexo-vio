# A Place Beyond Time

A responsive personal website that blends storytelling with a professional, visionary aesthetic. Built for easy deployment on **GitHub Pages** and optional custom domain via **GoDaddy**.

---

## Quick start

1. **Clone or download** this repo.
2. Open `index.html` in a browser, or run a local server:
   ```bash
   # From the project root (e.g. website/)
   npx serve .
   # or: python -m http.server 8000
   ```
3. Customize copy, links, and images in `index.html` and `css/styles.css` as needed.

---

## Deploy to GitHub Pages

1. Create a new repository on GitHub (e.g. `your-username.github.io` for a user site, or any repo name for a project site).
2. Push this project to the repo:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: A Place Beyond Time"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages**.
4. Under **Source**, choose **Deploy from a branch**.
5. Branch: **main** (or **master**), folder: **/ (root)**. Save.
6. After a minute or two, the site will be live at:
   - User/org site: `https://YOUR_USERNAME.github.io`
   - Project site: `https://YOUR_USERNAME.github.io/YOUR_REPO/`

If you use a **project site** (e.g. repo name `my-website`), your site URL has a path: `https://username.github.io/my-website/`. For root-level assets to load, either use a **user/org** repo named `username.github.io`, or set a base path (e.g. `<base href="/my-website/">` in `index.html`) and adjust asset paths if needed.

---

## Point your GoDaddy domain to GitHub Pages

You can use a custom domain (e.g. `yourdomain.com`) hosted at GoDaddy with GitHub Pages.

### 1. Get the GitHub Pages host values

- For a **user/org** site (`username.github.io`): GitHub serves it at `username.github.io`.
- For a **project** site: it’s `username.github.io` (same).

You’ll point your domain to `username.github.io` using DNS.

### 2. Configure DNS at GoDaddy

1. Log in to [GoDaddy](https://www.godaddy.com) → **My Products** → your domain → **DNS** (or **Manage DNS**).
2. Add or edit records as below.

**Option A — Root domain (e.g. `yourdomain.com`)**

Use GoDaddy’s **A records** for GitHub’s IPs:

| Type | Name | Value           | TTL  |
|------|------|-----------------|------|
| A    | @    | 185.199.108.153 | 600  |
| A    | @    | 185.199.109.153 | 600  |
| A    | @    | 185.199.110.153 | 600  |
| A    | @    | 185.199.111.153 | 600  |

Optional: add a **CNAME** for `www` so `www.yourdomain.com` works:

| Type  | Name | Value              | TTL  |
|-------|------|--------------------|------|
| CNAME | www  | YOUR_USERNAME.github.io | 600  |

**Option B — Subdomain (e.g. `www.yourdomain.com`) only**

| Type  | Name | Value              | TTL  |
|-------|------|--------------------|------|
| CNAME | www  | YOUR_USERNAME.github.io | 600  |

Replace `YOUR_USERNAME` with your GitHub username.

### 3. Tell GitHub about the custom domain

1. GitHub repo → **Settings → Pages**.
2. Under **Custom domain**, enter your domain (e.g. `yourdomain.com` or `www.yourdomain.com`).
3. Save. If GitHub shows **Enforce HTTPS**, enable it after DNS has propagated.

### 4. Wait for DNS

Propagation can take from a few minutes up to 48 hours. After that, your GoDaddy domain should open the GitHub Pages site.

### 5. (Optional) Redirect root to www at GoDaddy

If you use `www.yourdomain.com` as the main URL, you can set a **forwarding** rule in GoDaddy so `yourdomain.com` redirects to `https://www.yourdomain.com`.

---

## Customization

- **Content**: Edit `index.html` (sections, copy, links).
- **Colors/fonts**: Edit `:root` and selectors in `css/styles.css`.
- **Project images**: Replace the gradient placeholders (`.project-thumb-1`, etc.) with real images by setting `background-image` on `.project-thumb-placeholder` or using `<img>` inside `.project-thumb`.
- **Contact form**: The form is client-side only. To collect submissions, use a service like [Formspree](https://formspree.io) (set `action="https://formspree.io/f/YOUR_ID"` and `method="POST"` on the form) or your own backend.

---

## Structure

```
website/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── README.md
```

---

**Crafted with purpose. Hosted with pride.**
