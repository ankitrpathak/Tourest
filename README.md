# Tourest - Explore the World

A modern, responsive travel agency landing page built with HTML, CSS, and vanilla JavaScript.

![Tourest Desktop Preview](readme-images/desktop.png)

## Overview

Tourest is a front-end travel website featuring a visually rich landing page and a booking sign-up form. It showcases popular travel destinations, featured tours, blog articles, and provides an easy way for users to register and book trips.

## Features

- **Responsive Design** — Fully responsive layout that adapts to desktop, tablet, and mobile screens with a hamburger navigation menu.
- **Hero Section** — Eye-catching banner with call-to-action buttons for contacting and learning more.
- **Destinations Gallery** — Browse featured destinations including Maldives, Thailand, Malaysia, Nepal, and Indonesia.
- **Popular Tours** — Tour cards displaying duration, pricing, ratings, and location details.
- **Blog Section** — Latest news and travel articles with author info and publish dates.
- **Booking / Sign-Up Page** — A dedicated registration form with client-side validation (name, phone, email, password) and a password visibility toggle.
- **Newsletter Subscription** — Email subscription form in the footer for travel deals and tips.
- **Smooth Navigation** — Sticky header, smooth scroll navigation links, and a back-to-top button.

## Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Structure and semantics |
| CSS3 | Styling, layout, and responsive design |
| JavaScript (ES6) | DOM manipulation, form validation, UI interactions |
| [Ionicons](https://ionic.io/ionicons) | Icon library |
| [Google Fonts](https://fonts.google.com/) | Typography (Abril Fatface, Comforter Brush, Heebo) |

## Project Structure

```
Tourest/
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── images/
│   │   ├── hero-banner.png
│   │   ├── about-banner.png
│   │   ├── destination-*.jpg
│   │   ├── popular-*.jpg
│   │   ├── blog-*.jpg
│   │   └── ...
│   └── js/
│       └── script.js
├── readme-images/
│   └── desktop.png
├── booking.html
├── booking.js
├── favicon.svg
├── index.html
└── README.md
```

## Getting Started

No build tools or dependencies required — just open the site in a browser.

1. **Clone the repository**
   ```bash
   git clone https://github.com/ankitrpathak/Tourest.git
   ```
2. **Open `index.html`** in your browser, or use a local dev server:
   ```bash
   # Using Python
   python -m http.server 8000

   # Using Node.js (npx)
   npx serve .
   ```
3. Navigate to `booking.html` to access the sign-up / booking form.

## Pages

| Page | Description |
|---|---|
| `index.html` | Main landing page with hero, destinations, tours, about, blog, and footer sections |
| `booking.html` | Sign-up form with client-side validation for name, phone number, email, and password |

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

## Author

**Ankit Raj** — [LinkedIn](https://www.linkedin.com/in/ankitrpathak/)
