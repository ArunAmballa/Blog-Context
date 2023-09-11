import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";

function Blogs(){

    //Consume Data
    const {posts,loading}=useContext(AppContext)
    console.log("Printing ")
    

    return(
        <div>
            {
                loading ? 

                (<Spinner></Spinner>):
                (
                    
                        posts.length===0 ? 
                        (
                            <div>
                                <p>No Posts Found</p>
                            </div>
                        ):
                        (posts.map((post)=>
                        {
                            return (
                                <div key={post.id}>
                                    <p className="text-red">{post.title}</p>
                                    <p>
                                        By <span>{post.author}</span>on<span>{post.category}</span>
                                    </p>
                                    <p>
                                        Posted on{post.date}
                                    </p>
                                    <p>{post.content}</p>
                                    <div>
                                        {post.tags.map((tag,index)=>{
                                            return <span key={index}>{`#${tag}`}</span>
                                        })}
                                    
                                    </div>
                                </div>
                            );
                        }
                        )
                        )
                    
                )
            }

        </div>
    );
}
export default Blogs;