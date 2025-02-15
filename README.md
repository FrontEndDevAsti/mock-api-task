# Task Manager

## Live Demo

You can access the live demo of this project at: [Task Manager Demo](https://mock-api-task.vercel.app/)

##  Steps to Run the Project Locally

Follow these steps to set up and run the project on your local machine.

### 📌 Prerequisites
Make sure you have the following installed before proceeding:
- **Node.js** (version 14 or higher) → [Download here](https://nodejs.org/)
- **Git** → [Download here](https://git-scm.com/)

### 🛠️ Installation Steps

 Open your terminal and run the following command:  
1. **Clone the repository**    
   ```sh
   git clone https://github.com/FrontEndDevAsti/mock-api-task

2. **Navigate to the project directory**
     ```sh
     cd mock-api-task
3. **Install dependencies**
     ```sh
     npm install          
4. **Start the development serve**
     ```sh
     npm run dev     
5. Open your browser and visit `http://localhost:5173` to view the application.  

## Project Overview

Task Manager is a responsive web application built with React, Vite, and TypeScript. It allows users to create, read, update, and delete tasks in an intuitive interface. The application features a modern design with smooth animations and is fully responsive across all devices.

## Features

- Create new tasks with title and description
- View a list of all tasks
- Edit existing tasks
- Delete tasks
- Sort tasks by newest first, A to Z, or Z to A
- Responsive design for mobile, tablet, and desktop
- Smooth animations on scroll and interactions
- Load more tasks functionality

## Technologies Used

- React 19
- Vite
- TypeScript
- Tailwind CSS
- Axios for API requests
- AOS (Animate On Scroll) for scroll animations
- Sonner for toast notifications
- React Icons for icon components


### Key Components and Files

1. **src/api/api.ts**: Contains all API-related functions using Axios.
2. **src/components/ItemForm.tsx**: A reusable component for adding and editing tasks.
3. **src/components/ItemList.tsx**: Displays the list of tasks with options to edit and delete.
4. **src/components/Loader.tsx**: A loading spinner component shown during data fetching.
5. **src/pages/HomePage.tsx**: The main page of the application, managing the overall state and layout.
6. **src/types/index.ts**: Contains TypeScript type definitions used throughout the project.
7. **src/App.tsx**: The root component of the application, handling routing.
8. **src/main.tsx**: The entry point of the application, where React is rendered to the DOM.
9. **src/index.css**: Global CSS file, including Tailwind CSS imports.
10. **vite.config.ts**: Configuration file for Vite.


## Building for Production

To create a production build, run:npm run build

This will generate optimized files in the `dist` directory, ready for deployment.

## API Integration

This project uses [JSONPlaceholder](https://jsonplaceholder.typicode.com) as a mock API for demonstration purposes. In a real-world scenario, you would replace this with your actual backend API.

The `api.ts` file contains the following functions:
- `fetchItems()`: Retrieves all tasks
- `createItem(title, body)`: Creates a new task
- `updateItem(id, title, body)`: Updates an existing task
- `deleteItem(id)`: Deletes a task

## Responsive Design

The application is fully responsive and optimized for:
- Mobile devices
- Tablets
- Desktop computers

The layout adjusts dynamically to provide the best user experience across all screen sizes. This is achieved through Tailwind CSS utility classes and custom responsive designs in each component.

## Animations

AOS (Animate On Scroll) is used to add smooth fade-in animations to task cards as they enter the viewport. This enhances the overall user experience and gives the application a modern feel.

Animation details:
- Task cards fade up when they enter the viewport
- Buttons have hover animations for better interactivity
- Toast notifications slide in for user feedback

## State Management

The application uses React's built-in useState and useEffect hooks for state management. The main state is managed in the HomePage component and passed down to child components as props.

## Error Handling

Error handling is implemented throughout the application:
- API errors are caught and displayed to the user via toast notifications
- Form validation ensures that users cannot submit empty tasks
- Loading states are managed to provide feedback during asynchronous operations


## Acknowledgements

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)
- [AOS](https://michalsnik.github.io/aos/)
- [Sonner](https://sonner.emilkowal.ski/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/)


