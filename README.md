# Task Tracker

A small React app for keeping a list of tasks in the browser. Tasks live in component state and are cleared when the page reloads. There is no backend and no saved data.

## What you can do

- The app opens with three sample tasks: Food Shopping, Meta Interview, and Amex Interview.
- **Add** in the header opens a form. **Close** hides it.
- A new task needs a name and a day and time. The reminder checkbox is optional. Saving with either field empty shows an alert and does not add the task.
- Each task shows its name. Double-click the row to toggle a reminder, which adds a green left border. The day and time are stored on the task and are not shown in the list.
- The red × on a task deletes it.
- When the list is empty, the page shows “No task to show”.

## Run it

Requires Node.js and npm.

```bash
npm install
npm start
```

The dev server opens at [http://localhost:3000](http://localhost:3000) and reloads when you edit files.

| Script | What it does |
| --- | --- |
| `npm start` | Start the Create React App dev server |
| `npm run build` | Write a production build to `build/` |
| `npm test` | Start the Create React App test runner. This repo has no test files. |
| `npm run eject` | Copy the Create React App config into the project. This cannot be undone and is not required to run the app. |

## Stack

- React 18
- Create React App (`react-scripts` 5)
- `react-icons` for the delete icon

## Layout

- `src/App.js` holds the task list and the add, delete, and reminder handlers
- `src/components/Header.js` and `Button.js` render the title and the Add/Close button
- `src/components/AddTask.js` is the new-task form
- `src/components/Tasks.js` and `Task.js` render the list
