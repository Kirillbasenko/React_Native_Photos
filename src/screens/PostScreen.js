import { StyleSheet, Text, View, Image, Button, ScrollView, Alert } from 'react-native';
import { HeaderButtons, Item } from "react-navigation-header-buttons"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useCallback } from 'react';

import { postDelete, bookedToggle } from "../store/actions/post";
import {THEME} from "../theme"
import { AppHeaderIcon } from '../components/AppHeaderIcon';

export const PostScreen = ({ route, navigation }) => {
   const dispatch = useDispatch();
   let { postId, date } = route.params

   const {posts} = useSelector(state => state.post);

   const post = posts.find(p => p.id === postId)

   const booked = useSelector(state =>
      state.post.favorite.some(post => post.id === postId)
   )

   useEffect(() => {
      navigation.setParams({ booked })
   }, [booked])

   const toggleHandler = useCallback(() => {
      dispatch(bookedToggle(post))
   }, [dispatch, post] )


   navigation.setOptions({ title: `Post from ${new Date(date).toLocaleDateString()}`})
   navigation.setOptions({headerRight: () => (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
               <Item 
                  title='Take photo'
                  iconName= {booked ? "ios-star" : "ios-star-outline"}
                  onPress={() => toggleHandler()}/>
               </HeaderButtons>
            ),})
   navigation.setOptions({headerTintColor: "#000"})

   const removeHandler = () => {
      Alert.alert(
      "Delete post",
      "Are you sure?",
      [
         {
            text: "Cancel",
            style: "cancel"
         },
         { text: "Delete", style: "destructive", onPress: () => {
            dispatch(postDelete(post.id))
            navigation.navigate("Home")
         }}
      ]
      );
   }

   return (
      <View style={styles.wrapper}>
         <ScrollView>
            <Image source={{uri: post.img}} style={styles.image}/>
            <View style={styles.textWrap}>
               <Text style={styles.text}>
                  {post.text}
               </Text>
            </View>
            <View style={styles.buttonWrap}>
               <Button title='Delete' color={THEME.DANGER_COLOR} onPress={() => removeHandler()}/>
            </View>
         </ScrollView>
      </View>
   )
}

const styles = StyleSheet.create({
   image: {
      width: "100%",
      height: 200,
   },
   textWrap: {
      padding: 10,
   },
   text: {
      fontFamily: "open-regular",
      textAlign: "center"
   },
   buttonWrap: {
      alignItems: "center",
   },
   wrapper: {
      flex: 1,
      textAlign: "center"
   }
});