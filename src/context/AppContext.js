import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

//Step-1 Create Context
export const AppContext=createContext();

//Step-2 Provider
export function AppContextProvider({children}){

    const [loading,setLoading]=useState("false");
    const [posts,setPosts]=useState([]);
    const [page,setPage]=useState(1);
    const [totalPages,setTotalPages]=useState();

    //Data Needs to be Filled

    async function fetchBlogPosts(page=1){
        setLoading(true);
        let url=`${baseUrl}?page=${page}`;

        try
        {
            const result=await fetch(url);
            const data=await result.json();
            console.log(data);
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);

        }
        catch(err)
        {
            console.log("Error Occured");
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false);
    }

    function handlePageChange(page){
        setPage(page);
        fetchBlogPosts(page);  
    }

    const value={
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChange,
    };

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>

}