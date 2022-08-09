import  React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet, Text, View } from "react-native";
import Topics from '../Screens/Topics';
import Entertainment from '../Screens/Entertainment';
import Health from '../Screens/Health';
import All from '../Screens/All';
import Business from '../Screens/Business';
 
import {Button, NativeBaseProvider} from "native-base"
import { backgroundColor, marginTop } from 'styled-system';

const Tab = createMaterialTopTabNavigator();



const Tabnavigator=({navigation})=>{

    return(
    <View style={styles.conatainer}>
    <Topics navigation={navigation}  />
      
    <View style={{flex:3.5}}>
    <Tab.Navigator 
             
             screenOptions={{
              tabBarLabelStyle: {fontWeight:"bold",fontSize:11 },
              
               tabBarInactiveTintColor:"grey",
               tabBarActiveTintColor:'blue',
               
               
              
            }}
            
             
             >
             <Tab.Screen name="All" component={All} 
             
             
             />
             <Tab.Screen name="Business" component={Business}  />
             <Tab.Screen name="Entertainment" component={Entertainment}  />
    
          
        </Tab.Navigator>
    
    </View>
    <View style={{flex:0.28}}>
    <NativeBaseProvider >
    <Button  onPress={() => navigation.navigate("Post")}  colorScheme="blue"  _text={{ color: 'white',fontWeight:'bold',fontSize:'lg' }}    >
    Show Posts
</Button>
</NativeBaseProvider>
</View>
    </View>
    
    
    
    )
    
    
    
    
    
    
    
    
    }
    export default Tabnavigator;
    const styles = StyleSheet.create({
   
        conatainer:{
            flex:1,
            justifyContent:"center",
        
            
        },
        
        
        
            
        
          
          
          
          });