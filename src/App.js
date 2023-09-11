import Header from "./components/Header";
import Pagination from "./components/Pagination";
import Blogs from "./components/Blogs";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import { useEffect } from "react";
import "./App.css"

export default function App() {
  const {fetchBlogPosts}=useContext(AppContext);
  useEffect(()=>{
    fetchBlogPosts()},[]);
  return (
  <div>
    <Header></Header>
    <Blogs></Blogs>
    <Pagination></Pagination>
  </div>
  );
}

