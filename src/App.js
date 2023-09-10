import "./App.css"
import Head from "./components/Head";
import Body from "./components/Body";
import store from "./utils/store";
import { Provider } from "react-redux";
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

const appRouter=createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[{
    path:"/",
    element:<MainContainer/>,
  },
  {
    path:"watch",
    element:<WatchPage/>
  }
],
}]);
function App() {
  return (
    <Provider  store={store}>
    <div className="App">
    {/* <h1 className="text-red-300"> Namaste Youtube</h1> */}
    
    
    <Head/>
    {/* <Body/> */}
    <RouterProvider router={appRouter}/>


    {/* 
    
    Head
     Body
      Sidebar
       MenuItems
        MenuContainer
         ButtonsList
      VideoContainer
        VideoCard

    
    
    
    
     */}
    </div>
    </Provider>
  );
}

export default App;
