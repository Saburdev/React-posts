import { useEffect, useState } from "react";
import { Routes,Route} from 'react-router-dom';
import { Layout } from "./layout/Layout";
import { Posts } from "./pages/Posts";
import { Home } from "./pages/Home";

function App() {

  const[posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
   .then(response => setPosts(response))
   .then(json=> setPosts(json))
  },[])


  return (
      <div className="app">
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home posts={posts}/>}>
            <Route path="posts" element={<Posts/>}/>
          </Route>
        </Routes>
      </div>
  );
}

export default App;
