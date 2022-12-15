import { Platform } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {THEME} from "../theme"
import { HeaderButtons, Item } from "react-navigation-header-buttons"
import Ionicons from '@expo/vector-icons/Ionicons';

import { SettingsTapScreen } from './TapScreen';
import { AppHeaderIcon } from '../components/AppHeaderIcon';
import {AboutScreen} from "../screens/AboutScreen"
import {CreateScreen} from "../screens/CreateScreen"

export const Drawer = createDrawerNavigator();

export const SettingsDrawerScreen = () => {
   return(
      <Drawer.Navigator screenOptions={ ({route, navigation}) => ({
         headerStyle: {
            backgroundColor: Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff",
         },
         headerTintColor: Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR,
         headerRight: route.name === "Home" ? () => (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
               <Item 
                  title='Take photo'
                  iconName='camera'
                  onPress={() => navigation.navigate("Create")}/>
               </HeaderButtons>
            ) : null,
         drawerActiveTintColor: THEME.MAIN_COLOR,
         drawerLabelStyle: {
            fontFamily: "open-bold"
         }
      })}>
         <Drawer.Screen options={{drawerIcon: () => {
            return <Ionicons name='ios-star' size={20} color={THEME.MAIN_COLOR}/>
         }}} name="Home" component={SettingsTapScreen} />
         <Drawer.Screen  options={{drawerIcon: () => {
            return <Ionicons name='create' size={20} color={THEME.MAIN_COLOR}/>
         }}} name="Create" component={CreateScreen} />
         <Drawer.Screen  options={{drawerIcon: () => {
            return <Ionicons name='information-circle' size={20} color={THEME.MAIN_COLOR}/>
         }}} name="About" component={AboutScreen} />
      </Drawer.Navigator>
      )
   }