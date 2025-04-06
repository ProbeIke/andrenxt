# Project Structure

This document outlines the organization of the Andre NXT project.

## Directory Structure

```
andrenxt/
├── public/             # Static files (images, fonts, etc.)
├── src/                # Source code
│   ├── app/            # Next.js App Router
│   │   ├── layout.tsx  # Root layout component
│   │   ├── page.tsx    # Home page component
│   │   └── globals.css # Global styles
│   ├── components/     # Reusable UI components (to be created)
│   │   ├── ui/         # Basic UI components
│   │   └── layout/     # Layout components
│   ├── lib/            # Utility functions and shared logic (to be created)
│   └── types/          # TypeScript type definitions (to be created)
├── .gitignore          # Git ignore file
├── next.config.ts      # Next.js configuration
├── package.json        # Project dependencies and scripts
├── postcss.config.mjs  # PostCSS configuration
├── README.md           # Project documentation
├── PROJECT_STRUCTURE.md # This file
└── tsconfig.json       # TypeScript configuration
```

## Key Directories and Files

### `/src/app`

Contains the main application code using Next.js App Router.

- `layout.tsx`: The root layout component that wraps all pages
- `page.tsx`: The home page component
- `globals.css`: Global CSS styles

### `/src/components` (to be created)

Reusable UI components organized by purpose:

- `/ui`: Basic UI components like buttons, inputs, cards, etc.
- `/layout`: Layout components like headers, footers, sidebars, etc.

### `/src/lib` (to be created)

Utility functions, hooks, and shared logic:

- API client functions
- Custom hooks
- Helper functions

### `/src/types` (to be created)

TypeScript type definitions:

- Interface definitions
- Type aliases
- Enums

## Styling

This project uses Tailwind CSS for styling. The configuration is in:

- `postcss.config.mjs`
- `tailwind.config.js` (to be created)

## Animation

Framer Motion is used for animations. Import it from:

```typescript
import { motion } from 'framer-motion';
```

## Icons

React Icons is used for icons. Import icons from:

```typescript
import { IconName } from 'react-icons/xx';
// Where xx is the icon set (fa, md, etc.)
