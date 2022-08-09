import React  from "react";

import { View, StyleSheet ,TouchableOpacity, Alert , TextInput, ImageBackground} from 'react-native';
import { StatusBar } from "expo-status-bar";
import Logo from '../Images/logo.jpg'
import { stockData } from "./Data";

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
import { height } from "styled-system";




const Dashboard =({navigation})=>{
  const [showuserModal, setuserShowModal] = useState(false);  
  const [showlogoutModal, setlogoutShowModal] = useState(false);
return(

  <View style={styles.conatainer}>
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
     

     l
    
      leftComponent={

<TouchableOpacity  activeOpacity={1}   onPress={() =>navigation.navigate('Login')}  >
<VStack mt='10%'>
<ArrowBackIcon
  style={{color:"grey"}}
  
/>
</VStack>


</TouchableOpacity   >


   
}
centerContainerStyle={{flex:9,}}
centerComponent={<Heading color='blue.500' mt='1%'  >
Social Media Automation
</Heading>}
 rightComponent={
   <TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate('Admin')} >
   <Image
     source={require('../Images/logo.jpg')} 
    alt='123'
    size='xs'
    resizeMode='center'
    mt='-2%'
    
   />
   </TouchableOpacity>
 }

/>
</View>
<View style={{flex:0.33}}>
<VStack mt='10%'>
<FlatList
 data={stockData}
 renderItem={({item})=>(
  <VStack width='90%' mx='auto' >
   
   <HStack space='2%'>
   <Avatar
    source={{uri:item.pic}}

size='xl'
alt='123'

   
   />
   <Center>
   <VStack>
   <Heading  color='gray.400'> 
     Welcome
   </Heading>
   <Heading color='blue.500'>
     {item.Username[0]}
   </Heading>
</VStack>
</Center>
<TouchableOpacity   activeOpacity={1} style={{marginLeft:"auto"}}      

onPress={()=> setuserShowModal(true)}
>

<Entypo name="dots-three-vertical" size={24} color="black"  />
</TouchableOpacity>
</HStack>


  </VStack>




 )}

 keyExtractor={(item) => item.id}

/>

{/* <ImageBackground

 
 style={styles.image}

/> */}

</VStack>


</View>

<ImageBackground style={{flex:1,elevation:5,}}  source={require('../Images/dashboard.jpg')}
   alt='123'

>
<View style={styles.child}>
<VStack my='auto' ml ='10%' space='2%'>
<Heading  fontSize='5xl' color='white' >
  Automate {'\n'}Your Social{'\n'}Media 
</Heading>
<Heading fontSize='lg' color='white'>
Easily manage all your social {'\n'}media and get efficent result
</Heading>
</VStack>
</View>
</ImageBackground>


<View style={{flex:0.2,}}>
<HStack my='auto' width='90%' mx='auto' justifyContent='space-between'>
<TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate('Topic')}   >
 <Image
  source={require('../Images/bar-chart.png')}
  size='xs'
  alt='123'

 
 />
 </TouchableOpacity>
 <TouchableOpacity activeOpacity={1}  onPress={()=>navigation.navigate('Article')}   >
 <Image
  source={require('../Images/copywriting.png')}
  size='xs'
  alt='123'
 
 />
 </TouchableOpacity>
 <TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate('Topics')} >
 <Image
  source={require('../Images/contact.png')}
  size='xs'
  alt='123'
 
 />
 </TouchableOpacity>
 <TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate('Schedule')}>
 <Image
  source={require('../Images/schedule.png')}
  size='xs'
  alt='123'
 
 />
 </TouchableOpacity>
 <TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate('Comment')}>
 <Image
  source={require('../Images/chat.png')}
  size='xs'
  alt='123'
 
 />
 </TouchableOpacity>
</HStack>

</View>
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

  
<TouchableOpacity  activeOpacity={1}   onPress={() => setuserShowModal(false) }  >

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
           alt='123'
           
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



)


  




}
export default Dashboard;
const styles = StyleSheet.create({
   
 conatainer:{
     flex:1,
     justifyContent:"center",
     backgroundColor:"#ffff"
 },
image:{

  width:'100%',
  height:100
},
child: {
  flex: 1,
  backgroundColor: 'rgba(0,0,0,0.3)'
}
 
   
   
   
   });
   
