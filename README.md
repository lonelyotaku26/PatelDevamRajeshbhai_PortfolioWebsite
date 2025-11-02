# Personal Portfolio — Template

This repository contains a responsive personal portfolio template built with HTML, CSS and JavaScript suitable for students.

Features
- Home / About section with name, avatar, bio and CTA
- Skills section with progress indicators
- Projects section (2–4 sample projects)
- Contact form (mailto fallback) and social links
- Resume download button (links to `resume.pdf`)
- Responsive layout, smooth navigation, and simple hover/animation effects

How to use
1. Clone this repository (or create a new repo and add these files).
2. Replace placeholder content:
   - Update your name, bio, projects, and links in `index.html`.
   - Replace `images/avatar.svg` with your photo (keep the same filename or update the path).
   - Add your résumé file named `resume.pdf` to the repository root (or change the link in the header).
   - Update contact email in `index.html` and `js/main.js` (mailto fallback).
3. Commit and push.

Deploy to GitHub Pages
1. Create a repository on GitHub (for example, `yourusername.github.io` for a user site or any repo for a project site).
2. Push these files to the `main` branch (or `gh-pages` if you prefer).
3. In the repo on GitHub, go to Settings → Pages (or "Pages" in the sidebar).
   - For a project site: Select Branch: `main` (or `gh-pages`) and the `/ (root)` folder, then Save.
   - For a user/organization site: create a repo named `yourusername.github.io`, push, and Pages will serve it from `main`.
4. Wait a minute, then visit the provided URL.

Customizations & Next steps
- Replace the contact form with a backend or Formspree if you want server-side handling.
- Convert to a multi-page site or a React app if you prefer.
- Improve accessibility labels and run Lighthouse for performance/accessibility checks.
- Add real project screenshots (place in /images and link from project cards).

License
- Use and modify freely for personal & educational use.
