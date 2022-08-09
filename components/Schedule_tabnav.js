import  React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet, Text, View } from "react-native";
import Schedule from '../Screens/Schedule';
import Mostrecent from '../Screens/Mostrecent';
import Published from '../Screens/Published';
import Notpublished from '../Screens/Notpublished';
 


const Tab = createMaterialTopTabNavigator();



const Schedule_tabnav=({navigation})=>{

    return(
    <View style={styles.conatainer}>
    <Schedule navigation={navigation}  />
      
    <View style={{flex:3.3}}>
    <Tab.Navigator 
             
             screenOptions={{
              tabBarLabelStyle: {fontWeight:"bold",fontSize:11 },
              
               tabBarInactiveTintColor:"grey",
               tabBarActiveTintColor:'blue',
               
               
              
            }}
            
             
             >
             <Tab.Screen name="Mostrecent" component={Mostrecent} 
             
             
             />
             <Tab.Screen name="Published" component={Published}  />
             <Tab.Screen name="Notpublished" component={Notpublished}  />
    
          
        </Tab.Navigator>
    
    </View>
    
    </View>
    
    
    
    )
    
    
    
    
    
    
    
    
    }
    export default Schedule_tabnav;
    const styles = StyleSheet.create({
   
        conatainer:{
            flex:1,
            justifyContent:"center",
        
            
        },
        
        
        
            
        
          
          
          
          });