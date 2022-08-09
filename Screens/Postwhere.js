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


const Postwhere = ({navigation}) => {
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
    <Heading color='blue.500'>
     Where you want {'\n'} to post?
    </Heading>
    <TouchableOpacity  activeOpacity={1} onPress={()=>navigation.goBack()}  >
    <Entypo name="cross" size={40} color="gray" />
  </TouchableOpacity>

 </HStack>




</Box>

<View style={{flex:1}}>
<VStack >

<HStack width='90%' mx='auto' justifyContent='space-between'  my='5%'  >
 <Heading>
     Your Channels
 </Heading>
 <Button
                width='35%'
            
                colorScheme='blue'
                 
              
                borderBottomRadius="xl"
                borderTopRadius="xl"
                shadow='4'
                
                _text={{
                  color: 'white',
                  fontWeight: "bold",
                  fontSize: "md",
                }}
            
                onPress={()=>Selectall()}

            
              >
                  Select All 
              </Button>
</HStack>
<Box style={{ backgroundColor:"'rgb(223, 230, 252)'"}}    borderTopWidth='3' 
 borderColor='gray.300' shadow='8' height='full'
 pb='30%'
>
 <VStack width='90%' mx='auto' mt='10%'  space='10%' >
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
    <TouchableOpacity  activeOpacity={1} onPress={()=>Facebook()}  >
        <Center mt='35%'>
    <AntDesign name="checkcircle" size={24} color={facebook?'#4169e1':"gray"} />
    </Center>
  </TouchableOpacity>
   </HStack>

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
    <TouchableOpacity  activeOpacity={1} onPress={()=>Instagram()}  >
        <Center mt='35%'>
    <AntDesign name="checkcircle" size={24} color={instagram?'#4169e1':"gray"} />
    </Center>
  </TouchableOpacity>
   </HStack>
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
    <TouchableOpacity  activeOpacity={1} onPress={()=>Twitter()}  >
        <Center mt='35%'>
    <AntDesign name="checkcircle" size={24} color={twitter?'#4169e1':"gray"} />
    </Center>
  </TouchableOpacity>
   </HStack>
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
    <TouchableOpacity  activeOpacity={1} onPress={()=>Linkidin()}  >
        <Center mt='35%'>
    <AntDesign name="checkcircle" size={24} color={linkidin?'#4169e1':"gray"} />
    </Center>
  </TouchableOpacity>
   </HStack>
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
    <TouchableOpacity  activeOpacity={1} onPress={()=>Youtube()}  >
        <Center mt='35%'>
    <AntDesign name="checkcircle" size={24} color={youtube?'#4169e1':"gray"} />
    </Center>
  </TouchableOpacity>
   </HStack>




   
 </VStack>

 <Button
        
            
                colorScheme='blue'
                 
            width='full'
                
                mx='auto'
                pb='full'
                
                _text={{
                  color: 'white',
                  fontWeight: "bold",
                  fontSize: '3xl',
                }}
            
                onPress={()=>navigation.navigate("Schedule")}

            
              >
                  Done
              </Button>


</Box>

</VStack>



</View>
</NativeBaseProvider>
</View>
  )
}

export default Postwhere
const styles = StyleSheet.create({

    container:{
    
    flex:1,
    justifyContent:"center",
    backgroundColor:"#fff",
    
    
    
    
    },
    
    
    
    
    
    })