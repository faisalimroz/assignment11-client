
import './App.css';
import router from './Routes/Routes/Routes'
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <div className=' mx-auto'>
       <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
