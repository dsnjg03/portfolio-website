import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import RootLayout from './RootLayout';
import Home from './Home';
import NotFound from './NotFound';
import Projects from './Projects';
import ProjectView from './ProjectView';
import About from './About';

const router = createBrowserRouter([
  {
    path:"/",
    element: <RootLayout />,
    children:[
      {index:true, element:<Home/>},
      {path:"/projects", index:false, element:<Projects/>},
      {path:"/projects/:project", index:false, element:<ProjectView/>},
      {path:"/about", index:false, element:<About/>},
    ],
    errorElement: <NotFound />
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
