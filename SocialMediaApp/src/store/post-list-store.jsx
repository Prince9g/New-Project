import { Children, createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  }
  else if(action.type === "ADD_POST"){
    newPostList = [action.payload ,...currPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );
  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };
  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Gym",
    body: "HI friends, I am not gooing to Gym Today Hope I will be good.",
    reactions: 2,
    userId: "user-9",
    tags: ["vacation", "Mumbai", "enjoying"],
  },
  {
    id: "2",
    title: "Goinggggg",
    body: "4 saal ki maski ke baad bhi ho gye h paas, hard to believe.",
    reactions: 15,
    userId: "user-12",
    tags: ["graduated", "Mumbai", "done"],
  },
];

export default PostListProvider;
