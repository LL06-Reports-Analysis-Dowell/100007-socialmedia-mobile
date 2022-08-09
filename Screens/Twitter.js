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




const Twitter = ({navigation}) => {
  return (
    <View style={styles.container}>
    <StatusBar style="dark"/>
<NativeBaseProvider> 

<View>

<Header containerStyle={{elevation: 10, // remove shadow on Android
        shadowOpacity: 3, // remove shadow on iOS
        borderBottomWidth: 0,
        shadow:9,
        opacity:0.9,
        backgroundColor:'rgb(223, 230, 252)'
  
      
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
Twitter
</Heading>}
/>
</View>

<View style={{flex:1,}}>
<VStack mt='10%'>
 
<Image

source={require('../Images/twitter.png')}
size='xl'
mx='auto'

/>



<VStack   width='86%'  mt='10%'  mx='auto' space='13%' >



<Input   variant='unstyled'  borderBottomWidth='1'   placeholder="Enter id"
  fontSize='md'
 borderBottomColor='gray.300'
 

/>
 


<Input   variant='unstyled'  borderBottomWidth='1'    placeholder="Enter page link"
  fontSize='md'
 borderBottomColor='gray.300'
/>
 




<Input   variant='unstyled'  borderBottomWidth='1'   placeholder="Enter no of post per day"
  fontSize='md'
 borderBottomColor='gray.300'
/>
 




</VStack>


<Button
                
            
                colorScheme='blue'
                  mx='auto'
                width='50%'
                borderBottomRadius="xl"
                borderTopRadius="xl"
                shadow='4'
                
                _text={{
                  color: 'white',
                  fontWeight: "bold",
                  fontSize: "xl",
                }}
            

            
              >
                  Done
              </Button>

</VStack>



</View>
</NativeBaseProvider>
</View>
  )
}

export default Twitter;
const styles = StyleSheet.create({

    container:{
    
    flex:1,
    justifyContent:"center",
    backgroundColor:"#fff",
    
    
    
    
    },
    
    
    
    
    
    })