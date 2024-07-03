# Svelte + Prisma ORM CRUD Project

This project is a simple CRUD (Create, Read, Update, Delete) application built using Svelte for the frontend and Prisma ORM for database interactions. It serves as a starting point for building more complex applications.

## Features

- Create, Read, Update, and Delete operations
- Database schema managed with Prisma
- Easy setup and deployment

## Technologies Used

- [SvelteKit](https://kit.svelte.dev/)
- [Prisma ORM](https://www.prisma.io/)

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/get-npm)
- [Prisma CLI](https://www.prisma.io/docs/getting-started/quickstart)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/AayushPaigwar/svelte-prisma-crud.git
   cd svelte-prisma-crud
   ```

2. **Install dependencies:**

   ```bash
    npm install
   ```

3. **Generate Prisma Client:**

   ```bash
    npx prisma generate
   ```

4. **Set up the database:**

   ```bash
    npx prisma migrate dev --name init
   ```

5. **Start the development server:**

   ```bash
    npm run dev
   ```

6. **Open the app:**

   Navigate to [http://localhost:5173](http://localhost:5173) in your browser.

---

## Project Structure

```bash
svelte-prisma-crud
├── prisma
│   ├── schema.prisma
│   └── migrations
├── src
│   ├── lib
│   │   └── prisma.js       # Prisma client
│   ├── routes              # SvelteKit routes
│   │   ├── add-post        # Add post route
│   │   └── delete-post     # Delete post route
│   │   └── +layout.svelte  # Edit post route
│   │   └── +page.server.js # Server-side code
│   │   └── +page.svelte    # Page component
│   └── app.css
│   └── app.html
├── static
│   └── favicon.png        # Favicon image
├── .gitignore
├── package.json
├── README.md
└── svelte.config.js

```

---

## Contributing

Contributions are always welcome! Please ensure that your PR is well-tested and follows the
steps below:

1. Fork the project
2. Create a new branch (`git checkout -b feat/new-feature`)
3. Make changes
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feat/new-feature`)
6. Create a new Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.
