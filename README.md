# company-management-system
This repository contains a coding exercise completed as part of a job application process. Not intended for public reuse.

---

## Tech Stack

- Next.js (App Router)
- MySQL (Docker)
- Knex (migrations & seeds)

---

## Requirements
- Node.js (LTS recommended)
- Docker Desktop

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

> ⚠️ If you encounter errors, check the **Troubleshooting** section.

### 4. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## Everyday workflow

### 1. Start the Database

```bash
npm run db:start
```

### 2. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## REST API

The application exposes REST endpoints:

- GET /api/automezzi
- GET /api/filiali

Upload endpoints:

- POST /api/automezzi/upload
- POST /api/filiali/upload

These endpoints retrieve data from the database and send it to the required external service.

---

## Database Utilities

### Reset and repopulate the database

```bash
npm run db:reset
```

---

## Troubleshooting

> If `npm run db:setup` or `npm run db:reset` fail, MySQL may still be starting. Wait a few seconds and re-run:

```bash
npm run migrate
npm run seed
```

> Ensure Docker Desktop is running before DB commands.

> If port 3306 is already in use, change the port mapping in docker-compose.yml and update .env.local.