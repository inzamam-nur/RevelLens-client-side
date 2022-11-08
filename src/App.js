import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './Routes/Routes';


function App() {
  return (
   <div className='w-5/6 m-auto '><RouterProvider router={routes}></RouterProvider></div>
  )
}

export default App;
