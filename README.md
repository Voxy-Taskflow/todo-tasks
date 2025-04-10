# CLI Todo App 📝

A simple command-line based todo task manager built with Node.js.

## 🚀 Features

- Add new tasks with deadlines
- View all saved tasks
- Remove completed/unwanted tasks
- Update task deadlines
- Tasks are saved to a JSON file and persist across sessions

## 🛠️ How It Works

- On launch, the app loads existing tasks from `tasks.json`.
- You're prompted to select what you want to do:
  - `st` – See all current tasks
  - `at` – Add a new task with a deadline
  - `rt` – Remove a specific task
  - `cd` – Change the deadline of a task
  - `x` – Exit the program
- All changes are automatically saved to `tasks.json`.

## ▶️ Getting Started

1. Clone the repo:
   ```bash
   git clone https://github.com/Voxy-Taskflow/todo-tasks.git
   cd todo-tasks
   ```

2. Install dependencies:
   ```bash
   npm install prompt-sync
   ```

3. Run the app:
   ```bash
   node main.js
   ```

## 📁 Notes

- The `tasks.json` file is used for saving your data and is ignored in version control via `.gitignore`.
- The app runs in a loop until you exit with `x`.

---

Happy tasking!
