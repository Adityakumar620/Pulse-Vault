# PulseVault

PulseVault is a web-based platform I’ve built to streamline investment portfolio and asset management with real-time insights. It uses HTML, CSS, JavaScript, React, Bootstrap, Material UI, APIs, and MongoDB to create a powerful yet user-friendly tool for traders and investors. Whether tracking market trends or managing transactions, it’s designed for speed and ease, blending live updates with an intuitive, responsive interface styled by Bootstrap and Material UI.

## Inspiration

Inspired by the need for accessible financial tools, PulseVault leverages HTML and CSS for structure and style, with Bootstrap and Material UI enhancing the design—think responsive grids and sleek components like buttons and cards. JavaScript and React drive interactivity through modular components, while APIs (mocked for now) simulate market data, and MongoDB stores portfolios and transactions via a Node.js backend.

## Status

PulseVault is a work in progress, with all key features built. I’ve got React components for portfolio balances, transaction forms, and market tracking—coded, tested, and styled with Bootstrap and Material UI. The last step is assembling these into a cohesive main UI. They’re currently separate modules, and I just need to link them for seamless navigation, like fitting puzzle pieces together.

## Features

- Real-time updates (mocked via APIs)
- React-driven portfolio dashboard styled with Material UI
- Responsive design from Bootstrap and CSS
- MongoDB for secure data, linked by Node.js APIs
- Material UI for polished UI elements (tables, dialogs,graph)

## Tech Stack

- **HTML, CSS**: Core structure and styling
- **JavaScript**: Logic and interactivity
- **React**: Component-based frontend
- **Bootstrap**: Responsive design framework
- **Material UI**: Enhanced UI components
- **APIs**: Data fetching (mocked, ready for live)
- **MongoDB**: Database storage

## Setup

To test it:
1. Clone the repo: `git clone [repo-url]`
2. Install dependencies: `npm install` (in `/frontend` and `/backend`)
3. Start MongoDB: `mongod`
4. Run backend: `npm run backend`
5. Run frontend: `npm run start`
6. View on `localhost:3000` (frontend) and `localhost:5000` (backend)

## Next Steps

Next, I’ll assemble the UI, swap mock APIs for live feeds (e.g., Alpha Vantage), and enhance MongoDB queries. Future plans include alerts, charts with Chart.js, and multi-user support—all while keeping it lightweight.

## About Me

I’m Aditya kumar, a web dev exploring fintech—reach me at arajsg82@gmail.com ! Collaboration’s welcome—fork and submit a PR!