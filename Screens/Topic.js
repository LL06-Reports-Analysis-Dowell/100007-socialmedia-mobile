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




const Topic = ({navigation}) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [isEnabled1, setIsEnabled1] = useState(false);
    const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
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

<TouchableOpacity  activeOpacity={1}   onPress={() =>navigation.navigate('Dashboard')}  >
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
<VStack my='auto' width='90%'  mx='auto'>
 <FlatList
 
 data={topic}
 renderItem={({item})=>(
 <VStack >
    <VStack>
  <Heading fontSize='lg' color='blue.500'   >
      Your Category
  </Heading>

  <Select
     mt='2%'
    width="100%"
    accessibilityLabel="List Of All Posts"
    placeholder="Select Category"
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
<VStack>
  <Heading fontSize='lg' color='blue.500' mt='2%'  >
      Your Product
  </Heading>

  <Input
   variant='filled'
   placeholder="Enter Your Product"
   fontSize='md'
   placeholderTextColor='black'
   mt='2%'
  />

</VStack>

<VStack>
  <Heading fontSize='lg' color='blue.500'   mt='2%'  >
      On What Topic Article Should {'\n'}Generate
  </Heading>
  <HStack mt='2%' justifyContent='space-between'>
  <Select
     
     
     width='60%'
    accessibilityLabel="Select Topic"
    placeholder="Select Topic"
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
  <HStack>
  <Switch
        trackColor={{ false: "#81b0ff", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#fff" : "#fff"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
        style={styles.tag}
      />
<VStack>
<Heading color={isEnabled? "gray.300":'blue.500'}  fontSize='lg'>
Singular
</Heading>
<Heading color={isEnabled?"blue.500":'gray.300'}  fontSize='lg'>
    plural
</Heading>
  </VStack>
  </HStack>
</HStack>

</VStack>
<VStack>
  <Heading fontSize='lg' color='blue.500'   mt='2%'  >
   Purpose of  {'\n'}Article/Content?
  </Heading>
  <HStack mt='2%' justifyContent='space-between'>
  
  <Input
   variant='filled'
   placeholder="Enter Your Purposes"
   fontSize='md'
   placeholderTextColor='black'
   width='60%'
  />
  <HStack>
  <Switch
        trackColor={{ false: "#81b0ff", true: "#81b0ff" }}
        thumbColor={isEnabled1 ? "#fff" : "#fff"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch1}
        value={isEnabled1}
        style={styles.tag}
      />
<VStack>
<Heading color={isEnabled1? "gray.300":'blue.500'}  fontSize='lg'>
Singular
</Heading>
<Heading color={isEnabled1?"blue.500":'gray.300'}  fontSize='lg'>
    plural
</Heading>
  </VStack>
  </HStack>
</HStack>

</VStack>
 
 
<Button
                 width='50%'
                   
                colorScheme="blue"
                    p={3}
                    borderBottomRadius='xl'
                    borderTopRadius='xl'
                    shadow='3'
                mt='20%'
                    mx='auto'
                    
                    _text={{
                      color: "white",
                      fontWeight: "bold",
                      fontSize: 'xl',
                    }}
                    
             onPress={()=> navigation.navigate('Topic1')}
                  >
                    Next
                  </Button>

 </VStack>



 )}
 
 
 
 
 
 />



</VStack>


</View>
</NativeBaseProvider>
</View>
  )
}

export default Topic
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
   