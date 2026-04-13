# Manual Test Checklist

Use this quick checklist in a browser after opening `index.html`.

## Structure and selectors

- Confirm there is one `<article>` with `data-testid="test-todo-card"`.
- Confirm the title uses `<h3 data-testid="test-todo-title">`.
- Confirm the description uses `<p data-testid="test-todo-description">`.
- Confirm priority, due date, time remaining, and status use the required selectors.
- Confirm the tags container is `<ul role="list" data-testid="test-todo-tags">`.
- Confirm the edit and delete buttons use the required `data-testid` values.

## Accessibility

- Press `Tab` and verify the checkbox, Edit button, and Delete button receive visible focus styles.
- Confirm the checkbox has an accessible label announced by a screen reader.
- Confirm both action buttons have clear accessible names.
- Confirm the layout remains readable at mobile widths without horizontal scrolling.

## Interaction behavior

- Check the checkbox and confirm the title gets a line-through style.
- Check the checkbox and confirm the status text changes from `Pending` to `Done`.
- Uncheck the checkbox and confirm the title and status return to the original state.
- Click Edit and confirm the browser console logs `edit clicked`.
- Click Delete and confirm an alert appears with `Delete clicked`.

## Time logic

- Confirm the due date reads April 16, 2026 at 6:00 PM.
- Confirm the time-remaining field changes from `Loading...` to a human-readable message.
- Confirm the message matches the current date context, such as `Due tomorrow`, `Due in 2 hours`, or `Overdue by 1 day`.
- Leave the page open long enough to ensure the time-remaining text can refresh every 60 seconds.
