import { DB } from "../../db"
import * as FileSystem from 'expo-file-system';

export const postsFetched = () => {
   return async dispatch => {
      const posts = await DB.getPosts()
      dispatch({
         type: 'POSTS_FETCHED',
         payload: posts
      })
   }
}

export const postDelete = (id) => async dispatch => {
   await DB.removePost(id)
   dispatch ({
      type: "POST_DELETE",
      payload: id
   })
}

export const bookedToggle = (post) => async dispatch => {
   await DB.updatePost(post)
   dispatch ({
      type: "BOOKED_TOGGLE",
      payload: post.id
   })
}

export const postAdd = (post) => async dispatch => {
   const fileName = post.img.split("/").pop()
   const newPath = FileSystem.documentDirectory + fileName

   try{
      await FileSystem.moveAsync({
         to: newPath,
         from: post.img
      })
   }catch(e){
      console.log(`Error ${e}`);
   }

   const payload = {...post, img: newPath}
   const id = await DB.createPost(payload)

   payload.id = id

   dispatch ({
      type: "POST_ADD",
      payload
   })
}