import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import JobDetails from './pages/JobDetails';
import RootLayout from './layout/RootLayout';
import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: '/:jobId',
        element: <JobDetails />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
