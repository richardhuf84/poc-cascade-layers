# Cascade Layers POC

A proof-of-concept demonstrating CSS Cascade Layers in a React Server Components application built with Parcel.

## Features

- **CSS Cascade Layers**: Organized CSS using `@layer` for better specificity control
- **React Server Components**: Server-side rendering with React components
- **Client Components**: Interactive components that run in the browser
- **Server Actions**: Form handling with server-side actions
- **TypeScript**: Full TypeScript support
- **Parcel**: Fast bundling and development server

## Technologies

- React 19
- Parcel 2
- TypeScript
- Express
- ESLint
- Prettier

## Installation

```bash
npm install
```

## Usage

Start the development server:

```bash
npm start
```

Build for production:

```bash
npm run build
```

Lint the code:

```bash
npm run lint
```

## Project Structure

```
src/
├── actions.ts      # Server actions
├── Alert.tsx       # Alert component
├── client.tsx      # Client-side entry
├── Counter.tsx     # Counter component
├── page.css        # CSS with cascade layers
├── Page.tsx        # Main page component
└── server.tsx      # Server entry
```

## CSS Cascade Layers

This project demonstrates the use of CSS `@layer` to organize stylesheets:

- `reset`: Base resets
- `defaults`: Default styles
- `patterns`: Common patterns
- `components`: Component-specific styles
- `utilities`: Utility classes
- `overrides`: High-specificity overrides

Layers allow for predictable cascading where later layers always win over earlier ones, regardless of specificity.

## License

This project is for demonstration purposes.