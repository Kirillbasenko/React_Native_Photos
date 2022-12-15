import { StyleSheet, 
         Text, View, 
         TextInput, 
         Image, 
         Button, 
         ScrollView, 
         TouchableWithoutFeedback,
         Keyboard
      } from 'react-native';
import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { THEME } from '../theme';
import { postAdd } from "../store/actions/post";
import PhotoPicker from '../components/PhotoPicker';

export const CreateScreen = ({navigation}) => {
   const [text, setText] = useState("")
   const imgRef = useRef()
   const dispatch = useDispatch();

   const createPost = () => {
      const post = {
         text: text,
         img: imgRef.current,
         date: new Date().toJSON(),
         booked: false
      }
      dispatch(postAdd(post))
      navigation.navigate("Home")
   }

   const photoPickHandler = (uri) => {
      imgRef.current = uri
   }

   return (
      <ScrollView>
         <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.wrapper}>
               <Text style={styles.title}>
                  Create new post
               </Text>
               <TextInput 
                  style={styles.textarea} 
                  placeholder="Enter text"
                  value={text}
                  onChangeText={setText}
                  multiline/>
                  <PhotoPicker onPick={photoPickHandler}/>
                  <Button 
                     title='Save post' 
                     color={THEME.MAIN_COLOR}
                     onPress={() => createPost()}
                     disabled={!text}/>
            </View>
         </TouchableWithoutFeedback>
      </ScrollView>
   )
}

const styles = StyleSheet.create({
   wrapper: {
      padding: 10,
   },
   title: {
      fontSize: 20,
      textAlign: "center",
      fontFamily: "open-regular",
      marginVertical: 10
   },
   textarea: {
      padding: 10,
   }, 
   image: {
      width: "100%",
      height: 200,
      marginVertical: 10
   }
});