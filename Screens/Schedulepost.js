import React  from "react";

import { View, StyleSheet ,TouchableOpacity, Alert , TextInput, ImageBackground,ScrollView} from 'react-native';
import { StatusBar } from "expo-status-bar";

import {Header,Icon,Card} from "react-native-elements"
import { time} from "./Data";
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
    ArrowDownIcon,
    
  

  } from "native-base"

import { Feather,AntDesign,MaterialIcons,Ionicons,Foundation,Entypo ,FontAwesome5 ,FontAwesome,MaterialCommunityIcons } from '@expo/vector-icons'


const Schedulepost = ({navigation}) => {

    const [today , settoday] = useState(false);
    const [tomorrow , settomorrow] = useState(false);
     const [In2days , setin2days] = useState(false);
     const [height , setheight] = useState(false);
     const [showuserModal, setuserShowModal] = useState(false);
     const [dateshow, setdateShow] = useState(false);
     

    const Today=()=>{

        settoday(true)
        settomorrow(false)
        setin2days(false)
     
    }

    const Tomorrow=()=>{

        
        settomorrow(true)
        settoday(false)
        setin2days(false)
        

    }
    const In2=()=>{

        setin2days(true)
        settomorrow(false)
        settoday(false)
        

    }
  return (
    
    <View style={styles.container}>
    <StatusBar style="dark"/>

    
<NativeBaseProvider>
<ScrollView style={{}}>
<View style={{height:609 }}>

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
Set Time and Date
</Heading>}
/>
</View>
<View style={{flex:0.2, borderBottomWidth:2,borderColor:"#dcdcdc" ,}}>
<HStack width='95%'  mx='auto'   my='auto'  justifyContent='space-between'  >
<Button
                width='30%'
            
                bgColor={today?'rgb(141, 246, 130)':'rgb(223, 230, 252)'}
                 
              
                borderBottomRadius="xl"
                borderTopRadius="xl"
                shadow='4'
                
                _text={{
                  color: 'black',
                
                  fontSize: "md",
                }}
            
                onPress={()=>Today()}

            
              >
                  Today
              </Button>   
              <Button
                width='30%'
            
                bgColor={tomorrow?'rgb(141, 246, 130)':'rgb(223, 230, 252)'}
                 
              
                borderBottomRadius="xl"
                borderTopRadius="xl"
                shadow='4'
                
                _text={{
                  color: 'black',
            
                  fontSize: "md",
                }}
            
                onPress={()=>Tomorrow()}

            
              >
                  Tomorrow
              </Button>  
              <Button
                width='30%'
            
                bgColor={In2days?'rgb(141, 246, 130)':'rgb(223, 230, 252)'}
                 
              
                borderBottomRadius="xl"
                borderTopRadius="xl"
                shadow='4'
                
                _text={{
                  color: 'black',
                
                  fontSize: "md",
                }}
            
                onPress={()=>In2()}

            
              >
                  In 2 Days
              </Button>  
              
</HStack>

</View>
<View style={{flex:1}}>
<Image style={{flex:1}}
source={{uri:"https://assets.api.uizard.io/api/cdn/stream/2ab81b42-0a3c-4c8c-94da-a59bb6094d69.PNG"}}
resizeMode='stretch'
/>
</View>


</View>
<VStack 
 height={height?'330':'140'}
>
<VStack width='90%' mx='auto' mt='5%' space='10%'  >
 <TouchableOpacity activeOpacity={1} onPress={()=>setuserShowModal(true)}>
<HStack space='2%'>
<Entypo name="plus" size={30} color="black" />
<Center>
<Heading color='black' fontSize='xl'>
  Set Time 
</Heading>
</Center>
</HStack>
</TouchableOpacity>
{ dateshow?(
 <Box  height='40'  bgColor='white'  borderWidth='1' borderColor='gray.100'  shadow='3' >
   <FlatList
   
    data={time}
    renderItem={({item})=>(

     <HStack>
       <HStack width='30%' bgColor='blue.500' height='40' >
         <Heading my='auto' mx='auto' fontSize='4xl' color='white' >
           {item.date}
         </Heading>
       </HStack>
       <HStack width='70%'  height='40' >
       <VStack my='auto' width='95%' mx='auto' space='5%' >
        <Heading color='gray.400'>
          This Post is {'\n'}
          Scheduled at
        </Heading>
        <Heading color='green.400'>
         {item.day}
        </Heading>
       </VStack>
       </HStack>



     </HStack>




    )}
   
   keyExtractor={(item) => item.id}
   
   
   />

 </Box>
):null}
<HStack mt='2%'>
<Button
                width='40%'
            
                bgColor='gray.300'
                 mx='auto'
              
              borderRadius='lg'
                shadow='4'
                p={2}
                _text={{
                  color: 'white',
                  fontWeight: "bold",
                  fontSize: "lg",
                }}
            
                onPress={()=> navigation.goBack()}

            
              >
                  Remove
              </Button>
              <Button
                width='40%'
            
                colorScheme='blue'
                 mx='auto'
              
              borderRadius='lg'
                shadow='4'
                p={2}
                _text={{
                  color: 'white',
                  fontWeight: "bold",
                  fontSize: "lg",
                }}
            
                onPress={()=>navigation.navigate('Postwhere')}

            
              >
                  Done
              </Button>
</HStack>
</VStack>

</VStack>


</ScrollView>
<Modal isOpen={showuserModal}  onClose={() => setuserShowModal(false)}>
<Modal.Content  width="80%"      height="40%" >
<VStack style={{flex:1}} width='95%' mx='auto'>
<VStack style={{flex:1}}  >
 <Image
 source={{uri:"https://m4i9z3k8.rocketcdn.me/wp-content/uploads/2021/08/4051cfca-ba11-4e58-838d-d8dd3ea44756.jpg"}}
 my='auto'
 width='100%'
 height='32'
 
 mx='auto'
 />
</VStack>

<VStack style={{flex:0.5}} justifyContent='center'>
<Button
                width='45%'
            
                colorScheme='blue'
                 mx='auto'
              
              borderRadius='lg'
                shadow='4'
                p={4}
                _text={{
                  color: 'white',
                  fontWeight: "bold",
                  fontSize: "lg",
                }}
            
                onPress={()=>{setuserShowModal(false),setheight(true),setdateShow(true)}}

            
              >
                  Done
              </Button>
</VStack>
</VStack>

 </Modal.Content>
         



 </Modal>
</NativeBaseProvider>

</View>

  )
}

export default Schedulepost;
const styles = StyleSheet.create({

    container:{
    
    flex:1,
    justifyContent:"center",
    backgroundColor:"#fff",
    overflow:"hidden",
    

    
    
    
    
    },
   
    
    
    
    
    })