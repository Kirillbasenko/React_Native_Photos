import { HeaderButtons, Item } from "react-navigation-header-buttons"
import { AppHeaderIcon } from '../components/AppHeaderIcon';
import { useSelector } from 'react-redux';

import { PostList } from '../components/PostList';

export const FavoriteScreen = ({navigation}) => {

   const {favorite} = useSelector(state => state.post);

   const openPostHandler = (post) => {
      navigation.navigate("Post", {postId: post.id, date: post.date, booked: post.booked})
   }

   navigation.setOptions({ headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
               <Item 
                  title='Take photo'
                  iconName= "ios-menu"
                  />
               </HeaderButtons>
            ),})

   return <PostList data={favorite} onOpen={openPostHandler}/>
}
