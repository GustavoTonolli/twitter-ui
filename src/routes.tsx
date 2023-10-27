import { createBrowserRouter } from "react-router-dom";
import { Timeline } from "./pages/Timeline";
import { Status } from "./components/Status";
import { Default } from "./layouts/Default";

export const router = createBrowserRouter([
  
  {
    path: '/',
    element: <Default />,
    children: [
      {
        path: '/',
        element: <Timeline />
      },
      {
        path: '/status',
        element: <Status />
      },
    ]
  }
])