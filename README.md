# Gharwapsi-101 — Portfolio Website

Personal cybersecurity portfolio for Mr. A | SOC Analyst

---

## Personalise Before Deploying

Open `index.html` and replace every placeholder:

| Placeholder | Replace with |
|---|---|
| `[Your Name]` | Your full name |
| `[Month] 2026` | Your return month |
| `[your-handle]` | Your LinkedIn / GitHub username |
| `your@email.com` | Your email address |
| `[Year]` (BE grad) | Your BE graduation year |

Add your photo: save as `assets/images/profile.jpg` and update the `about__photo` section in `index.html`.

Add your resume PDF: save as `assets/docs/resume.pdf`.

---

## Deploy to GitHub Pages

### First time

```bash
# 1. Create a repo named:  yourusername.github.io
# 2. Then from this folder:

git init
git add .
git commit -m "Initial portfolio"
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git push -u origin main
```

Go to: **Settings → Pages → Source: main branch / root** → Save

Your site will be live at: `https://yourusername.github.io`

### Updating

```bash
git add .
git commit -m "Update: [what you changed]"
git push
```
Live within ~60 seconds.

---

## File Structure

```
gharwapsi-portfolio/
├── index.html
├── assets/
│   ├── css/
│   │   ├── style.css        ← Core styles & cyber theme
│   │   ├── animations.css   ← Keyframes & scroll reveals
│   │   └── responsive.css   ← Mobile breakpoints
│   ├── js/
│   │   ├── main.js          ← Nav behavior
│   │   ├── typewriter.js    ← Hero typing effect
│   │   └── animations.js    ← Scroll reveal & skill bars
│   ├── docs/
│   │   └── resume.pdf       ← ADD YOUR RESUME HERE
│   └── images/
│       └── profile.jpg      ← ADD YOUR PHOTO HERE
├── .nojekyll
└── README.md
```

---

## Analytics (Optional)

Sign up free at [goatcounter.com](https://www.goatcounter.com) and paste the one-line script before `</body>` in `index.html`.
