import { StyleSheet, Text, View } from 'react-native';

export const AboutScreen = () => {
   return (
      <View style={styles.center}>
         <Text>
            Версия приложения <Text style={styles.bold}>1.0.0</Text> 
         </Text>
      </View>
   )
}

const styles = StyleSheet.create({
   center: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
   },
   bold: {
      fontFamily: "open-bold"
   }
});