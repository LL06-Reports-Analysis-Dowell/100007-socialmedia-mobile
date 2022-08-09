import React  from "react";

import { View, StyleSheet ,TouchableOpacity, Alert , TextInput, ImageBackground} from 'react-native';
import { StatusBar } from "expo-status-bar";

import {Header,Icon,Card} from "react-native-elements"
import { Location } from "./Data";
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


const Schedule = ({navigation}) => {
  return (
    <View style={styles.container}>
    <StatusBar style="dark"/>
<NativeBaseProvider> 

<View>

<Header containerStyle={{elevation: 10, // remove shadow on Android
        shadowOpacity: 3, // remove shadow on iOS
        borderBottomWidth: 0,
        shadow:9,
        backgroundColor:'rgb(223, 230, 252)',
        opacity:0.9
  
      
       }}

     backgroundColor={'#fff'}
     

     
    
      leftComponent={

<TouchableOpacity  activeOpacity={1}   onPress={() =>navigation.goBack()}  >

<ArrowBackIcon
  style={{color:"grey"}}
/>



</TouchableOpacity   >


   
}
centerComponent={<Heading color='blue.500' fontSize='2xl'>
Schedule
</Heading>}
/>
</View>
<View style={{flex:1}}>
<VStack>
<HStack width="95%" mx="auto" mt="4" >
<Center>
<Icon
 name='search'
size={30}
onPress={()=>Alert.alert("pressed")}
/>
</Center>
<Input
 width='60%'
 variant='filled'


/>
  <Button 
      onPress={() =>Alert.alert("LoginButton")}
       colorScheme="blue" _text={{ color: 'white',fontWeight:'bold',fontSize:'lg' }}
       style={{width:"27%" ,height:"100%"}}  >
        Search
      </Button>
    
         </HStack>




</VStack>


</View>
</NativeBaseProvider>
</View>
  )
}

export default Schedule
const styles = StyleSheet.create({

    container:{
    
    flex:1,
    justifyContent:"center",
    backgroundColor:"#fff",
    
    
    
    
    },
    
    
    
    
    
    })