# Frontend Assignment - Kanban Board Application

This project is an interactive **Kanban board** built using **React JS**. It consumes data from an external API and offers a responsive, user-friendly interface for managing tasks by grouping them based on different criteria like status, user, and priority.

## Key Features

- **Group By Options**: Tickets can be grouped by:
  - **Status**
  - **User**
  - **Priority**
- **Sorting Options**: Tickets can be sorted by:
  - **Priority** (descending)
  - **Title** (ascending)
- **Persistent State**: The user's view preferences are saved even after page reloads.
- **Pure CSS Styling**: All styles are written in pure CSS without using external libraries (Bootstrap, Tailwind, etc.).
- **API Integration**: Data is fetched dynamically from the provided API endpoint.

## Deployment

The project is live and can be accessed at:  
[https://kanishaka-pranjal-quicksell-frontend-assignment.vercel.app/](https://kanishaka-pranjal-quicksell-frontend-assignment.vercel.app/)

## Images

![Grouping Feature](https://iili.io/dPAhj7j.png)  
![Kanban Board](https://iili.io/dPAhwkx.png)  
![Task View](https://iili.io/dPAhhdb.png)

## Getting Started

### Prerequisites

Make sure you have **Node.js** and **npm** installed on your local machine. If not, you can download them from [Node.js official site](https://nodejs.org/).

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ReyKan-KP/kanishaka_pranjal_quicksell_frontend_assignment.git
   ```

2. Navigate into the project directory:

   ```bash
   cd kanishaka_pranjal_quicksell_frontend_assignment
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Running the App

To start the application in development mode, run:

```bash
npm start
```

The app will open on [http://localhost:3000](http://localhost:3000) in your browser. The page will reload automatically when you make changes.

### Building for Production

To build the app for production, run:

```bash
npm run build
```

This will create a production-ready version of the app in the `build` folder, which can then be deployed to any hosting provider.

### Testing

To run the tests in interactive watch mode, run:

```bash
npm test
```

## API Information

The application fetches tasks and updates from the following API:

**API Endpoint**: [https://api.quicksell.co/v1/internal/frontend-assignment](https://api.quicksell.co/v1/internal/frontend-assignment)

The API returns ticket data including status, user, and priority, which is dynamically displayed on the Kanban board based on user actions.

### Priority Levels

The API provides the following priority levels:
- **4**: Urgent
- **3**: High
- **2**: Medium
- **1**: Low
- **0**: No priority



---

Made by:  
**Kanishaka Pranjal**  
Email: kanishaka.p21@iiits.in
