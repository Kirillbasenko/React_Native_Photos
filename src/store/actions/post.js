import { DB } from "../../db"

export const postsFetched = () => {
   return async dispatch => {
      const posts = await DB.getPosts()
      dispatch({
         type: 'POSTS_FETCHED',
         payload: posts
      })
   }
}

export const postDelete = (id) => {
   return {
      type: "POST_DELETE",
      payload: id
   }
}

export const bookedToggle = (id) => {
   return {
      type: "BOOKED_TOGGLE",
      payload: id
   }
}

export const postAdd = (post) => {
   post.id = Date.now().toString()
   return {
      type: "POST_ADD",
      payload: post
   }
}