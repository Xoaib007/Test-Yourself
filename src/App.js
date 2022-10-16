

import { createBrowserRouter , RouterProvider} from 'react-router-dom';
import './App.css';
import Blog from './Componet/Blog/Blog';
import Body from './Componet/Body/Body';
import Error404 from './Componet/Error404/Error404';
import Header from './Componet/Header/Header';
import QuizPage from './Componet/QuizPage/QuizPage';
import Stats from './Componet/Stats/Stats';
import Main from './Layout/Main/Main';

function App() {

  

  const router= createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      errorElement:<Error404></Error404>,
      children:[
        {
          path:'/',
          loader: ()=> fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Body></Body>
            
        },
        {
          path: '/',
          element:<Header></Header>,
        },
        {
          path: '/topics/:id',
          loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
          element:<QuizPage></QuizPage>
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
        
      ],
    },
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
