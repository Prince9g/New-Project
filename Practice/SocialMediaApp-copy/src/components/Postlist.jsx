import { useContext } from "react";
import Post from "./Post"
import { PostList } from "../store/post-list-store";
import { useEffect } from "react";
import Loader from "./Loader";

const Postlist = () => {
    const {postList, addInitialPost} = useContext(PostList);
    useEffect(()=>{
        const controller = new AbortController();
        const signal = controller.signal;
        fetch('https://dummyjson.com/products', {signal})
        .then(res => res.json())
        .then((data) => {
            addInitialPost(data.products);
        });

        return () => {
            controller.abort();
        }
    }, []);
    return <>
        {postList.length === 0 && <Loader/>}
        {postList.map((post) =>(
            <Post key={post.id} post = {post}/>
        ))}
    </>
}
export default Postlist;