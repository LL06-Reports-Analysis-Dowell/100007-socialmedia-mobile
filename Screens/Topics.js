import  React from 'react';
import {View,StyleSheet,TouchableOpacity, Alert} from "react-native"
import Busniess from './All';
import Entertainment from './Entertainment';
import Health from './Health';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';





import { StatusBar } from "expo-status-bar";
import { stockData } from './Data';
import { useState } from 'react';

import {
    Box,
    FlatList,
    Image,
    HStack,
    VStack,
    Center,
    NativeBaseProvider,
    Text,
    ArrowBackIcon,
    Button,
    Radio,
    Select,
    CheckIcon,
    Link,
    Avatar,
    Modal
  

  } from "native-base"
  import {Header,Icon,} from "react-native-elements"
  import { Feather } from '@expo/vector-icons';




const Topics=({navigation})=>{
    
  const [showModal, setShowModal] = useState(false)
  
const[state,setState]=useState({

textcolor:"gray.400",

textcolor1:"gray.400",

textcolor2:"gray.400",
pressed:false


});
// const change_textcolor=()=>{
// if(!state.pressed)
// {
// setState({pressed:true,textcolor:"darkBlue.500",textcolor1:"gray.400",textcolor2:"gray.400"});
// }
// else{
//   setState({pressed:false,textcolor:"gray.400", textcolor1:"darkBlue.500",textcolor2:"gray.400"})
  
// }



// }
// const change_textcolor1=()=>{
//   if(!state.pressed)
//   {
//   setState({pressed:true,textcolor2:"darkBlue.500",textcolor1:"gray.400",textcolor:"gray.400"});
//   }
//   else{
//     setState({pressed:false,textcolor:"gray.400", textcolor1:"gray.400",textcolor2:"gray.400"})
    
//   }
  
  
  
//   }


  

return(
 
 <View style={styles.conatainer}>
<StatusBar style="dark"/>
<NativeBaseProvider> 

<FlatList
         
        data={stockData}
        
    
        renderItem={({ item }) => (
          <VStack>
          <Header containerStyle={{elevation: 5, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
            borderBottomWidth: 0,
            
            
        
           }}
         backgroundColor={'#fff'}
         leftContainerStyle={{flex:30,}}
         
          leftComponent={{ text:"Social Media Automation",style:{fontSize:25,color:"blue",fontWeight:"bold"}}}
          rightComponent={<View>
          <Avatar
      source={{
        uri:item.Image[2]
      }}
      alt="Alternate Text"
      size="8"
      mt="1"
      
    
      
    />
          

          </View>}

          
          
        />
         
         <HStack width="95%" mx="auto" mt="4" >
<Icon
 name='search'
size={30}
onPress={()=>Alert.alert("pressed")}
/>
<Select
    
    width="60%"
    accessibilityLabel="List Of All Topics"
    placeholder="List Of All Topics"
    variant="filled"
    fontSize="md"
    placeholderTextColor="black"
    bgColor="transparent"
    mt="-2"
    
    _selectedItem={{
      
      endIcon: <CheckIcon size="5" />,
    }}
    
   
  >
    
    <Select.Item label= {item.listitem1} value={item.listitem1} />
    <Select.Item label={item.listitem2} value={item.listitem2} />
    <Select.Item label={item.listitem3} value={item.listitem3} />
    
  </Select>
  <Button 
      onPress={() =>Alert.alert("LoginButton")}
      mt="-1" colorScheme="blue" _text={{ color: 'white',fontWeight:'bold',fontSize:'lg' }} style={{width:"27%" ,height:"100%"}}  >
        Search
      </Button>
    
         </HStack>

                

        </VStack>
         
        )}
        keyExtractor={(item) => item.id}
      />

 

     
     
    
</NativeBaseProvider>

 </View>

)






}
export default Topics;
const styles = StyleSheet.create({
   
    conatainer:{
        flex:1,
        justifyContent:"center",
        backgroundColor:"#fff",
        
      
        
    },
   
    
    
        
    
      
      
      
      });