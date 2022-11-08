import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './Routes/Routes';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
   <div className='w-75 m-auto'><RouterProvider router={routes}></RouterProvider></div>
  )
}

export default App;
