import React  from "react";

import { View, StyleSheet ,TouchableOpacity, Alert , TextInput, ImageBackground} from 'react-native';
import { StatusBar } from "expo-status-bar";

import {Header,Icon,Card} from "react-native-elements"
import { stockData } from "./Data";
import { useState } from "react";
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
    Modal,
    Heading,
    Input,
    Form,
    FormControl,
    Item,
    Label,
    ArrowDownIcon
  

  } from "native-base"

import { Feather,AntDesign,MaterialIcons,Ionicons,Foundation,Entypo ,FontAwesome5 ,FontAwesome,MaterialCommunityIcons } from '@expo/vector-icons'




const Admin = ({navigation}) => {
  return (
    <View style={styles.container}>
    <StatusBar style="dark"/>
<NativeBaseProvider> 

<View>

<Header containerStyle={{elevation: 10, // remove shadow on Android
        shadowOpacity: 3, // remove shadow on iOS
        borderBottomWidth: 0,
        shadow:9,
        opacity:0.9
  
      
       }}

     backgroundColor={'#fff'}
     

     
    
      leftComponent={

<TouchableOpacity  activeOpacity={1}   onPress={() => navigation.goBack()}  >

<ArrowBackIcon
  style={{color:"grey"}}
/>



</TouchableOpacity   >


   
}
centerComponent={<Heading color='blue.500' fontSize='2xl'>
Admin
</Heading>}
/>
</View>

<View style={{flex:1,}}>

<VStack width='90%' mx='auto'   mt='10%'  space='5%'>
<FlatList
 data={stockData}
 renderItem={({item})=>(
  
    <VStack>
     <Heading fontSize='4xl' color='gray.400'>
         Welcome {'\n'}
         {item.Username[0]}
     </Heading>


    </VStack>
  








 )}




/>

<HStack     justifyContent='space-between' mt='10%' >
   <Box width='45%'  height='40' bgColor='white' borderRadius='3xl' shadow='3' borderWidth='3'
    borderColor='gray.300'  style={{   backgroundColor:'rgb(223, 230, 252)'}}      >
      <TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate("Clientsprofile")} >
    <VStack mt='30%' >
    <VStack mx='auto'>
    <FontAwesome5 name="user-edit" size={40} color="#4169e1"  />
    </VStack>
    <Heading fontSize='lg' mx='auto' color='blue.500'>
        View Clients {'\n     '}Profile
      </Heading>

    </VStack>
</TouchableOpacity>

   </Box>
   
   <Box width='45%'  height='40' bgColor='white' borderRadius='3xl' shadow='3' borderWidth='3'
    borderColor='gray.300'  style={{   backgroundColor:'rgb(223, 230, 252)'}}      >
      <TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate("Socialmediachannels")} >
    <VStack mt='30%' >
    <VStack mx='auto'>
    <MaterialIcons name="mobile-friendly" size={40} color="#4169e1"  />
    </VStack>
    <Heading fontSize='lg' mx='auto' color='blue.500'>
         Social Media {'\n    '}Channels
      </Heading>

    </VStack>
</TouchableOpacity>

   </Box>
   
   
   
   

 </HStack>
 <HStack     justifyContent='space-between' >
   
   <Box width='45%'  height='40' bgColor='white' borderRadius='3xl' shadow='3' borderWidth='3'
    borderColor='gray.300'  style={{   backgroundColor:'rgb(223, 230, 252)'}}      >
      <TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate("Tagetcities")} >
    <VStack mt='30%' >
    <VStack mx='auto'>
    
<FontAwesome5 name="map-marked-alt" size={40} color="#4169e1"  />
    </VStack>
    <Heading fontSize='lg' mx='auto' color='blue.500'>
     Targeted{'\n  '}Cities
      </Heading>

    </VStack>
</TouchableOpacity>

   </Box>
   <Box width='45%'  height='40' bgColor='white' borderRadius='3xl' shadow='3' borderWidth='3'
    borderColor='gray.300'  style={{   backgroundColor:'rgb(223, 230, 252)'}}      >
      <TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate("Approvels")} >
    <VStack mt='30%' >
    <VStack mx='auto'>
    <AntDesign name="checksquare" size={40} color="#4169e1"  />
    </VStack>
    <Heading fontSize='lg' mx='auto' color='blue.500'>
        Approved by{'\n     '}Clients
      </Heading>

    </VStack>
</TouchableOpacity>

   </Box>
   
 </HStack>



</VStack>


</View>
</NativeBaseProvider>
</View>
  )
}

export default Admin
const styles = StyleSheet.create({

    container:{
    
    flex:1,
    justifyContent:"center",
    backgroundColor:"#fff",
    
    
    
    
    },
    
    
    
    
    
    })