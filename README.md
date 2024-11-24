# Modern Angular Project

This project is a modern Angular application designed to manage books through an API. Below you'll find instructions to install, configure, and run the project.

## Features
- Book Management: Create, update, delete, and list books
- API Integration for CRUD operations
- Built with modern Angular architecture
- Main navigation with reusable components
- Route protection guard system
- Book cover image management

## Prerequisites
Before starting, make sure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (version 16 or later)
- [npm](https://www.npmjs.com/) (included with Node.js)
- Angular CLI (`npm install -g @angular/cli`)

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/web-dave/modern-angular.git
   cd modern-angular
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the API server:**
   ```bash
   npm run start:api
   ```
   The API will be available at `http://localhost:4730/`

4. **Start development server:**
   ```bash
   ng serve
   ```
   The application will be available at `http://localhost:4200/`

## Project Structure

```
src/
├── app/
│   ├── book/                 # Book module
│   │   ├── book-list/       # Book list component
│   │   ├── book-new/        # New book component
│   │   └── models/          # Data models
│   └── common-components/    # Shared components
├── assets/
│   └── covers/              # Cover images
└── styles.scss              # Global styles
```

## Available Scripts

- `ng serve`: Start development server
- `ng build`: Build the project
- `ng test`: Run unit tests
- `ng lint`: Run linter

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contact

Project Name: Modern Angular Project
GitHub: [https://github.com/web-dave/modern-angular](https://github.com/web-dave/modern-angular)


