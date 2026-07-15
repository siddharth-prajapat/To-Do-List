# To-Do List App

A simple, responsive To-Do List web app built with vanilla JavaScript, HTML, and CSS. Add, delete, and mark tasks as complete — all your data is saved locally in the browser using `localStorage`, so nothing is lost on refresh.

## Features

- ✅ Add new tasks
- ✅ Mark tasks as complete / incomplete
- ✅ Delete tasks
- ✅ Data persists after page refresh (via `localStorage`)
- ✅ Responsive layout — works on mobile and desktop

## Tech Stack

- **HTML** — structure
- **CSS** — styling and responsive layout
- **JavaScript** — app logic (add/delete/toggle tasks, localStorage handling)

## How It Works

1. Tasks are stored as an array of objects, each with an `id`, `text`, and `done` status.
2. Every time a task is added, deleted, or toggled, the array is updated and saved to `localStorage`.
3. On page load, saved tasks are read from `localStorage` and rendered to the screen.

## Getting Started

No installation or build tools required — this is a plain HTML/CSS/JS project.

1. Clone the repository:
   ```bash
   git clone https://github.com/siddharth-prajapat/To-Do-List.git
   ```
2. Open `index.html` in your browser.
3. Start adding your tasks!

## Project Structure

```
├── index.html      # Main HTML file
├── style.css       # Styling
├── script.js       # App logic
└── README.md       # Project documentation
```

## Author

**Siddharth Prajapat**

## License

This project is open source and free to use.
