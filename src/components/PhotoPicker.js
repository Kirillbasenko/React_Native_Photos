import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { View, StyleSheet, Image, Button } from 'react-native';

const PhotoPicker = ({onPick}) => {
   const [image, setImage] = useState(null)

   async function askForPermissions(){
      /*let result = await ImagePicker.launchImageLibraryAsync({
         mediaTypes: ImagePicker.MediaTypeOptions.All,
         allowsEditing: false,
         aspect: [4, 3],
         quality: 1,
   });*/

   let result = await ImagePicker.launchCameraAsync({
      allowsEditing: false,
      aspect: [16, 9],
      quality: 1,
   })
      if (!result.canceled) {
         setImage(result.assets[0].uri);
         onPick(result.assets[0].uri)
      }
   }

   return(
      <View style={styles.wrapper}>
         <Button 
            title='Create photo'
            onPress={() => askForPermissions()}/>
         {image ? <Image style={styles.image} source={{uri: image}}/> : null}
      </View>
   )
}

const styles = StyleSheet.create({
   wrapper: {
      marginBottom: 10
   },
   image: {
      width: "100%",
      height: 200, 
      marginTop: 10
   }
});

export default PhotoPicker