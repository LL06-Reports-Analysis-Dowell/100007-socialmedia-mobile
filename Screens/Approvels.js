import React  from "react";

import { View, StyleSheet ,TouchableOpacity, Alert , TextInput, ImageBackground} from 'react-native';
import { StatusBar } from "expo-status-bar";

import {Header,Icon,Card} from "react-native-elements"
import { Approved } from "./Data";
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


const Approvels = ({navigation}) => {
    const [check3, setCheck3] = useState(false);
    const [check1, setCheck1] = useState(false);
const app =() =>{
setCheck1(false)
setCheck3(false)



}
const noapp =() =>{
    setCheck1(true)
    setCheck3(true)
    
    
    
    }

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
Approvels
</Heading>}
/>
</View>
<View style={{flex:1}}>
<VStack>
<FlatList
data={Approved}
renderItem={({item})=>(
<Box width='95%' mx='auto'   mt='5%' >

<Heading fontSize='3xl' color='black'>
{item.topic}
</Heading>
<HStack mt='2%' ml='auto' >
<TouchableOpacity activeOpacity={1} onPress={()=>app()}  >
<Ionicons name="ios-checkbox" size={40} color={check1 ? "#dcdcdc":'#4169e1'} />
</TouchableOpacity>
<TouchableOpacity activeOpacity={1} onPress={()=>noapp()}>
<Entypo name="squared-cross" size={40} color={check3 ? "#4169e1":'#dcdcdc'} />
</TouchableOpacity>
</HStack>
</Box>

)}

keyExtractor={(item) => item.id}
 





/>



</VStack>



</View>
</NativeBaseProvider>
</View>
  )
}

export default Approvels

const styles = StyleSheet.create({

    container:{
    
    flex:1,
    justifyContent:"center",
    backgroundColor:"#fff",
    
    
    
    
    },
    
    
    
    
    
    })