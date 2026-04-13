# Todo Task Card Component

A fully functional, accessible, and testable todo task card built with vanilla HTML, CSS, and JavaScript.

## What is included

- Semantic HTML with all required `data-testid` attributes
- Accessible checkbox and action buttons
- Responsive card layout with a mobile-first design
- Live time-remaining updates every 60 seconds
- Status switching between `Pending` and `Done`
- Static GitHub Pages deployment workflow

## Project structure

- `index.html` contains the semantic card markup
- `style.css` contains the responsive UI styles and focus states
- `script.js` contains the checkbox, timer, and button behavior
- `TESTING.md` contains a quick manual QA checklist

## Run locally

You can run this project without installing anything.

1. Clone or download the repository.
2. Open `index.html` in your browser.

## Behavior summary

- The checkbox toggles the task between `Pending` and `Done`.
- When completed, the title gets a line-through style.
- The due date is fixed to April 16, 2026 at 6:00 PM.
- The time-remaining text updates every 60 seconds.
- The Edit button logs `edit clicked` in the browser console.
- The Delete button shows `Delete clicked` in an alert.

## Testing

Use the checklist in `TESTING.md` to verify accessibility, layout, and interaction behavior.

## GitHub Pages

A workflow is included at `.github/workflows/deploy-pages.yml`.

To publish the site:

1. Open the repository on GitHub.
2. Go to `Settings > Pages`.
3. Set the source to `GitHub Actions` if GitHub asks for a source.
4. Push to `main` or run the workflow manually from the `Actions` tab.

Once Pages is enabled, the site should be available at:

`https://ayotwitter24-maker.github.io/todo-task-card-comp/`
