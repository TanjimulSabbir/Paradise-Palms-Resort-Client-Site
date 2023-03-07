import './App.css';
import { RouterProvider } from 'react-router-dom';
import Router from './Components/Layout/Routes/Routes';
import { ToastContainer } from 'react-toastify';
import ScrollToTopButton from './Components/Shared/ScrollTop/Scrolltop';

function App() {

  return (
    <div>
      <RouterProvider router={Router}></RouterProvider>
      <ToastContainer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
