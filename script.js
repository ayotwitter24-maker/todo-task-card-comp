const card = document.querySelector('[data-testid="test-todo-card"]');
const title = document.querySelector('[data-testid="test-todo-title"]');
const status = document.querySelector('[data-testid="test-todo-status"]');
const completeToggle = document.querySelector('[data-testid="test-todo-complete-toggle"]');
const dueDate = document.querySelector('[data-testid="test-todo-due-date"]');
const timeRemaining = document.querySelector('[data-testid="test-todo-time-remaining"]');
const editButton = document.querySelector('[data-testid="test-todo-edit-button"]');
const deleteButton = document.querySelector('[data-testid="test-todo-delete-button"]');

const FIXED_DUE_DATE = new Date(2026, 3, 16, 18, 0, 0);
const MINUTE_MS = 60 * 1000;
const HOUR_MS = 60 * MINUTE_MS;
const DAY_MS = 24 * HOUR_MS;

// Keep the machine-readable value in sync with the fixed due date used by the timer.
const toLocalDateTime = (date) => {
  const pad = (value) => String(value).padStart(2, '0');

  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(
    date.getHours()
  )}:${pad(date.getMinutes())}:00`;
};

const pluralize = (value, unit) => `${value} ${unit}${value === 1 ? '' : 's'}`;

const getCalendarDayDifference = (currentDate, targetDate) => {
  const currentMidnight = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
  const targetMidnight = new Date(targetDate.getFullYear(), targetDate.getMonth(), targetDate.getDate());

  return Math.round((targetMidnight - currentMidnight) / DAY_MS);
};

// Convert the fixed due date into readable countdown text.
const getTimeRemainingLabel = (currentDate) => {
  const difference = FIXED_DUE_DATE.getTime() - currentDate.getTime();
  const absoluteDifference = Math.abs(difference);

  if (absoluteDifference < MINUTE_MS) {
    return 'Due now!';
  }

  if (difference > 0) {
    if (difference < DAY_MS) {
      if (difference >= HOUR_MS) {
        return `Due in ${pluralize(Math.ceil(difference / HOUR_MS), 'hour')}`;
      }

      return `Due in ${pluralize(Math.ceil(difference / MINUTE_MS), 'minute')}`;
    }

    const calendarDayDifference = getCalendarDayDifference(currentDate, FIXED_DUE_DATE);

    if (calendarDayDifference === 1) {
      return 'Due tomorrow';
    }

    return `Due in ${pluralize(calendarDayDifference, 'day')}`;
  }

  if (absoluteDifference >= DAY_MS) {
    return `Overdue by ${pluralize(Math.max(1, Math.floor(absoluteDifference / DAY_MS)), 'day')}`;
  }

  if (absoluteDifference >= HOUR_MS) {
    return `Overdue by ${pluralize(Math.max(1, Math.floor(absoluteDifference / HOUR_MS)), 'hour')}`;
  }

  return `Overdue by ${pluralize(Math.max(1, Math.floor(absoluteDifference / MINUTE_MS)), 'minute')}`;
};

const updateCompletionState = () => {
  const isComplete = completeToggle.checked;

  card.classList.toggle('is-complete', isComplete);
  title.setAttribute('aria-label', isComplete ? 'Completed task title' : 'Pending task title');
  status.textContent = isComplete ? 'Done' : 'Pending';
  status.classList.toggle('is-done', isComplete);
};

const updateTimeRemaining = () => {
  timeRemaining.textContent = getTimeRemainingLabel(new Date());
};

dueDate.dateTime = toLocalDateTime(FIXED_DUE_DATE);
timeRemaining.dateTime = toLocalDateTime(FIXED_DUE_DATE);

completeToggle.addEventListener('change', updateCompletionState);
editButton.addEventListener('click', () => {
  console.log('edit clicked');
});
deleteButton.addEventListener('click', () => {
  alert('Delete clicked');
});

updateCompletionState();
updateTimeRemaining();
setInterval(updateTimeRemaining, 60000);
