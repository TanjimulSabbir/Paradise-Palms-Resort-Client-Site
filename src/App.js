import './App.css';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Router from './Components/Layout/Routes/Routes';
import ScrollToTopButton from './Components/Shared/ScrollTop/Scrolltop';


function App() {

  return (
    <div>
      <RouterProvider router={Router}></RouterProvider>
      <Toaster position='top-center' />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
