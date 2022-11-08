import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './Routes/Routes';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
   <RouterProvider router={routes}></RouterProvider>
  )
}

export default App;
