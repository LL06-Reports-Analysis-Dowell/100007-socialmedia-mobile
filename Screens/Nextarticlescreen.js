import React from "react";
import {View,StyleSheet,TouchableOpacity, Alert} from "react-native"
import { StatusBar } from "expo-status-bar";
import { stockData } from './Data';
import { useState } from 'react';

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
    Input
  

  } from "native-base"
  import {Header,Icon,} from "react-native-elements"
  import { Feather,AntDesign,MaterialIcons,Ionicons,Foundation  } from '@expo/vector-icons'




const Nextarticlescreen=({navigation})=>{
    
  const [showModal, setShowModal] = useState(false)
  


  

return(
 
 <View style={styles.conatainer}>
<StatusBar style="dark"/>
<NativeBaseProvider> 

<View style={{flex:0.4}} >
<Header containerStyle={{elevation: 10, // remove shadow on Android
            shadowOpacity: 3, // remove shadow on iOS
            borderBottomWidth: 0,
            shadow:9,
          
            opacity:0.9
      
          
           }}
    
         backgroundColor={'#e6e6fa'}
         

         
         
          leftComponent={
<TouchableOpacity  onPress={() => navigation.goBack()}  >
<ArrowBackIcon
  style={{color:"grey"}}
/>


</TouchableOpacity   >


            
  }
  centerComponent={<Heading color="blue.600">
    SocialMedia
    
    </Heading>}
        

          
          
/>
<VStack width="95%" mx="auto" my="auto" >

<FlatList
          
          data={stockData}
          
      
          renderItem={({ item }) => (
            
              <Select
    
    width="100%"
    accessibilityLabel="List Of All Articles"
    placeholder="List Of All Articles"
    variant="filled"
    fontSize="md"
    placeholderTextColor="black"
    bgColor="transparent"
    
    
    _selectedItem={{
      
      endIcon: <CheckIcon size="5" />,
    }}
    
   
  >
    <Select.Item label= {item.Posts[0]} value={item.Posts[0]} />
    <Select.Item label={item.Posts[1]} value={item.Posts[1]} />
    <Select.Item label={item.Posts[2]} value={item.Posts[2]} />
    
    
  </Select>
          

          )}
          keyExtractor={(item) => item.id}
        />


</VStack>
</View>
<View style={{flex:1 ,}}>
<VStack borderTopWidth='2'borderColor="gray.100">
<VStack width="95%" mx="auto" > 


<FlatList
          
          data={stockData}
          
      
          renderItem={({ item }) => (
           <VStack>
              <HStack space={2} mt="3">          
<Avatar
 source={{
  uri:item.Image[2]
}}
width="12"
height="12"



/>
<Center>
<Heading color="blue.600"  size="md">
  {item.Username[0]}
</Heading>
</Center>
<HStack ml="auto">
  <Center>
<TouchableOpacity  onPress={() => setShowModal(true)}>

    <Feather name="more-vertical" size={25} color="grey"    />

</TouchableOpacity>
</Center>
<Modal isOpen={showModal}  width="56"   onClose={() => setShowModal(false)} ml="auto" mt="-10" >
        <Modal.Content paddingTop="3"  paddingBottom="3" borderTopRadius="3xl"  borderBottomRadius="3xl" bgColor="blue.100">
          <Modal.CloseButton />
          
          <Modal.Body>
            <VStack space={3}>
<TouchableOpacity activeOpacity={1} onPress={()=>{setShowModal(false),navigation.navigate("EditArticle")}}>
             <HStack space={1} >
               <Center>
             <MaterialIcons name="edit" size={20} color="gray" />
             </Center>

               <Text fontSize="lg" fontFamily="heading" fontWeight="bold" color="gray.500">
                 Edit
               </Text>
             </HStack>
             </TouchableOpacity>
             <HStack space={1}>
               <Center>
             <AntDesign name="delete" size={20} color="gray" />
             </Center>

               <Text fontSize="lg" fontFamily="heading" fontWeight="bold" color="gray.500">
               Delete Post
               </Text>
             </HStack>
             <HStack space={1}>
               <Center>
             <Ionicons name="save" size={20} color="gray" />
             </Center>

               <Text fontSize="lg" fontFamily="heading" fontWeight="bold" color="gray.500">
                 Save Post
               </Text>
             </HStack><HStack space={1}>
               <Center>
             <Foundation name="link" size={20} color="gray" />
             </Center>

               <Text fontSize="lg" fontFamily="heading" fontWeight="bold" color="gray.500">
                 Copy Link
               </Text>
             </HStack>
            </VStack>
          </Modal.Body>

          </Modal.Content>
      </Modal>

</HStack>

</HStack>
 
<Text mt="2" textAlign="justify">

{item.Topics[0]}
</Text>

<Link  href={item.link} 
        _text={{
          fontSize:"sm",
          fontWeight:"semibold",
        color:"blue.600"  }}
         >
        {item.link}
        </Link>

        <Text mt="2" textAlign="justify">

{item.article1}
</Text>





               </VStack>
          

          )}
          keyExtractor={(item) => item.id}
        />


</VStack>


    
</VStack>


</View>

<View style={{flex:0.19, }}>
 <VStack width="95%" mx="auto" borderTopWidth="2" borderColor="gray.300" >

 <FlatList
          
          data={stockData}
          
      
          renderItem={({ item }) => (
            
            <HStack justifyContent="space-between" mt="1">
    
            <Text color="gray.400" fontSize="sm" fontWeight="bold">
        {item.words}
        
        
              </Text>
              <Text color="gray.400" fontSize="sm" fontWeight="bold">
              {item.charectors}
        
        
              </Text>
        
              <Text color="gray.400" fontSize="sm" fontWeight="bold">
              {item.hastags}
        
        
              </Text>
              
        
            </HStack>
        

          )}
          keyExtractor={(item) => item.id}
        />

<HStack space={3} mt="2" justifyContent="flex-end" >
<Button   shadow="5" size="md" borderTopRightRadius="xl" borderTopLeftRadius="xl" 
 borderBottomLeftRadius="xl" borderBottomRightRadius="xl" onPress={() => navigation.navigate("EditArticle")}  
  colorScheme="gray"
  
  
  style={{width:100,}}
  
  
  
   _text={{ color: 'white',fontWeight:'bold',fontSize:'lg' }}    >
    Edit
</Button>
<Button  shadow="5"  borderTopRightRadius="xl" borderTopLeftRadius="xl" 
 borderBottomLeftRadius="xl" borderBottomRightRadius="xl" 
  
  colorScheme="blue"  style={{width:100}} _text={{ color: 'white',fontWeight:'bold',fontSize:'lg' }}    >
     Next
</Button>



</HStack>


 </VStack>

</View>
     
    
</NativeBaseProvider>

 </View>

)






}
export default Nextarticlescreen;
const styles = StyleSheet.create({
   
    conatainer:{
        flex:1,
        justifyContent:"center",
        backgroundColor:"#fff",
        
      
        
    },
   
    
    
        
    
      
      
      
      });