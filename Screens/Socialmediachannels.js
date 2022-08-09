import React  from "react";

import { View, StyleSheet ,TouchableOpacity, Alert , TextInput, ImageBackground} from 'react-native';
import { StatusBar } from "expo-status-bar";

import {Header,Icon,Card} from "react-native-elements"
import { Location, stockData } from "./Data";
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


const Socialmediachannels = ({navigation}) => {
    const [facebook,setfacebook]=useState(false)
    const [instagram,setinstagram]=useState(false)
    const [twitter,settwitter]=useState(false)
    const [linkidin,setlinkidin]=useState(false)
    const [youtube,setyoutube]=useState(false)
    const Facebook=()=>{

     setfacebook(!facebook)

    }
    const Instagram=()=>{

        setinstagram(!instagram)
   
       }
       const Twitter=()=>{

        settwitter(!twitter)
   
       }
       const Linkidin=()=>{

        setlinkidin(!linkidin)
   
       }
       const Youtube=()=>{

        setyoutube(!youtube)
   
       }
       const Selectall=()=>{
        setfacebook(!facebook)
        setinstagram(!instagram)
        settwitter(!twitter)
        setlinkidin(!linkidin)
        setyoutube(!youtube)


       }
  return (
    <View style={styles.container}>
    <StatusBar style="dark"/>
<NativeBaseProvider> 
 
<Box style={{flex:0.3 , backgroundColor:"'rgb(223, 230, 252)'"}}    borderBottomWidth='3' 
 borderColor='gray.300' shadow='8'
>
 <HStack width='90%' mx='auto' mt='20%' justifyContent='space-between' >

 <FlatList
 data={stockData}
 renderItem={({item})=>(
  
    <HStack space='2%'>
 
 <Avatar
    source={{uri:item.pic}}

size='md'
alt='123'

 />
  <Center>
     <Heading  color='blue.500'>
        
         {item.Username[0]}
     </Heading>
     
     </Center>

</HStack>
    
  








 )}




/>
    <TouchableOpacity  activeOpacity={1} onPress={()=>navigation.goBack()}  >
    <Entypo name="cross" size={40} color="gray" />
  </TouchableOpacity>

 </HStack>




</Box>

<View style={{flex:1}}>
<VStack >

<HStack width='90%' mx='auto' justifyContent='space-between'  my='5%'  >
 <Heading>
     My Channels
 </Heading>

</HStack>
<Box style={{ backgroundColor:"'rgb(223, 230, 252)'"}}    borderTopWidth='3' 
 borderColor='gray.300' shadow='8' height='full'
 pb='30%'
>
 <VStack width='90%' mx='auto' mt='10%'  space='10%' >
 <TouchableOpacity  activeOpacity={1} onPress={()=>navigation.navigate('Facebook')}  >
     <HStack justifyContent='space-between'>
   
         
    <HStack>
      <Image
       source={require('../Images/facebook.png')}
       size='xs'
       alt='123'
      />
      <Center>
      <Heading ml='5%' fontWeight='normal' fontSize='xl' color='gray.500'>
          Facebook
      </Heading>
      </Center>
    </HStack>
    
        <Center>
        <MaterialIcons name="navigate-next"  size={30} color='gray' />
    </Center>
  
   </HStack>
</TouchableOpacity>
<TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate('Instagram')}>
   <HStack justifyContent='space-between'>
    <HStack>
      <Image
       source={require('../Images/instagram.png')}
       size='xs'
       alt='123'
      />
      <Center>
      <Heading ml='5%' fontWeight='normal' fontSize='xl' color='gray.500'>
          Instagram
      </Heading>
      </Center>
    </HStack>
   
    <Center>
        <MaterialIcons name="navigate-next"  size={30} color='gray' />
    </Center>
  
   </HStack>
   </TouchableOpacity>
   <TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate('Twitter')}>
   <HStack justifyContent='space-between'>
    <HStack>
      <Image
       source={require('../Images/twitter.png')}
       size='xs'
       alt='123'
      />
      <Center>
      <Heading ml='5%' fontWeight='normal' fontSize='xl' color='gray.500'>
          Twitter
      </Heading>
      </Center>
    </HStack>
    
    <Center >
        <MaterialIcons name="navigate-next"  size={30} color='gray' />
    </Center>
  
   </HStack>
   </TouchableOpacity>
   <TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate('Linkedin')}>
   <HStack justifyContent='space-between'>
    <HStack>
      <Image
       source={require('../Images/linkedin.png')}
       size='xs'
       alt='123'
      />
      <Center>
      <Heading ml='5%' fontWeight='normal' fontSize='xl' color='gray.500'>
          Linkedin
      </Heading>
      </Center>
    </HStack>

    <Center>
        <MaterialIcons name="navigate-next"  size={30} color='gray' />
    </Center>

   </HStack>
   </TouchableOpacity>
   <TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate('Youtube')}>
   <HStack justifyContent='space-between'>
    <HStack>
      <Image
       source={require('../Images/youtube.png')}
       size='xs'
       alt='123'
      />
      <Center>
      <Heading ml='5%' fontWeight='normal' fontSize='xl' color='gray.500'>
          Youtube
      </Heading>
      </Center>
    </HStack>
    <Center>
        <MaterialIcons name="navigate-next"  size={30} color='gray' />
    </Center>

   </HStack>
</TouchableOpacity>



   
 </VStack>


</Box>

</VStack>



</View>
</NativeBaseProvider>
</View>
  )
}

export default Socialmediachannels
const styles = StyleSheet.create({

    container:{
    
    flex:1,
    justifyContent:"center",
    backgroundColor:"#fff",
    
    
    
    
    },
    
    
    
    
    
    })