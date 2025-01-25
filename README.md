## Personal Information:

Full Name: Chandresh Lokesha

## Getting Started
clone this repo to your local machine.

Then, run the development server:

```bash
npm install

npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the an image displayed.

Next, checkout to modified branch:

`$ git checkout mmddyyyy`

The file `pages/index.js` is the starting page of the app.

---

## Components Overview

### 1. **Gallery Props Component**
**File:** `gallery_props.tsx`

This file demonstrates:
- Passing **props** to a React component (`GallerySection`).
- Handling default and custom props.
- Displaying structured information about a scientist using a reusable component.

**Key Features:**
- Accepts a `scientist` object and dynamically displays its details.
- Includes support for displaying images and detailed labels.
- Example use case: Rendering information about notable individuals.

---

### 2. **List Keys and ID Component**
**File:** `list_keys_id.tsx`

This file highlights:
- The importance of using **unique keys** when rendering lists in React.
- How `key` helps React optimize rendering for dynamic lists.

**Key Features:**
- Demonstrates rendering a list of people with their names, professions, and accomplishments.
- Uses a unique `id` for each list item as the `key`.
- Showcases reusable components for clean and structured code.

**Best Practices Illustrated:**
- Always use a unique identifier (like `id`) for keys in lists to avoid React warnings and optimize performance.
- Avoid using array indices unless the list is static and never changes.

---

### 3. **Recipes Component**
**File:** `recipes.tsx`

This file showcases:
- Managing and displaying data using TypeScript interfaces.
- Passing structured data (`recipes` array) to child components.
- Rendering nested components to handle different parts of a recipe, such as the name and ingredients.

**Key Features:**
- Contains reusable components:
  - `RecipeSection`: Displays a single recipe's name and ingredients.
  - `RecipeItems`: Converts a `Set` of ingredients into a list.
- Demonstrates handling `Set` types in TypeScript with proper iteration.
- Provides a dynamic way to render recipes from an array of objects.
---