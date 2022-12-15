import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Platform } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import { SettingsStackScreen } from './StackScreen';
import { FavoriteScreen } from '../screens/FavoriteScreen';
import {THEME} from "../theme"

export const Tab = Platform.OS === "android" ? createMaterialBottomTabNavigator() : createBottomTabNavigator();

export const SettingsTapScreen = () => {
   return (
      <Tab.Navigator shifting={true} screenOptions={ ({route}) => ({
         tabBarIcon: (info) => {
            let iconName;
               if (route.name === 'Home') {
                  iconName = "ios-albums"
               } else if (route.name === 'Favorite') {
               iconName = "ios-star"
            }
            return <Ionicons name={iconName} size={24} color={info.color}/>
         },
         tabBarLabel: route.name === "Home" ? "All" : "Favorite",
         tabBarColor: THEME.MAIN_COLOR,
      })}>
         <Tab.Screen  name="Home" component={SettingsStackScreen} />
         <Tab.Screen options={{tabBarColor: "#8a2be2"}} name="Favorite" component={FavoriteScreen} />
      </Tab.Navigator>
      );
   }