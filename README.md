# Task Manager

## Live Demo

You can access the live demo of this project at: [Task Manager Demo](https://mock-api-task.vercel.app/)

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

- React 18
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

## Setup and Installation

1. Clone the repository:https://github.com/FrontEndDevAsti/mock-api-task

2. Navigate to the project directory

3. Install dependencies:npm install

4. Start the development server: npm run dev

5. Open your browser and visit `http://localhost:5173` to view the application.

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

## Future Enhancements

- Implement user authentication
- Add task categories or tags
- Implement a search functionality
- Add due dates and reminders for tasks
- Integrate with a real backend API
- Add unit and integration tests

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgements

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)
- [AOS](https://michalsnik.github.io/aos/)
- [Sonner](https://sonner.emilkowal.ski/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/)


