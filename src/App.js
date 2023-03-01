import './App.css';
import { RouterProvider } from 'react-router-dom';
import Router from './Components/Layout/Routes/Routes';
import { ToastContainer} from 'react-toastify';

function App() {

  return (
    <div>
        <RouterProvider router={Router}></RouterProvider>
        <ToastContainer />
    </div>
  );
}

export default App;
