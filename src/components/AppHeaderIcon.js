import { HeaderButton } from "react-navigation-header-buttons"
import { Platform } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import { THEME } from "../theme";

export const AppHeaderIcon = (props) => ( 
   <HeaderButton 
      {...props}
      iconSize={24} 
      color={ Platform.OS === "android" ? "#000" : THEME.MAIN_COLOR}
      IconComponent={Ionicons}
      />
)