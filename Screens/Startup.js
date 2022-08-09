import React  from "react";

import { View, StyleSheet ,TouchableOpacity, Alert , TextInput, ImageBackground} from 'react-native';
import { StatusBar } from "expo-status-bar";
import logo from "../Images/logo.jpg"
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
import { height, marginTop } from "styled-system";



const Startup = ({navigation}) => {
    const [showuserModal, setuserShowModal] = useState(false);
    return (
      <View style={styles.container}>
      <StatusBar style="dark"/>
  <NativeBaseProvider> 
  
  
  
  <Header containerStyle={{elevation: 10, // remove shadow on Android
          shadowOpacity: 3, // remove shadow on iOS
          borderBottomWidth: 0,
          shadow:9,
          backgroundColor:'rgb(223, 230, 252)',
        
          opacity:0.9,
          height:"25%"
    
        
         }}
  
       backgroundColor={'#fff'}
       
     
       leftContainerStyle={{flex:0.6}}
       centerContainerStyle={{flex:1}}
       rightContainerStyle={{flex:0.5}}
       
      
        leftComponent={
  <HStack>

<TouchableOpacity  activeOpacity={1}   onPress={() =>  navigation.goBack()}  style={styles.arrow} >

<ArrowBackIcon
  style={{color:"grey" ,}}
/>
</TouchableOpacity>


</HStack>

  
  
     
  }
  centerComponent={<VStack mt='16%' space={1}>
     <Heading color='blue.500'  >
         Start Up 
     </Heading>
     <Heading color='gray.400' fontSize='lg' mx='auto' >
         Free Plan 
     </Heading>
     <Heading color='gray.600'  mx='auto' >
         0$
     </Heading>
     <Heading color='gray.400' fontSize='lg'    mx='auto'>
         Yearly
     </Heading>

  </VStack>}

  rightComponent={<VStack>

  </VStack>}
  />
  

<View style={{flex:1,}}>
<VStack >
<VStack   borderBottomWidth='1'  py='5%'  borderColor='gray.300' >
<Heading mx='auto' fontSize='lg' color='gray.400'  >
limited  to 100 feedbacks/weeks in {'\n                      '}  one QrCode 

</Heading>
</VStack>

<VStack   borderBottomWidth='1'  py='5%'  borderColor='gray.300'>
<Heading mx='auto' fontSize='lg' color='gray.400'  >
Weekly Report

</Heading>
</VStack>
<VStack   borderBottomWidth='1'  py='5%'  borderColor='gray.300'>
<Heading mx='auto' fontSize='lg' color='gray.400'  >
    Weekly Statistical Analysis

</Heading>
</VStack>
<VStack   borderBottomWidth='1'  py='5%'  borderColor='gray.300'>
<Heading mx='auto' fontSize='lg' color='gray.400'  >
Time Series Predictions and  {'\n                 '} Forecasts
</Heading>
</VStack>
<VStack   borderBottomWidth='1'  py='5%'  borderColor='gray.300' >
<Heading mx='auto' fontSize='lg' color='gray.400'  >
Customized Analysis and Reports

</Heading>
</VStack>
<VStack   borderBottomWidth='1'  py='5%'  borderColor='gray.300'>
<Heading mx='auto' fontSize='lg' color='blue.500'  >
Pay 0$ And Create QrCode

</Heading>
</VStack>
<VStack   borderBottomWidth='1'  py='5%'  borderColor='gray.300'>
<Heading mx='auto' fontSize='lg' color='gray.400'  >
Weekly Report Unitl Unsubscribe

</Heading>
</VStack>


<Button
                 width='50%'
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
                    
                    // onPress={()=> navigation.navigate('Address')}
                  >
                    Choose Plan
                  </Button>



</VStack>


</View>

  </NativeBaseProvider>
  </View>
  )
}

export default Startup;
const styles = StyleSheet.create({

    container:{
    
    flex:1,
    justifyContent:"center",
    backgroundColor:"#fff",
    
    
    
    
    },
    
    tag:{

        transform:[{rotate:"50deg"}]
        
            },
            arrow:{
          marginTop:30

            },

            
            text:{

                transform:[{rotate:"320deg"}]
                
                    },
    
    
    })