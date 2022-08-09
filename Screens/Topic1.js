import React  from "react";

import { View, StyleSheet ,TouchableOpacity, Alert , TextInput, ImageBackground, Switch} from 'react-native';
import { StatusBar } from "expo-status-bar";
import Logo from '../Images/logo.jpg'
import { stockData,topic} from "./Data";

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
    ArrowDownIcon,
    
  

  } from "native-base"

import { Feather,AntDesign,MaterialIcons,Ionicons,Foundation,Entypo ,FontAwesome5 ,FontAwesome,MaterialCommunityIcons } from '@expo/vector-icons'




const Topic1 = ({navigation}) => {
  return (
    <View style={styles.conatainer}>
    <StatusBar style="dark"/>
<NativeBaseProvider> 

<View style={{flex:0.14}}>

<Header containerStyle={{elevation: 10, // remove shadow on Android
        shadowOpacity: 3, // remove shadow on iOS
        borderBottomWidth: 0,
        shadow:9,
      
        opacity:0.9,
        height:"100%"
      
       }}

     backgroundColor={'#fff'}
     

     l
    
      leftComponent={

<TouchableOpacity  activeOpacity={1}   onPress={() =>navigation.navigate('Topic')}  >
<VStack>
<ArrowBackIcon
  style={{color:"grey"}}
  
/>
</VStack>


</TouchableOpacity   >


   
}
centerContainerStyle={{flex:9,}}
centerComponent={<Heading color='blue.500'  >
Social Media Automation
</Heading>}
 rightComponent={

   <Center>
     <FlatList
 data={stockData}
 renderItem={({item})=>(
  <VStack >
   
   <Avatar
    source={{uri:item.pic}}

size='sm'

   
   />


  </VStack>




 )}



/>


   </Center>
 }

/>
</View>
<View style={{flex:1}}>
<VStack mt='50%' width='90%'  mx='auto'>


 <FlatList
 
 data={topic}
 renderItem={({item})=>(
 <VStack >

 <HStack justifyContent='space-between'>
<VStack  width="45%">
<Heading fontSize='lg' color='blue.500'   >
      Specify Topic 
  </Heading>  
 <Select
     mt='2%'
   
    accessibilityLabel="Select"
    placeholder="Select"
    variant="filled"
    fontSize="md"
    placeholderTextColor='gray.500'
    bgColor="transparent"
    
    
    _selectedItem={{
      
      endIcon: <CheckIcon size="5" />,
    }}
    
   
  >
    <Select.Item label= {item. Category[0]} value={item. Category[0]} />
    <Select.Item label={item. Category[1]} value={item. Category[1]} />
    <Select.Item label={item. Category[2]} value={item. Category[2]} />
    <Select.Item label={item. Category[3]} value={item. Category[3]} />
    <Select.Item label={item. Category[4]} value={item. Category[4]} />
    <Select.Item label={item. Category[5]} value={item. Category[5]} />
    
    
  </Select>
  </VStack>
  <VStack  width="45%">
<Heading fontSize='lg' color='blue.500'   >
      Specify Purpose
  </Heading>  
 <Select
     mt='2%'
   
    accessibilityLabel="Select"
    placeholder="Select "
    variant="filled"
    fontSize="md"
    placeholderTextColor='gray.500'
    bgColor="transparent"
    
    
    _selectedItem={{
      
      endIcon: <CheckIcon size="5" />,
    }}
    
   
  >
    <Select.Item label= {item. Category[0]} value={item. Category[0]} />
    <Select.Item label={item. Category[1]} value={item. Category[1]} />
    <Select.Item label={item. Category[2]} value={item. Category[2]} />
    <Select.Item label={item. Category[3]} value={item. Category[3]} />
    <Select.Item label={item. Category[4]} value={item. Category[4]} />
    <Select.Item label={item. Category[5]} value={item. Category[5]} />
    
    
  </Select>
  </VStack>
 
 </HStack>




    <VStack>
  <Heading fontSize='lg' color='blue.500'   >
      Activities
  </Heading>

  <Input
   variant='filled'
   placeholder="Enter Your Activities"
   fontSize='md'
  
   mt='2%'
  />

</VStack>
<VStack>
  <Heading fontSize='lg' color='blue.500' mt='2%'  >
      Can You Specify Activity?
  </Heading>

  <Input
   variant='filled'
   placeholder="Enter"
   fontSize='md'
   
   mt='2%'
  />

</VStack>

 
 

 </VStack>



 )}
 
 keyExtractor={(item) => item.id}
 
 
 
 />

  
<Button
              
            colorScheme="blue"
                 width='80%'
                 mx='auto'
                 mt='20%'
                p={3}
              
                shadow='4'
                
                _text={{
                  color: 'white',
                  fontWeight: "bold",
                  fontSize: "xl",
                }}
                
                onPress={()=>navigation.navigate('Generatetopic')}
              >
                Generate Topic
              </Button>


</VStack>


</View>
</NativeBaseProvider>
</View>
  )
}

export default Topic1
const styles = StyleSheet.create({
   
    conatainer:{
        flex:1,
        justifyContent:"center",
        backgroundColor:"#ffff"
    },
    
    tag:{

        transform:[{rotate:"90deg"}],
         
        
        
            },
});
   