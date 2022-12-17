import { PostList } from '../components/PostList';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { postsFetched } from "../store/actions/post";
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import { THEME } from '../theme';

export const MainScreen = ({navigation}) => {
   const dispatch = useDispatch();
   const {posts, loading} = useSelector(state => state.post);

   useEffect(() => {
      dispatch(postsFetched())
   }, [])

   if(loading){
      return (
         <View style={styles.center}>
            <ActivityIndicator color={THEME.MAIN_COLOR}/>
         </View>
      ) 
   }

   const openPostHandler = (post) => {
      navigation.navigate("Post", {postId: post.id, date: post.date, booked: post.booked, img: post.img})
   }

   return <PostList data={posts} onOpen={openPostHandler}/>
}

const styles = StyleSheet.create({
   loading: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
   },
});

