# Challenges Project

This repository contains my solutions to Metrobi's frontend coding challenges, implemented using TypeScript and React, with automated tests and some interactive or animated demos.

## Table of Contents

- [Installation](#installation)
- [Running Tests](#running-tests)
- [Challenge Overview](#challenge-overview)
- [Challenge 1](#challenge-1)
- [Challenge 2](#challenge-2)
- [Challenge 3 (React Layout Demo)](#challenge-3-react-layout-demo)
- [Challenge 4](#challenge-4)
- [Challenge 5](#challenge-5)
- [Challenge 6 (Achilles & Turtle Animation)](#challenge-6-achilles--turtle-animation)
- [Challenge 7](#challenge-7)
- [Viewing Animations](#viewing-animations)
- [Project Structure](#project-structure)
- [Notes & Troubleshooting](#notes--troubleshooting)

---

## Installation

**Install dependencies:**

```bash
npm install
```

> Requires Node.js (recommended: latest LTS).

---

## Running Tests

To run all challenge tests:

```bash
npm test
```

- Uses [Jest](https://jestjs.io/) and [ts-jest](https://kulshekhar.github.io/ts-jest/) for TypeScript support.
- All test files are named `method.test.ts` inside each challenge folder.

---

## Challenge Overview

### Challenge 1

- **File:** `challenge-1/index.ts`
- **Function:** `getDuplicateItems(arr)`
- **Description:** Returns all duplicate items from an array, handling objects and primitives.
- **Test:** `challenge-1/method.test.ts`

### Challenge 2

- **File:** `challenge-2/index.ts`
- **Function:** `showAsyncConsole(arr)`
- **Description:** Logs each item in the array to the console asynchronously, with exponentially increasing delays.
- **Test:** `challenge-2/method.test.ts`

### Challenge 3 (React Layout Demo)

- **Files:** `challenge-3/index.tsx`, `challenge-3/styles.css`, `challenge-3/index.html`
- **Description:** Responsive React layout demo with multiple sections and custom styles.
- **How to run:** See [Viewing Animations](#viewing-animations)

### Challenge 4

- **File:** `challenge-4/index.ts`
- **Function:** `getBracketsCloseCorrectly(str)`
- **Description:** Checks if a string of brackets is correctly closed and nested.
- **Test:** `challenge-4/method.test.ts`

### Challenge 5

- **File:** `challenge-5/index.ts`
- **Functions:** `createGetEggBroke(criticalFloor)`, `checkSafeFloorWithEggs(getEggBroke)`
- **Description:** Solves the classic "egg drop" problem to find the highest safe floor.
- **Test:** `challenge-5/method.test.ts`

### Challenge 6 (Achilles & Turtle Animation)

- **File:** `challenge-6/index.html`
- **Description:** Visualizes the Achilles and the Turtle paradox with a simple animation.
- **How to run:** See [Viewing Animations](#viewing-animations)
- **Extra:** You can see the distance between Achilles and the Turtle being logged in real time in your browser's console during the animation.

### Challenge 7

- **File:** `challenge-7/index.ts`
- **Function:** `getMaxValue(carrotTypes, capacity)`
- **Description:** Solves a fractional knapsack problem for carrots with different weights and prices.
- **Test:** `challenge-7/method.test.ts`

---

## Viewing Animations

### Challenge 3 (React Layout Demo)

To view the interactive layout:

```bash
npm run challenge:3
```

- Opens a Vite dev server (default: [http://localhost:5173/](http://localhost:5173/)).
- Make sure your browser window is wide enough for the layout to display correctly.
- If styles do not load, try refreshing or clearing cache.

### Challenge 6 (Achilles & Turtle Animation)

To view the Achilles and the Turtle animation:

```bash
npm run challenge:6
```

- Opens a Vite dev server (default: [http://localhost:5173/](http://localhost:5173/)).
- The animation starts automatically. No interaction is required.
- For best results, use a modern browser (Chrome, Firefox, Edge, Safari).

---

## Notes & Troubleshooting

- **TypeScript:** All code is written in TypeScript. Type definitions for React and Jest are included.
- **Jest:** Uses `ts-jest` for TypeScript support. If you encounter issues, ensure your Node.js version is compatible with the Jest version in `package.json`.
- **Vite:** Used for serving the frontend challenges. If ports conflict, use the `--port` flag (e.g., `vite ./challenge-3 --port=3000`).
- **Browser Compatibility:** For best results, use a modern browser.
- **Contributions:** Feel free to fork and submit pull requests for improvements or new challenges!

---

## License

ISC
