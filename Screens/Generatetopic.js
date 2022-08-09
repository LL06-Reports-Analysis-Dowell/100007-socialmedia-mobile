import React  from "react";

import { View, StyleSheet ,TouchableOpacity, Alert , TextInput, ImageBackground, Switch} from 'react-native';
import { StatusBar } from "expo-status-bar";

import {generatetopic} from "./Data";

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



const Generatetopic = ({navigation}) => {
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

<TouchableOpacity  activeOpacity={1}   onPress={() =>navigation.navigate('Topic1')}  >
<VStack>
<ArrowBackIcon
  style={{color:"grey"}}
  
/>
</VStack>


</TouchableOpacity   >


   
}

 

/>
</View>
<View style={{flex:1}}>
<VStack width='95%' mx='auto'  >
 <FlatList
 
  data={generatetopic}
  renderItem={({item})=>(
 <VStack mt='3%'>
   <Heading fontSize='lg' color='blue.500'>
  {item.Heading}
</Heading>
 <HStack>
     <Input
       width='75%'
       variant='filled'
       placeholder={item.Placeholder}
       


      
       
     
     />

<Select
    
    width='25%'
    borderRadius='xl'
    accessibilityLabel="Rank"
    placeholder="Rank"

    fontSize="md"
    placeholderTextColor='gray.500'
    bgColor='transparent'
    style={{backgroundColor:"rgb(230, 245, 253)"}}
    
    _selectedItem={{
      
      endIcon: <CheckIcon size="5" />,
    }}
    
   
  >
    <Select.Item label= '1' value='1' />
    <Select.Item label= '2' value='2' />
    <Select.Item label= '3' value='3' />
    <Select.Item label= '4' value='4' />
    <Select.Item label= '5' value='5' />
    <Select.Item label= '6' value='6' />
    <Select.Item label= '7' value='7' />
    <Select.Item label= '8' value='8' />
    <Select.Item label= '9' value='9' />
    <Select.Item label= '10' value='10' />
    <Select.Item label= '11' value='11' />
    <Select.Item label= '12' value='12' />
    
    
    
  </Select>

 </HStack>



 </VStack>








  )}
  ListFooterComponent={()=>
   <VStack py='5%'>
    <Button
              
    colorScheme="blue"
         width='50%'
         mx='auto'
         
        p={3}
      
        shadow='4'
        
        _text={{
          color: 'white',
          fontWeight: "bold",
          fontSize: "xl",
        }}
        
        onPress={()=>navigation.navigate('Dashboard')}
      >
        Submit
      </Button>
</VStack>


}
 
 
  keyExtractor={(item) => item.id}
 
 
 
 
  /> 

</VStack>

</View>
</NativeBaseProvider>
</View>
  )
}

export default Generatetopic
const styles = StyleSheet.create({
   
    conatainer:{
        flex:1,
        justifyContent:"center",
        backgroundColor:"#ffff"
    },
    
    
});
   