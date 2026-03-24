# 🐾 Animal Care Hospitals — Website

**Project 3 | Laith Fakhruldin | CSC 3750**

A professional multi-page website for Animal Care Hospitals, a family-owned veterinary practice serving the Metro Detroit area since 2001. This site was redesigned for a modern, clean, and mobile-responsive experience.

## 🌐 Live Site

👉 [View on GitHub Pages](https://laithmf.github.io/Animal-Care-Hospital-Website-Design/)

---

## 📄 Pages

| Page | File | Description |
|---|---|---|
| Home | `Home.html` | Welcome page with intro, pet gallery preview, locations |
| Services | `Services.html` | Full list of veterinary services offered |
| Image Gallery | `Pets Image Gallery.html` | Scrollable photo gallery with image overlay and YouTube embed |
| Coupons | `Coupons.html` | Discounted surgery and vaccine package pricing |
| Contact Us | `Contact Us.html` | Contact form + embedded Google Maps for both locations |
| Resources | `Resoruces.html` | Trusted external veterinary resources and links |
| Review Us | `Review Us.html` | Google and Facebook review links for both clinic locations |

---

## 🛠️ Tech Stack

- HTML5 (semantic structure)
- CSS3 (custom properties, grid, flexbox, responsive design)
- Vanilla JavaScript (scroll-to-top, image overlay, scroll-reveal)
- Google Fonts: DM Serif Display + Nunito
- Google Maps embeds
- YouTube embed

---

## 🔧 Bug Fixes Applied

- Fixed broken `tel` input regex pattern (`[0-9{3}` → `[0-9]{3}`)
- Replaced duplicate `scroll-top-button.js` logic (merged cleanly into `myscript.js`)
- Fixed inconsistent nav link targets (some used `target="_blank"` on same-site pages)
- Replaced invalid `<li>` elements inside `<form>` without proper parent `<ul>`
- Replaced deprecated `<center>` tags with CSS-based centering
- Added `enctype="text/plain"` to mailto form
- Added `lang="en"` and viewport meta to all pages
- Added `rel="noopener"` to all `target="_blank"` external links
- Removed `home1.html` (duplicate/test file, not part of the main site)

---

## 🚀 How to Deploy to GitHub Pages

1. Create a new GitHub repository named `Animal-Care-Hospital-Website-Design`
2. Upload all project files (keep the `images/` folder in the same directory)
3. Go to **Settings → Pages**
4. Set Source to **Deploy from a branch** → `main` → `/ (root)`
5. Save — your site will be live at `https://laithfakhruldin.github.io/Animal-Care-Hospital-Website-Design/`

To link from your portfolio at **laithfakhruldin.com**, add a project card like:

```html
<a href="https://laithfakhruldin.github.io/Animal-Care-Hospital-Website-Design/" target="_blank">
  Project 3 — Animal Care Hospitals Website
</a>
```

---

## 📁 File Structure

```
Animal-Care-Hospital-Website-Design/
├── Home.html
├── Services.html
├── Pets Image Gallery.html
├── Coupons.html
├── Contact Us.html
├── Resoruces.html
├── Review Us.html
├── style.css
├── myscript.js
├── README.md
└── images/
    ├── cat1_200px.png
    ├── cat1_400px.png
    ├── cat1_1400px.png
    ├── twin_puppies_200px.png
    ├── ...
    └── pets_logo_1400px.png
```

---

*© 2022 Animal Care Hospitals. All rights reserved.*
