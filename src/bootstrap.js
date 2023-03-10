import * as Font from "expo-font"
import {DB} from "./db"

export async function bootstrap() {
   try{
      await Font.loadAsync({
      "open-regular": require("../assets/fonts/OpenSans-Bold.ttf"),
      "open-bold": require("../assets/fonts/OpenSans-Bold.ttf")
      })
      await DB.init()
      console.log("Database started...");
   }catch(e){
      console.log(`Data base crash ${e}`);
   }
}