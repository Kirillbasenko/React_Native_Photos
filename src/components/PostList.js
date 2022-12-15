import { StyleSheet, View, FlatList, Text } from 'react-native';
import { Post } from '../components/Post';

export const PostList = ({data, onOpen}) => {

   if(data.length === 0){
      return <Text style={styles.text}>No photo</Text>
   }

   return(
      <View style={styles.wrapper}>
         <FlatList 
            data={data}
            keyExtracto={post => post.id.toString()}
            renderItem={({item}) => <Post post={item} onOpen={onOpen}/>}/>
      </View>
   )
}

const styles = StyleSheet.create({
   wrapper: {
      padding: 10,
   },
   text: {
      fontSize: 20,
      textAlign: "center",
      marginTop: 10
   }
});