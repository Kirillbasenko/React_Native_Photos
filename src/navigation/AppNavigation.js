import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SettingsStackScreen } from './StackScreen';
import { SettingsTapScreen } from './TapScreen';
import { SettingsDrawerScreen } from './DrawerScreen';

export const PostNavigator = createNativeStackNavigator();

  function Full(){
    return(
      <PostNavigator.Navigator screenOptions={ {headerShown: false }} initialRouteName="Drawer">
        <PostNavigator.Screen  name="Home" component={SettingsStackScreen} />
        <PostNavigator.Screen  name="Favorite" component={SettingsTapScreen} />
        <PostNavigator.Screen  name="Drawer" component={SettingsDrawerScreen} />
      </PostNavigator.Navigator>
    )
  }

  export default Full
