import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './App.css';
import RootLayout from './components/RootLayout';
import Home from './pages/Home';
import JobDetails from './pages/JobDetails';

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<RootLayout />}>
//       <Route index element={<Home />} />
//       <Route path="/:jobId" element={<JobDetails />} />
//     </Route>,
//   ),
// );

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
