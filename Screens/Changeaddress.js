import React  from "react";

import { View, StyleSheet ,TouchableOpacity, Alert , TextInput, ImageBackground} from 'react-native';
import { StatusBar } from "expo-status-bar";

import {Header,Icon,Card} from "react-native-elements"
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


const Changeaddress = ({navigation}) => {
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

<TouchableOpacity  activeOpacity={1}   onPress={() => navigation.goBack()}  >

<ArrowBackIcon
  style={{color:"grey"}}
/>



</TouchableOpacity   >


   
}
centerComponent={<Heading color='blue.500' fontSize='2xl'>
 Change Address
</Heading>}
/>
</View>
<View style={{flex:1}}>
 <VStack mt='10%' >
  <Heading mx='auto' color='gray.400'>
      Please enter your current {'\n              '} address
  </Heading>
  <VStack mx='auto' width="80%" mt='10%' space='9%'  >
<FormControl  >
            <Heading fontSize='xl' color='blue.500' > Street Address </Heading>
           <Input keyboardType='default'   bgColor='transparent'   style={{backgroundColor:"rgb(223, 230, 252)"}}  
              borderRadius='2xl'
              shadow='2'  />
          </FormControl>
          <FormControl>
          <Heading fontSize='xl' color='blue.500' > City </Heading>
            <Input keyboardType='default' borderRadius='2xl'  bgColor='transparent'   style={{backgroundColor:"rgb(223, 230, 252)"}}  
              
              shadow='2'  />
           
          </FormControl>
          <FormControl>
          <Heading fontSize='xl' color='blue.500' > Postal Code  </Heading>
            <Input keyboardType='default'  borderRadius='2xl'  bgColor='transparent'   style={{backgroundColor:"rgb(223, 230, 252)"}}  
              
              shadow='2'   />
           
          </FormControl>

          <Button
                 width='80%'
                 mt='4%'
                    colorScheme="blue"
                    p={3}
                    borderBottomRadius='3xl'
                    borderTopRadius='3xl'
                    shadow='1'
                
                    mx='auto'
                    
                    _text={{
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "xl",
                    }}
                    
                    onPress={()=> navigation.navigate('Address')}
                  >
                    Save Location
                  </Button>


          </VStack>


 </VStack>



</View>


</NativeBaseProvider>
</View>
  )
}

export default Changeaddress

const styles = StyleSheet.create({

    container:{
    
    flex:1,
    justifyContent:"center",
    backgroundColor:"#fff",
    
    
    
    
    },
    
    
    
    
    
    })