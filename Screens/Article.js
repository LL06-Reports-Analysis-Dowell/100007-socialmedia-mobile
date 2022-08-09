import  React from 'react';
import {View,StyleSheet,TouchableOpacity, Alert} from "react-native"
import Busniess from './All';
import Entertainment from './Entertainment';
import Health from './Health';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';





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
    Modal
  

  } from "native-base"
  import {Header,Icon,} from "react-native-elements"
  import { Feather } from '@expo/vector-icons';
import { marginRight } from 'styled-system';




const Article=({navigation})=>{
    
  const [showModal, setShowModal] = useState(false)
  


  

return(
 
 <View style={styles.conatainer}>
<StatusBar style="dark"/>
<NativeBaseProvider> 

<FlatList
         
        data={stockData}
        
    
        renderItem={({ item }) => (
          <VStack borderBottomWidth="1" pb="3" borderColor="gray.300">
          <Header containerStyle={{elevation: 5, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
            borderBottomWidth: 0,
            
            
        
           }}
         backgroundColor={'#fff'}
         leftContainerStyle={{justifyContent:"center"}}
         leftComponent={
            <TouchableOpacity  onPress={() => navigation.goBack()}  >
            <ArrowBackIcon
              style={{color:"grey",width:25}}
              
              
            />
            
            </TouchableOpacity   >
            
            
                        
              }
         
         centerContainerStyle={{flex:30,justifyContent:"center"}}
          centerComponent={
              { text:"Social Media Automation",style:{fontSize:23,color:"blue",fontWeight:"bold"}}}
          rightComponent={<View>
          <Avatar
      source={{
        uri:item.Image[2]
      }}
      alt="Alternate Text"
      size="8"
      mt="1"
      
    
      
    />
          

          </View>}

          
          
        />
         
         <HStack width="95%" mx="auto" mt="4" >
<Icon
 name='search'
size={30}
onPress={()=>Alert.alert("pressed")}
/>
<Select
    
    width="60%"
    accessibilityLabel="List Of All Topics"
    placeholder="List Of All Topics"
    variant="filled"
    fontSize="md"
    placeholderTextColor="black"
    bgColor="transparent"
    mt="-2"
    
    _selectedItem={{
      
      endIcon: <CheckIcon size="5" />,
    }}
    
   
  >
    
    <Select.Item label= {item.listitem1} value={item.listitem1} />
    <Select.Item label={item.listitem2} value={item.listitem2} />
    <Select.Item label={item.listitem3} value={item.listitem3} />
    
  </Select>
  <Button 
      onPress={() =>Alert.alert("LoginButton")}
      mt="-1" colorScheme="blue" _text={{ color: 'white',fontWeight:'bold',fontSize:'lg' }} style={{width:"27%" ,height:"100%"}}  >
        Search
      </Button>
    
         </HStack>

                

        </VStack>
         
        )}
        keyExtractor={(item) => item.id}
      />

 

     
     
    
</NativeBaseProvider>

 </View>

)






}
export default Article;
const styles = StyleSheet.create({
   
    conatainer:{
        flex:1,
        justifyContent:"center",
        backgroundColor:"#fff",
        
      
        
    },
   
    
    
        
    
      
      
      
      });