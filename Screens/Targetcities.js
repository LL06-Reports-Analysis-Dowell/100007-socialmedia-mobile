import React  from "react";

import { View, StyleSheet ,TouchableOpacity, Alert , TextInput, ImageBackground} from 'react-native';
import { StatusBar } from "expo-status-bar";

import {Header,Icon,Card} from "react-native-elements"

import {Cities} from "./Data"

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
import { NavigationContainer } from "@react-navigation/native";
import { background } from "styled-system";



const Tagetcities = ({navigation}) => {
    
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
  Target Cities
  </Heading>}

  
  />

  </View>

<View style={{flex:0.16}}>
 
<HStack width="95%" mx="auto" my='auto' >
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
 placeholder="List of All Cities"
 placeholderTextColor='black'
 fontSize='md'


/>
  <Button 
      onPress={() =>Alert.alert("LoginButton")}
       colorScheme="blue" _text={{ color: 'white',fontWeight:'bold',fontSize:'lg' }}
       style={{width:"27%" ,height:"100%"}}  >
        Search
      </Button>
    
         </HStack>


  
</View>
<View style={{flex:1, }}>
<VStack >
   
<Box width='100%' bgColor='white'  borderTopWidth='2'   borderColor='gray.200'
  shadow='1' 
   
  
>
<FlatList
 data={Cities}

 renderItem={({item})=>(

  <VStack py='5%'  borderBottomWidth='1' borderColor='gray.300' >
    <HStack space="5%" width='90%' mx='auto'   >
    

   <Center>
    <Heading fontSize='2xl' color='gray.400'>
      {item.Username}
    </Heading>
 </Center>

  </HStack>
  </VStack>



 )}


 keyExtractor={(item) => item.id}



/>



</Box>


 </VStack>


  
</View>



<Button
                
                colorScheme='blue'
                 mx='auto'
                 width='99%'
                p='5%'
              
                shadow='4'
                
                _text={{
                  color: 'white',
                  fontWeight: "bold",
                  fontSize: "xl",
                }}
                
            
              >
               <HStack space="2%">
                 <Heading color='white'>
                See More   
                </Heading>
                <Center mt='2%'>
                <AntDesign name="down" size={20} color="white" />
                </Center>
</HStack> 
              </Button>
       

</NativeBaseProvider>
</View>
)}

export default Tagetcities
const styles = StyleSheet.create({

    container:{
    
    flex:1,
    justifyContent:"center",
    backgroundColor:"rgb(245,245,245)",
    
    
    
    
    },
   
    
    
    
    
    })