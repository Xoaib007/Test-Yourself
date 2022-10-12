
import { createBrowserRouter , RouterProvider} from 'react-router-dom';
import './App.css';
import Error404 from './Componet/Error404/Error404';
import Header from './Componet/Header/Header';
import Main from './Layout/Main/Main';

function App() {
  const router= createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children:[
        {
          path:'/',
          loader: ()=> fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Header></Header>,
        },
        {
          path:'/*',
          element: <Error404></Error404>
        }
      ]
    },
    
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
