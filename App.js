
import firbase from "firebase"
import { StatusBar } from "expo-status-bar";
import React from "react";
import { LogBox } from "react-native";

import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";

import Login from "./Screens/Login";
import signup from "./Screens/SignUp";
import Topic from "./Screens/Topic";
import Dashboard from "./Screens/Dashboard";
import Post from "./Screens/Post";
import Nextpost from "./Screens/Nextpost";
import Editphoto from "./Screens/Editphoto";
import Selectlink from "./Screens/Selectlink";
import Editpostscreen from "./Screens/Editpostscreen";
import Edittargeting from "./Screens/Edittargeting";
import Tabnavigator from "./components/TabNaivgation";
import Tagpeople from "./Screens/Tagpeople"
import Article_tabnav from "./components/Article_tabnav";
import ArticleScreen from "./Screens/Articlescreen";
import Nextarticlescreen from "./Screens/Nextarticlescreen";
import EditArticle from "./Screens/EditArticle";
import Editarticleimage from "./Screens/Editarticleimage";
import SingUp1 from "./Screens/SingUp1"
import updateeditarticle from "./Screens/Updateeditarticle"
import Comment from "./Screens/Comment"
import Generatecomment from "./Screens/Generatecomment";
import Topic1 from "./Screens/Topic1";
import Resetpassword from "./Screens/Resetpassword";
import Address from "./Screens/Address";
import Changeaddress from "./Screens/Changeaddress";
import Myplan from "./Screens/Myplan";
import Myteam from "./Screens/Myteam"
import Basic from './Screens/Basic';
import Startup from './Screens/Startup';
import Premium from './Screens/Premium';
import Custom from './Screens/Custom';
import Myusage from "./Screens/Myusage";
import Generatetopic from "./Screens/Generatetopic";
import Schedule from "./Screens/Schedule";
import Schedule_tabnav from "./components/Schedule_tabnav";
import Postwhere from "./Screens/Postwhere";
import Schedulepost from "./Screens/Schedulepost";
import Admin from "./Screens/Admin";
import Clientsprofile from "./Screens/Clientsprofile";
import Socialmediachannels from "./Screens/Socialmediachannels";
import Facebook from "./Screens/Facebook";
import Instagram from "./Screens/Instagram";
import Twitter from "./Screens/Twitter";
import Linkedin from "./Screens/Linkedin";
import Youtube from "./Screens/Youtube";
import Tagetcities from "./Screens/Targetcities";
import Approvels from "./Screens/Approvels";
const Tabnav=({route,navigation})=>{
  

return(
<View style={styles.conatainer}>
  
<Tabnavigator navigation={navigation} />
</View>



)










}


const Articletabnav=({route,navigation})=>{
  

  return(
  <View style={styles.conatainer}>
    
  <Article_tabnav navigation={navigation} />
  </View>
  
  
  
  )
}

const Scheduletabnav=({route,navigation})=>{
  

  return(
  <View style={styles.conatainer}>
    
  <Schedule_tabnav navigation={navigation} />
  </View>
  
  
  
  )
}

const App = ({}) => {
  LogBox.ignoreAllLogs();
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={signup} />
          <Stack.Screen name="SignUp1" component={SingUp1} />
          <Stack.Screen name="Dashboard" component={Dashboard}/>
          <Stack.Screen name="Resetpassword" component={Resetpassword}/>
          <Stack.Screen name="Address" component={Address}/>
          <Stack.Screen name="Changeaddress" component={Changeaddress}/>
          <Stack.Screen name="Myplan" component={Myplan}/>
          <Stack.Screen name="Basic" component={Basic} />
  <Stack.Screen name="Startup" component={Startup} />
  <Stack.Screen name="Premium" component={Premium} />
  <Stack.Screen name="Custom" component={Custom} />
  <Stack.Screen name="Myteam" component={Myteam} />
  <Stack.Screen name="Myusage" component={Myusage} />
  

          <Stack.Screen name="Topic" component={Topic}/>
          <Stack.Screen name="Topic1" component={Topic1}/>
          <Stack.Screen name="Generatetopic" component={Generatetopic}/>
          

          <Stack.Screen name="Topics" component={Tabnav}/>
          <Stack.Screen name="Post" component={Post}/>
          <Stack.Screen name="Nextpost" component={Nextpost}/>
          <Stack.Screen name="Editpostscreen" component={Editpostscreen}/>
          <Stack.Screen name="Editphoto" component={Editphoto}/>
          <Stack.Screen name="Selectlink" component={Selectlink}/>
          <Stack.Screen name="Tagpeople" component={Tagpeople}/>
          <Stack.Screen name="Edittargeting" component={Edittargeting}/>
          <Stack.Screen name="Tabnavigator" component={Tabnavigator}/>
          <Stack.Screen name="Article" component={Articletabnav}/>
          <Stack.Screen name="ArticleScreen" component={ArticleScreen}/>
          <Stack.Screen name="Nextarticlescreen" component={Nextarticlescreen}/>
          <Stack.Screen name="EditArticle" component={EditArticle}/>
          <Stack.Screen name="Editarticleimage" component={Editarticleimage}/>
          <Stack.Screen name="updateeditarticle" component={updateeditarticle}/>
          <Stack.Screen name="Comment" component={Comment}/>
          <Stack.Screen name="Generatecomment" component={Generatecomment}/>
          <Stack.Screen name="Schedule" component={Scheduletabnav}/>
          <Stack.Screen name="Postwhere" component={Postwhere}/>
          <Stack.Screen name="Schedulepost" component={Schedulepost}/>
          <Stack.Screen name="Admin" component={Admin}/>
          <Stack.Screen name="Clientsprofile" component={Clientsprofile}/>
          <Stack.Screen name="Socialmediachannels" component={Socialmediachannels}/>
          <Stack.Screen name="Facebook" component={Facebook}/>
          <Stack.Screen name="Instagram" component={Instagram}/>
          <Stack.Screen name="Twitter" component={Twitter}/>
          <Stack.Screen name="Linkedin" component={Linkedin}/>
          <Stack.Screen name="Youtube" component={Youtube}/>
          <Stack.Screen name="Tagetcities" component={Tagetcities}/>
          <Stack.Screen name="Approvels" component={Approvels}/>
          
          
          
          

          
          </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
const styles = StyleSheet.create({
   
  conatainer:{
      flex:1,
      justifyContent:"center",
  
      
  },
  
  
  
      
  
    
    
    
    });