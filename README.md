# CyberStudy Lab
Free, static cybersecurity study site. No backend, account, or API key.

## Upload to GitHub Pages (website only)
1. Create a public repository (e.g. `cyberstudy-lab`), or use your existing one.
2. **Add file → Upload files**: drag in the *contents* of this folder (keep the `pages`, `css`, `js`, `assets` folders). Commit.
3. **Settings → Pages → Build and deployment → Source**, choose **Deploy from a branch** (or **GitHub Actions** if you have a workflow file), branch `main`, `/ (root)`. Save.
4. Open the URL shown there after a minute.

All links are relative, so it works under `https://name.github.io/repo/`.

## What's new in this update
- **Animated boot screen** on the homepage — your logo spins in with a cyber grid, scanlines, and a loading sequence, then fades into the site. Plays once per browser session; has a Skip button and respects "reduce motion" settings.
- **Cipher lab** (`pages/cipher-lab.html`) — Caesar, Vigenère, and XOR ciphers, with Caesar brute-force.
- **Port scanner simulator** (`pages/port-scanner-lab.html`) — simulated nmap-style scan against safe, fake hosts. No real network traffic.
- **SQLi & XSS playground** (`pages/sqli-xss-lab.html`) — a sandboxed fake login form and comment box to practice spotting and understanding these bugs safely.
- **Phishing analysis lab** (`pages/phishing-lab.html`) — spot the red flags in sample emails, scored.
- **Notebook** (`pages/notebook.html`) — a OneNote-style notes app: notebooks → pages, rich text, saved in your browser, with Export/Import backup.
- **Free AI chat widget** — a chat bubble on every page (`js/chatbot.js`), powered by Puter.js, no API key or signup needed.
- All new pages are wired into the sidebar navigation (`js/app.js`), the offline cache (`sw.js`), and use your `assets/logo-*.png` as the site's favicon and PWA icons.

## Notes
- Progress, notes, bookmarks, and notebook pages are saved in this browser only (no sync). Export/import in Settings and in the Notebook page.
- Educational use only. Practise on systems you own or are authorised to test. The port scanner and SQLi/XSS labs are fully simulated — no real scanning or attack capability is included.
- Your earlier single-page version was not modified; keep it as a backup.
