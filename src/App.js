
import { createBrowserRouter , RouterProvider} from 'react-router-dom';
import './App.css';
import Blog from './Componet/Blog/Blog';
import Body from './Componet/Body/Body';
import Error404 from './Componet/Error404/Error404';
import Stats from './Componet/Stats/Stats';
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
          element:<Body></Body>,
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        },
        {
          path:'/stats',
          loader: ()=> fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Stats></Stats>
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
