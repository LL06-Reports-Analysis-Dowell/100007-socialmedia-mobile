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




const Clientsprofile = ({navigation}) => {
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
Admin
</Heading>}
/>
</View>

<View style={{flex:1,}}>
<VStack mt='10%'>

<FlatList

data={stockData}

renderItem={({item})=>(

<VStack>
<Avatar
    source={{uri:item.pic}}

size='xl'
alt='123'
mx='auto'
 />
<Heading color='blue.500' mx='auto'>
     {item.Username[0]}
   </Heading>

</VStack>






)}

keyExtractor={(item) => item.id}

/>


<VStack    mx='auto' space='13%' >

<HStack >
<Center >
 
<Entypo name="location-pin" size={30} color="gray" />
</Center>
<Input   variant='unstyled'  borderBottomWidth='1' width='80%'   placeholder="Enter Your Address"
  fontSize='md'
 borderBottomColor='gray.300'

/>
 
</HStack>

<HStack >
<Center >
 

<FontAwesome5 name="business-time" size={25} color="gray" />
</Center>
<Input   variant='unstyled'  borderBottomWidth='1' width='80%'   placeholder="Enter Your Business"
  fontSize='md'
 borderBottomColor='gray.300'
/>
 
</HStack>

<HStack >
<Center >
 

<AntDesign name="CodeSandbox" size={30} color="gray" />
</Center>
<Input   variant='unstyled'  borderBottomWidth='1' width='80%'   placeholder="Enter Your Product"
  fontSize='md'
 borderBottomColor='gray.300'
/>
 
</HStack>



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
                  fontSize: "lg",
                }}
            
                // onPress={()=>Selectall()}

            
              >
                  Upload Logo
              </Button>

</VStack>



</View>
</NativeBaseProvider>
</View>
  )
}

export default Clientsprofile
const styles = StyleSheet.create({

    container:{
    
    flex:1,
    justifyContent:"center",
    backgroundColor:"#fff",
    
    
    
    
    },
    
    
    
    
    
    })