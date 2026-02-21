# company-management-system
This repository contains a coding exercise completed as part of a job application process. Not intended for public reuse.

---

## Tech Stack

- Next.js (App Router)
- MySQL (Docker)
- Knex (migrations & seeds)

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables
Copy .env.example to .env.local:
```bash
cp .env.example .env.local
```

### 3. Set up the Database (MySQL via Docker)
```bash
npm run db:setup
```

> ⚠️ Make sure Docker Desktop is running before executing `npm run db:setup`.

### 4. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Database Utilities

### Reset and repopulate the database

```bash
npm run db:reset
```