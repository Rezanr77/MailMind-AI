# MailMind AI — Landing Page

A fully self-contained HTML/CSS/JS SaaS landing page for an AI email assistant product. No frameworks, no build tools — open the file in any browser and it works.

---

## Quick Start

1. Open `mailmind-ai.html` in any browser — no server needed
2. To deploy: upload the single file to any static host (Netlify, Vercel, GitHub Pages, etc.)
3. To edit: find the section you want using the **Table of Contents** below and follow the guide

---

## File Structure

Everything lives in one file: `mailmind-ai.html`

```
mailmind-ai.html
├── <style>          CSS — colors, layout, animations, responsive
├── Navbar           Sticky nav with dark/light toggle
├── Hero             Headline, CTA, animated email mockup
├── Social Proof     Auto-scrolling logo bar
├── Features         6-card feature grid
├── Screenshots      Tabbed product preview
├── Benefits         Stats + bullet list
├── How It Works     3-step process
├── Pricing          3-tier cards with billing toggle
├── FAQ              Accordion
├── Final CTA        Closing call-to-action
├── Contact          Form + social links
├── Footer           Links + copyright
└── <script>         All interactive JS at the bottom
```

---

## Table of Contents

1. [Colors & Branding](#1-colors--branding)
2. [Typography](#2-typography)
3. [Navbar](#3-navbar)
4. [Hero Section](#4-hero-section)
5. [Social Proof Bar](#5-social-proof-bar)
6. [Features Section](#6-features-section)
7. [Screenshots / Tabs](#7-screenshots--tabs)
8. [Benefits Section](#8-benefits-section)
9. [How It Works](#9-how-it-works)
10. [Pricing Section](#10-pricing-section)
11. [FAQ Section](#11-faq-section)
12. [Final CTA](#12-final-cta)
13. [Contact Section](#13-contact-section)
14. [Footer](#14-footer)
15. [Animations & Transitions](#15-animations--transitions)
16. [Dark / Light Mode](#16-dark--light-mode)
17. [Responsive / Mobile](#17-responsive--mobile)

---

## 1. Colors & Branding

### Where to find it
At the top of `<style>`, inside `:root { }` — around line 20.

```css
:root {
  --indigo: #4F46E5;
  --indigo-soft: #6366F1;
  --emerald: #10B981;
  --sky: #0EA5E9;
  --rose: #F43F5E;
  --glow-indigo: 0 0 20px rgba(99,102,241,0.6);
  --glow-emerald: 0 0 18px rgba(16,185,129,0.5);
  --glow-rose:    0 0 18px rgba(244,63,94,0.5);
}
```

### How to change the primary color
Replace every instance of `--indigo` and `--indigo-soft`. For example, to switch to purple:
```css
--indigo: #7C3AED;
--indigo-soft: #8B5CF6;
--glow-indigo: 0 0 20px rgba(139,92,246,0.6);
```

### Dark/Light background colors
Found inside the `[data-theme]` blocks just below `:root`:
```css
[data-theme="dark"] {
  --bg: #0F0F12;        /* page background */
  --bg-card: #1A1A1F;   /* card backgrounds */
  --text: #E5E7EB;      /* body text */
  --text-muted: #9CA3AF; /* secondary text */
  --border: rgba(99,102,241,0.2); /* card borders */
}
[data-theme="light"] {
  --bg: #F8F8FC;
  --bg-card: #FFFFFF;
  --text: #1A1A2E;
  --text-muted: #6B7280;
  --border: rgba(99,102,241,0.15);
}
```

### Gradient text
Used on headlines. Search for `.grad-text`:
```css
.grad-text {
  background: linear-gradient(135deg, var(--indigo-soft), var(--emerald));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```
To change the gradient direction or colors, edit the `linear-gradient(...)` values.

---

## 2. Typography

### Font family
Loaded from Google Fonts via `<link>` in the `<head>`. Search for `Plus Jakarta Sans`.

To swap fonts:
1. Go to [fonts.google.com](https://fonts.google.com) and pick a new font
2. Replace the `<link href="https://fonts.googleapis.com/...">` tag in `<head>`
3. Update `font-family` in the `body` rule: `font-family: 'Your Font', sans-serif;`

### Font sizes
Headlines use `clamp()` for fluid sizing:
```css
/* Hero headline */
font-size: clamp(38px, 5vw, 64px);

/* Section titles */
font-size: clamp(28px, 4vw, 44px);
```
The three values are: `minimum, fluid, maximum`. Adjust to taste.

### Font weights used
- `400` — body text
- `500` — nav links
- `600` — subheadings, labels
- `700` — card titles, buttons
- `800` — hero headline, section titles, stats

---

## 3. Navbar

### Where to find it
Search for `<!-- NAVBAR -->` in the HTML.

### Changing the logo name
```html
<a href="#" class="nav-logo">
  ...
  MailMind<span style="color:var(--indigo-soft)">AI</span>
</a>
```
Replace `MailMind` and `AI` with your product name. The `<span>` highlights the suffix in indigo.

### Changing the logo icon
The icon is an inline SVG inside `.nav-logo-icon`. Replace the `<path d="...">` with any SVG path from [Lucide Icons](https://lucide.dev) or [Heroicons](https://heroicons.com).

### Changing nav links
```html
<ul class="nav-links">
  <li><a href="#features">Features</a></li>
  <li><a href="#pricing">Pricing</a></li>
  <li><a href="#how">How It Works</a></li>
  <li><a href="#faq">FAQ</a></li>
  <li><a href="#contact">Contact</a></li>
</ul>
```
The `href="#section-id"` values must match the `id="..."` attribute on the corresponding section.

### Changing the CTA button
```html
<a href="#pricing" class="btn btn-primary">Get Started</a>
```
Change the `href` to point to your signup URL, and update the button text.

### Navbar scroll behavior
In `<script>` at the bottom, search for `navbar scroll`:
```js
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});
```
Change `20` to adjust how many pixels scrolled before the blur/border appears.

---

## 4. Hero Section

### Where to find it
Search for `<!-- HERO -->`.

### Changing the badge text
```html
<div class="hero-badge">
  <span class="hero-badge-dot"></span>
  Now with GPT-4o · Trusted by 50,000+ professionals
</div>
```

### Changing the headline
```html
<h1 class="hero-h1">
  Your inbox.<br>
  <span class="grad-text">Answered by AI.</span><br>
  In seconds.
</h1>
```
The `<span class="grad-text">` applies the indigo-to-emerald gradient. Wrap any word or phrase in it to highlight it.

### Changing the subheading
```html
<p class="hero-sub">MailMind AI reads your emails...</p>
```

### Changing the CTA buttons
```html
<div class="hero-btns">
  <a href="#pricing" class="btn btn-primary" ...>Start Free — No Card Needed</a>
  <a href="#features" class="btn btn-outline" ...>See How It Works</a>
</div>
```

### Changing the stats
```html
<div class="hero-stats">
  <div class="hero-stat">
    <span class="hero-stat-num">3.2<span>hrs</span></span>
    <span class="hero-stat-label">saved per day</span>
  </div>
  ...
</div>
```
Three stats are shown. Add or remove `<div class="hero-stat">` blocks as needed.

### Changing the email mockup content
The mockup is pure HTML inside `.mockup-body`. Find:
- **Email senders/subjects**: inside `.email-item` blocks — edit `.email-sender`, `.email-subject`, `.email-preview`
- **AI reply text**: inside `.ai-reply-text`
- **Button labels**: `.action-send` and `.action-edit`

### Background orbs / glow
The background blobs are `.hero-orb-1`, `.hero-orb-2`, `.hero-orb-3`. Each uses a `radial-gradient`. Change the `rgba(...)` colors to shift the glow color.

---

## 5. Social Proof Bar

### Where to find it
Search for `<!-- SOCIAL PROOF -->`.

### Changing company names and colors
Each logo item follows this pattern:
```html
<div class="logo-item">
  <div class="logo-icon" style="background:#0052CC">
    <svg ...>...</svg>
  </div>
  Atlassian
</div>
```
- Change `background:#0052CC` to the brand color
- Replace the company name text
- Replace the `<svg>` path with a brand icon (use simple shapes)

### Scroll speed
In `<style>`, search for `@keyframes scroll`:
```css
.logos-track { animation: scroll 25s linear infinite; }
```
Lower the `25s` value to scroll faster, higher to scroll slower.

> **Note:** The logos are duplicated (two sets of 8) to create a seamless infinite loop. If you add/remove logos, duplicate the full set.

---

## 6. Features Section

### Where to find it
Search for `<!-- FEATURES -->`.

### Changing the section title and subtitle
```html
<div class="section-label">Features</div>
<h2 class="section-title">Everything your inbox<br>has been missing</h2>
<p class="section-sub">Six AI-powered tools...</p>
```

### Changing a feature card
Each card follows this structure:
```html
<div class="feature-card fade-up">
  <div class="feature-icon" style="background:rgba(99,102,241,0.12)">
    <svg ... stroke="#6366F1">...</svg>
  </div>
  <h3>Smart Email Replies</h3>
  <p>Description text here.</p>
  <span class="feature-tag" style="background:rgba(99,102,241,0.1);color:#6366F1">Core</span>
</div>
```
- **Icon color**: change `stroke="#6366F1"` and the `rgba` in `style="background:..."`
- **Tag label**: change `Core` / `Advanced` and the colors to match
- **Adding a card**: copy a full `<div class="feature-card">` block and paste after the last one

### Grid columns
```css
.features-grid { grid-template-columns: repeat(3, 1fr); }
```
Change `3` to `2` for two columns, or `4` for four columns.

---

## 7. Screenshots / Tabs

### Where to find it
Search for `<!-- SCREENSHOTS -->`.

### Changing tab labels
```html
<button class="tab-btn active" onclick="switchTab(this,'compose')">AI Compose</button>
<button class="tab-btn" onclick="switchTab(this,'chat')">Chat Assistant</button>
<button class="tab-btn" onclick="switchTab(this,'templates')">Templates</button>
```
The second argument in `switchTab(this, 'compose')` must match a key in the `tabs` object in `<script>`.

### Changing tab content
In `<script>`, search for `function switchTab`. The `tabs` object contains the HTML for each tab as a string:
```js
const tabs = {
  compose: `<div class="ss-email-compose">...</div>`,
  chat:    `<div class="ss-email-compose">...</div>`,
  templates: `<div class="ss-email-compose">...</div>`
};
```
Edit the HTML strings directly to change what each tab displays.

### Adding a new tab
1. Add a button: `<button class="tab-btn" onclick="switchTab(this,'newtab')">New Tab</button>`
2. Add an entry in the `tabs` object: `newtab: \`<div>Your content here</div>\``

---

## 8. Benefits Section

### Where to find it
Search for `<!-- BENEFITS -->`.

### Changing the stat cards
```html
<div class="benefit-stat-card">
  <div class="num grad-text">3.2h</div>
  <div class="label">Average time saved per day</div>
</div>
```
Four cards are shown in a 2×2 grid. Change the number color by replacing `grad-text` with an inline `style="color:var(--emerald)"` or any hex color.

### Changing the benefit list items
```html
<div class="benefit-item">
  <div class="benefit-check"><!-- checkmark SVG --></div>
  <div class="benefit-text">
    <h4>Save 3+ hours every single day</h4>
    <p>Supporting description.</p>
  </div>
</div>
```
Add or remove `<div class="benefit-item">` blocks as needed.

---

## 9. How It Works

### Where to find it
Search for `<!-- HOW IT WORKS -->`.

### Changing the steps
```html
<div class="step fade-up">
  <div class="step-num">1</div>
  <div class="step-icon">
    <svg ...>...</svg>
  </div>
  <h3>Connect your email</h3>
  <p>Description text.</p>
</div>
```
Three steps are laid out in a horizontal grid with a connecting line between them.

### The connecting line
```css
.steps::before {
  content: '';
  position: absolute;
  top: 40px;
  left: calc(16.66% + 20px);
  right: calc(16.66% + 20px);
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--indigo-soft), transparent);
}
```
This line is hidden on mobile. If you add a 4th step, adjust the `left` and `right` percentages accordingly.

---

## 10. Pricing Section

### Where to find it
Search for `<!-- PRICING -->`.

### Changing plan names and prices
Each plan has a structure like:
```html
<div class="price-card">                          <!-- or "price-card popular" for highlighted -->
  <div class="price-name">Pro</div>
  <div class="price-amount">
    <span class="dollar">$</span>
    <span class="num" id="proPrice">19</span>     <!-- monthly price -->
    <span class="per">/mo</span>
  </div>
  <p class="price-desc">Short plan description.</p>
  ...
</div>
```

### Changing the yearly prices
In `<script>`, search for `const prices`:
```js
const prices = {
  starter: [0, 0],    // [monthly, yearly]
  pro:     [19, 13],
  biz:     [49, 34]
};
```
The IDs `starterPrice`, `proPrice`, `bizPrice` must match the `id` on the `<span>` inside each plan card.

### Highlighting a different plan as "Most Popular"
Add `popular` to the card's class: `class="price-card popular"`. The `::before` pseudo-element adds the badge automatically. Remove `popular` from the current card first.

### Changing feature list items
Inside each `.price-card`, the `<ul class="price-features">` contains list items:
```html
<li>
  <svg class="check">...</svg>   <!-- green checkmark -->
  Unlimited AI replies
</li>
<li>
  <svg class="x">...</svg>       <!-- grey X -->
  Priority inbox scoring
</li>
```
Use `.check` for included features and `.x` for excluded ones.

---

## 11. FAQ Section

### Where to find it
Search for `<!-- FAQ -->`.

### Changing questions and answers
Each FAQ item:
```html
<div class="faq-item fade-up">
  <div class="faq-q" onclick="toggleFaq(this)">
    Your question here?
    <svg class="faq-arrow">...</svg>   <!-- do not remove this -->
  </div>
  <div class="faq-a">
    Your answer here. Can be multiple sentences.
  </div>
</div>
```
The accordion JS is in `<script>` — search for `function toggleFaq`. It closes all items before opening the clicked one.

### Adding a new FAQ
Copy a full `<div class="faq-item">` block and paste it before the closing `</div>` of `.faq-list`.

---

## 12. Final CTA

### Where to find it
Search for `<!-- FINAL CTA -->`.

### Changing the content
```html
<h2>Write better emails in seconds —<br>
  <span class="grad-text">powered by AI.</span>
</h2>
<p>Join 50,000+ professionals who've taken back their mornings. Free forever. No card needed.</p>
<div class="final-cta-btns">
  <a href="#pricing" class="btn btn-primary" ...>Start Free Today</a>
  <a href="#features" class="btn btn-outline" ...>Explore Features</a>
</div>
```

### Removing the background glow
Delete `<div class="final-cta-bg"></div>` or remove the `.final-cta-bg` CSS rule.

---

## 13. Contact Section

### Where to find it
Search for `<!-- CONTACT -->`.

### Changing contact details
```html
<div class="contact-detail">
  <svg>...</svg>
  hello@mailmind.ai       <!-- change this email -->
</div>
<div class="contact-detail">
  <svg>...</svg>
  Mon–Fri, 9am–6pm EST    <!-- change hours/timezone -->
</div>
```

### Changing social links
```html
<div class="social-links">
  <a href="#" class="social-link" title="Email">...</a>
  <a href="#" class="social-link" title="LinkedIn">...</a>
  <a href="#" class="social-link" title="Instagram">...</a>
  <a href="#" class="social-link" title="X (Twitter)">...</a>
</div>
```
Replace `href="#"` with your actual profile URLs.

### Making the contact form functional
The form is currently HTML-only with no backend. To make it send emails, you can integrate a service like [Formspree](https://formspree.io), [EmailJS](https://www.emailjs.com), or [Web3Forms](https://web3forms.com) by adding their snippet to the form submit button handler.

Example with Formspree:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  ...
  <button type="submit" class="btn btn-primary">Send Message</button>
</form>
```

---

## 14. Footer

### Where to find it
Search for `<!-- FOOTER -->`.

### Changing footer links
Four columns: Brand description, Product links, Company links, Legal links.
```html
<div class="footer-col">
  <h4>Product</h4>
  <ul>
    <li><a href="#features">Features</a></li>
    <li><a href="#pricing">Pricing</a></li>
    ...
  </ul>
</div>
```

### Changing the copyright
```html
<p class="footer-copy">© 2026 MailMind AI. All rights reserved.</p>
```

### Footer social icons
```html
<div class="footer-social">
  <a href="#" title="Email"><svg>...</svg></a>
  <a href="#" title="LinkedIn"><svg>...</svg></a>
  <a href="#" title="Instagram"><svg>...</svg></a>
  <a href="#" title="X (Twitter)"><svg>...</svg></a>
</div>
```
Replace each `href="#"` with your real URLs.

---

## 15. Animations & Transitions

### Scroll-triggered fade-up
Any element with `class="fade-up"` starts invisible and slides up into view when scrolled into the viewport. Controlled by:
```js
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); }
  });
}, { threshold: 0.12 });
```
Change `0.12` to adjust how far the element must be on-screen before it animates (0 = as soon as any part appears, 1 = fully visible).

### Stagger delay
Feature cards and FAQ items use `transition-delay` to stagger their animations:
```html
<div class="feature-card fade-up" style="transition-delay: 0.1s">
```
Increase the delay value for a more pronounced stagger effect.

### Global transition speed
All hover effects use `--transition: 0.3s ease`. Change this in `:root` to speed up or slow down every hover animation at once.

### Floating mockup animation
```css
.mockup-wrap { animation: float 5s ease-in-out infinite; }
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-12px); }
}
```
Change `5s` for speed, `-12px` for float height.

### Glow pulse (Pro plan card + primary CTA)
```css
@keyframes glowPulse {
  0%, 100% { box-shadow: var(--glow-indigo); }
  50%       { box-shadow: 0 0 40px rgba(99,102,241,0.9), 0 0 60px rgba(99,102,241,0.4); }
}
```
Adjust the `rgba` values or `px` spread to control the glow intensity.

---

## 16. Dark / Light Mode

The page defaults to **dark mode**. The toggle button in the navbar switches between themes.

### Changing the default theme
Find `<html lang="en" data-theme="dark">` at the top of the file and change `dark` to `light`.

Also update the initial JS state in `<script>`:
```js
let isDark = true;   // change to false for light default
```

### Adding new elements that respect the theme
Use CSS variables `var(--bg)`, `var(--bg-card)`, `var(--text)`, `var(--text-muted)`, `var(--border)` in your new styles instead of hardcoded hex values. They automatically switch when the theme changes.

---

## 17. Responsive / Mobile

The layout uses CSS Grid and three breakpoints:

| Breakpoint | Applies to |
|---|---|
| `max-width: 1024px` | Hero stacks vertically; pricing grid goes single column; benefits go single column |
| `max-width: 768px` | Nav links hidden (hamburger shown); features go single column; footer collapses |

### Changing breakpoints
Search for `@media(max-width:1024px)` and `@media(max-width:768px)` in `<style>`.

### Hamburger / mobile menu
The mobile menu is hidden by default and shown by toggling the `.open` class:
```js
hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});
```
To add or remove items from the mobile menu, edit `<div class="mobile-menu" id="mobileMenu">` — it's separate from the desktop nav.

---

## Common Edits Cheat Sheet

| What you want to change | Search for this |
|---|---|
| Brand name | `MailMind` |
| Primary color | `--indigo:` |
| Hero headline | `hero-h1` |
| Hero CTA button text | `Start Free — No Card Needed` |
| Stats (50k users, 3.2h, 98%) | `hero-stats` / `benefit-stats-grid` |
| Feature card content | `feature-card` |
| Pricing amounts | `const prices` in `<script>` |
| FAQ questions | `faq-q` |
| Contact email | `hello@mailmind.ai` |
| Social media URLs | `href="#"` inside `.social-links` |
| Copyright year | `© 2026` |
| Animation speed | `--transition:` / `0.3s` |
| Scroll animation trigger | `threshold: 0.12` |

---

## Deployment

This is a single `.html` file with no dependencies beyond Google Fonts (loaded via CDN).

**Static hosts that work out of the box:**
- [Netlify](https://netlify.com) — drag and drop the file
- [Vercel](https://vercel.com) — upload via dashboard
- [GitHub Pages](https://pages.github.com) — push file, enable Pages in repo settings
- [Cloudflare Pages](https://pages.cloudflare.com) — connect repo or upload directly

**To use a custom domain:** follow your hosting provider's domain instructions — no additional file changes needed.
