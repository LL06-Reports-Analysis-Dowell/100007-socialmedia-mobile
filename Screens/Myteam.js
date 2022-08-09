import React  from "react";

import { View, StyleSheet ,TouchableOpacity, Alert , TextInput, ImageBackground} from 'react-native';
import { StatusBar } from "expo-status-bar";

import {Header,Icon,Card} from "react-native-elements"

import {Admin,Employee} from "./Data"

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



const Myteam = ({navigation}) => {
    const [showuserModal, setuserShowModal] = useState(false);
    const [showlogoutModal, setlogoutShowModal] = useState(false);
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
  
  <TouchableOpacity  activeOpacity={1}   onPress={() => setuserShowModal(true)}  >
  
  <ArrowBackIcon
    style={{color:"grey"}}
  />
  
  
  
  </TouchableOpacity   >
  
  
     
  }
  centerComponent={<Heading color='blue.500' fontSize='2xl'>
  Members
  </Heading>}

  
  />

  </View>

<View style={{flex:0.4}}>
 <VStack mt='5%'>
   <Heading ml='10%' color='gray.500'>
     Admin 
   </Heading>
<Box width='100%' bgColor='white'  borderTopWidth='2' borderBottomWidth='2'  borderColor='gray.200'
  shadow='1'  
   mt='5%'
>
<FlatList
 data={Admin}

 renderItem={({item})=>(

  <VStack py='7%' >
    <HStack space="5%" width='80%' mx='auto'  >
    <Avatar
     source={{
       uri:item.Proifle
      }}
     size='lg'
     
    />

   <Center>
    <Heading fontSize='xl' color='gray.400'>
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
<View style={{flex:1,}}>
<VStack mt='5%'>
   <Heading ml='10%' color='gray.500'>
     Employee
   </Heading>
<Box width='100%' bgColor='white'  borderTopWidth='2' borderBottomWidth='2'  borderColor='gray.200'
  shadow='1'  
   mt='5%' 
   pb='20%'
>
<FlatList
 data={Employee}

 renderItem={({item})=>(

  <VStack py='7%'  borderBottomWidth='1' borderColor='gray.300' >
    <HStack space="5%" width='80%' mx='auto'   >
    <Avatar
     source={{
       uri:item.Proifle
      }}
     size='lg'
     
    />

   <Center>
    <Heading fontSize='xl' color='gray.400'>
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
                
                onPress={()=>setuserShowModal(true)}
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


              <Modal isOpen={showuserModal}  onClose={() => setuserShowModal(false)}>
<Modal.Content  width="75%"  borderTopRadius="xs" borderBottomRadius="xs"  mt='-10%'  height="60%" >
  
<Header containerStyle={{elevation: 10, // remove shadow on Android
            shadowOpacity: 3, // remove shadow on iOS
            borderBottomWidth: 0,
            shadow:9,
          
            opacity:0.9,
            height:'20%'
            
          
           }}
    
         backgroundColor={'#fff'}
         leftContainerStyle={{flex:1}}
         leftComponent={<VStack  my='auto' ml='5%'>
  
           <Heading fontSize='xl'  color='blue.500' >
             MY ACCOUNT
           </Heading>



         </VStack>}

   centerContainerStyle={{flex:0.0}}      

rightContainerStyle={{flex:0.13}}

rightComponent={

  
<TouchableOpacity  activeOpacity={1}   onPress={() => {setuserShowModal(false) , navigation.navigate("Dashboard")} }  >

<Entypo name="cross" size={30} color="gray" />


</TouchableOpacity   >





}
         
/>
 
<VStack  bgColor='blueGray.100' pb='10%' >

<VStack width='90%'  mx='auto' mt='5%'  >
<TouchableOpacity activeOpacity={1} onPress={()=> {navigation.navigate("Resetpassword"), 
  setuserShowModal(false) 


}}  >
<HStack  space='3%'  py='5%'  borderBottomWidth='1' borderColor='gray.200'>
  <Center>
<Entypo name="key" size={20} color="gray" />
</Center>
<Heading fontSize='xl' color='gray.400'>
  Reset Password
</Heading>

 <Center ml='auto' mt='1%'>
   
   <Ionicons name="ios-chevron-forward" size={20} color="gray" />

</Center>

</HStack>
</TouchableOpacity>

<TouchableOpacity activeOpacity={1}  onPress={()=> {navigation.navigate('Address')
,setuserShowModal(false)

}}>
<HStack  space='3%' py='5%'  borderBottomWidth='1' borderColor='gray.200'  >
  <Center>
  <MaterialIcons name="location-pin" size={20} color="gray" />
</Center>
<Heading fontSize='xl' color='gray.400'>
  Address
</Heading>

 <Center ml='auto' mt='1%'>
   
   <Ionicons name="ios-chevron-forward" size={20} color="gray" />

</Center>

</HStack>
</TouchableOpacity>
<TouchableOpacity activeOpacity={1} onPress={()=> {navigation.navigate('Myplan')
,setuserShowModal(false)

}}>
<HStack  space='3%'  py='5%'  borderBottomWidth='1' borderColor='gray.200' >
  <Center>

  <AntDesign name="menu-fold" size={20} color="gray" />
</Center>
<Heading fontSize='xl' color='gray.400'>
  Plan
</Heading>

 <Center ml='auto' mt='1%'>
   
   <Ionicons name="ios-chevron-forward" size={20} color="gray" />

</Center>

</HStack>
</TouchableOpacity>


<TouchableOpacity activeOpacity={1} onPress={()=> {navigation.navigate('Myteam')
,setuserShowModal(false)

}}>
<HStack  space='3%' py='5%'  borderBottomWidth='1' borderColor='gray.200' >
  <Center>
  <FontAwesome5 name="user-friends" size={20} color="gray" />
</Center>
<Heading fontSize='xl' color='gray.400'>
  My Team
</Heading>

 <Center ml='auto' mt='1%'>
   
   <Ionicons name="ios-chevron-forward" size={20} color="gray" />

</Center>

</HStack>
</TouchableOpacity>

<TouchableOpacity activeOpacity={1} onPress={()=> {navigation.navigate('Myusage')
,setuserShowModal(false)

}}>
<HStack  space='3%'  py='5%'  borderBottomWidth='1' borderColor='gray.200'  >
  <Center>

  <AntDesign name="piechart" size={20} color="gray" />
</Center>
<Heading fontSize='xl' color='gray.400'>
  Storage
</Heading>

 <Center ml='auto' mt='1%'>
   
   <Ionicons name="ios-chevron-forward" size={20} color="gray" />

</Center>

</HStack>
</TouchableOpacity>
<TouchableOpacity activeOpacity={1} onPress={()=> {setlogoutShowModal(true)
,setuserShowModal(false)

}}>
<HStack  space='3%'  py='5%'  borderBottomWidth='1' borderColor='gray.100'  >
  <Center>

  <MaterialCommunityIcons name="logout" size={25} color="gray" />
</Center>
<Heading fontSize='xl' color='gray.400'>
  Logout
</Heading>

 <Center ml='auto' mt='1%'>
   
   <Ionicons name="ios-chevron-forward" size={20} color="gray" />

</Center>

</HStack>
</TouchableOpacity>

</VStack>

</VStack>




 </Modal.Content>
         



 </Modal>
 <Modal isOpen={showlogoutModal} onClose={()=>{
                      
                      setlogoutShowModal(false)
                      
                      navigation.navigate("Dashboard")
                  
                  
                  
                  }}>
        <Modal.Content  width="90%"  borderTopRadius="xs" borderBottomRadius="xs" top="-2%"  height="85%"
          bgColor='blueGray.100'
        
        >
          <Modal.CloseButton />
           <VStack  >
          
            <VStack mt="30%" mx='auto' space='5%'>
   
            <Image
            source={require('../Images/log.png')}
           size='xl'
           
           />

           <Heading  fontSize='3xl' color='blue.500'>
            Logout ? 
           </Heading>

            </VStack>
            <VStack mt='10%' mx='auto' >

              <Heading color='gray.400'>
               Are you sure you {"\n"}
               you want to log out

              </Heading>
              
              

            </VStack>

            


           </VStack>
        
           <HStack mx='auto' space='4%' mt='5%'>
              <Button
                width='30%'
                bgColor='gray.100'
          
                 
                p={3}
                borderBottomRadius="xl"
                borderTopRadius="xl"
                shadow='4'
                
                _text={{
                  color: 'gray.500',
                  fontWeight: "bold",
                  fontSize: "lg",
                }}
                
                onPress={()=>setlogoutShowModal(false)}
              >
                Cancel
              </Button>
              <Button
                 width='30%'
                    colorScheme="blue"
                    p={3}
                    borderBottomRadius="xl"
                    borderTopRadius="xl"
                    shadow='4'
                    
                    _text={{
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "lg",
                    }}
                    
                    onPress={()=>{
                      
                      setlogoutShowModal(false)
                      
                      navigation.navigate("Dashboard")
                  
                  
                  
                  }}
                  >
                    Done
                  </Button>

              </HStack>
        </Modal.Content>
      </Modal>

</NativeBaseProvider>
</View>
)}

export default Myteam
const styles = StyleSheet.create({

    container:{
    
    flex:1,
    justifyContent:"center",
    backgroundColor:"rgb(245,245,245)",
    
    
    
    
    },
   
    
    
    
    
    })