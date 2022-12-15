const initialState = {
   posts: [],
   favorite: []
}

const postReducer = (state = initialState, action) => {
   switch (action.type) {
      case "POSTS_FETCHED":
         return {
         ...state,
         posts: action.payload,
         favorite: action.payload.filter(item => item.booked)
         }
      case "POST_DELETE":
         return {
         ...state,
         posts: state.posts.filter(item => item.id !== action.payload),
         favorite: state.favorite.filter(item => item.id !== action.payload)
         }
      case "BOOKED_TOGGLE":
         const posts = state.posts.map(post => {
            if(post.id === action.payload){
               post.booked = !post.booked
            }
            return post
         })
         return {
            ...state, 
            posts, 
            favorite: posts.filter(item => item.booked)
         }
      case "POST_ADD":
         return {
         ...state,
         posts: [{...action.payload}, ...state.posts]
         }
      default: return state
   }
}

export default postReducer