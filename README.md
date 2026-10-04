# ThinkBoard - Note Application

A full-stack note-taking web application built with the MERN stack. ThinkBoard allows users to create, view, edit, and delete notes through a clean and responsive interface.

## Features

* Create new notes
* View all notes
* View individual note details
* Edit existing notes
* Delete notes
* Responsive user interface
* Loading states and notifications
* API rate limiting
* MongoDB database integration
* Production-ready frontend and backend setup

## Tech Stack

### Frontend

* React
* Vite
* React Router
* Axios
* Tailwind CSS
* DaisyUI
* Lucide React
* React Hot Toast

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* CORS
* Upstash Redis
* Upstash Rate Limit
* dotenv

## Project Structure

```text
Note-Application/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   ├── db.js
│   │   │   └── upstash.js
│   │   │
│   │   ├── controllers/
│   │   │   └── notseController.js
│   │   │
│   │   ├── middleware/
│   │   │   └── rateLimiter.js
│   │   │
│   │   ├── models/
│   │   │   └── Note.js
│   │   │
│   │   ├── routes/
│   │   │   └── notesRoutes.js
│   │   │
│   │   └── server.js
│   │
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── NoteCard.jsx
│   │   │   ├── NotesNotFound.jsx
│   │   │   └── RateLimitedUi.jsx
│   │   │
│   │   ├── lib/
│   │   │   ├── axios.js
│   │   │   └── utils.js
│   │   │
│   │   ├── pages/
│   │   │   ├── CreatePage.jsx
│   │   │   ├── HomePage.jsx
│   │   │   └── NoteDetailPage.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   └── package.json
│
├── package.json
└── README.md
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/charindu36/Note-Application.git
```

### 2. Navigate to the project

```bash
cd Note-Application
```

### 3. Install dependencies

Install backend dependencies:

```bash
cd backend
npm install
```

Install frontend dependencies:

```bash
cd ../frontend
npm install
```

## Environment Variables

Create a `.env` file inside the `backend` folder.

```env
PORT=5001
NODE_ENV=development

MONGO_URI=your_mongodb_connection_string

UPSTASH_REDIS_REST_URL=your_upstash_redis_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
```

Replace the placeholder values with your own MongoDB and Upstash credentials.

> Do not commit your `.env` file or expose your database and Redis credentials publicly.

## Run the Application

The backend and frontend need to run separately during development.

### Start the backend

Open a terminal:

```bash
cd backend
npm run dev
```

The backend will run on:

```text
http://localhost:5001
```

### Start the frontend

Open another terminal:

```bash
cd frontend
npm run dev
```

The frontend will run on:

```text
http://localhost:5173
```

## API Endpoints

Base URL:

```text
/api/notes
```

| Method | Endpoint         | Description       |
| ------ | ---------------- | ----------------- |
| GET    | `/api/notes`     | Get all notes     |
| GET    | `/api/notes/:id` | Get a single note |
| POST   | `/api/notes`     | Create a new note |
| PUT    | `/api/notes/:id` | Update a note     |
| DELETE | `/api/notes/:id` | Delete a note     |

## Application Flow

```text
React Frontend
      │
      │ Axios
      ▼
Express API
      │
      ├── Routes
      │
      ├── Controllers
      │
      ├── Rate Limiter
      │
      ▼
   MongoDB
```

Upstash Redis is used to handle API rate limiting.

## Production Build

The project is configured to serve the built React frontend from the Express backend in production.

### Build the project

From the project root:

```bash
npm run build
```

This installs the frontend and backend dependencies and creates the production frontend build.

### Start the production server

```bash
npm start
```

For production deployment, make sure these environment variables are configured:

```env
NODE_ENV=production
MONGO_URI=your_mongodb_connection_string
UPSTASH_REDIS_REST_URL=your_upstash_redis_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
```

The application uses the production API path:

```text
/api
```

while local development uses:

```text
http://localhost:5001/api
```

## Security

* Database credentials are stored in environment variables.
* `.env` files are excluded from version control.
* API requests are protected with rate limiting.
* Sensitive connection details should never be committed to GitHub.

## Author

**Charindu Madhusanka**

GitHub:
https://github.com/charindu36

## License

This project is created for learning and development purposes.
