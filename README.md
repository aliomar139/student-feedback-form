# Student Feedback Form

**A single-page feedback form in React: controlled inputs, validation, a star rating, and a live
character counter.**

<p>
  <img alt="React" src="https://img.shields.io/badge/React_18-20232A?style=flat-square&logo=react&logoColor=61DAFB">
  <img alt="Vite" src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white">
</p>

## What it covers

- Validation on name, email, course, and rating, with messages shown per field
- A 1 to 5 star rating control with a selected state
- A character counter on the optional comment field, capped at 500 characters
- Submission blocked until the form is valid, with a confirmation state afterwards
- Responsive layout in a single stylesheet

## Tech

React 18 · Vite 5 · JavaScript (ES6+) · CSS

## Running it

```bash
npm install
npm run dev
```

Vite prints the local URL, by default <http://localhost:5173>.

## Layout

```
.
├── index.html
├── src/
│   ├── App.jsx            form state, validation, and rendering
│   ├── main.jsx
│   └── styles/app.css
├── package.json
└── vite.config.js
```
