import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MainScreen } from '../screens/MainScreen';
import { PostScreen } from '../screens/PostScreen';

export const PostNavigator = createNativeStackNavigator();

export const SettingsStackScreen = () => {
   return (
      <PostNavigator.Navigator >
         <PostNavigator.Screen options={{headerShown: false }} name="Home" component={MainScreen} />
         <PostNavigator.Screen  name="Post" component={PostScreen} />
      </PostNavigator.Navigator>
      );
   }