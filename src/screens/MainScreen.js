import { PostList } from '../components/PostList';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { postsFetched } from "../store/actions/post";

export const MainScreen = ({navigation}) => {
   const dispatch = useDispatch();
   const {posts} = useSelector(state => state.post);

   useEffect(() => {
      dispatch(postsFetched())
   }, [])

   const openPostHandler = (post) => {
      navigation.navigate("Post", {postId: post.id, date: post.date, booked: post.booked, img: post.img})
   }

   return <PostList data={posts} onOpen={openPostHandler}/>
}

