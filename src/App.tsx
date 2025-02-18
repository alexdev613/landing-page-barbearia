
import { createBrowserRouter } from 'react-router';
import  Home from './pages/home';
import  Terms from './pages/terms';
import { Layout } from './components/layout';

const router = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/terms",
        element: <Terms />
      }
    ]
  }
]);

export { router };
