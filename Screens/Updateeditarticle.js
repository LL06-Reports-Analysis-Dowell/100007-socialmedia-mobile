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
  

  import { Feather,AntDesign,MaterialIcons,Ionicons,Foundation ,FontAwesome, FontAwesome5   } from '@expo/vector-icons'


const updateeditarticle=({navigation})=>{
    
    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
    const [check3, setCheck3] = useState(false);
    const [check4, setCheck4] = useState(false);
    const [check5, setCheck5] = useState(false);
    const [check6, setCheck6] = useState(false);
    const [check7, setCheck7] = useState(false);
    const [check8, setCheck8] = useState(false);
    const [check9, setCheck9] = useState(false);
    const [check10, setCheck10] = useState(false);
     

    const bold=()=>{


        setCheck1(!check1)
    
    }
    const Italic=()=>{


        setCheck2(!check2)
    
    }
    const underline=()=>{


        setCheck3(!check3)

    }

    const alignleft=()=>{


        setCheck4(!check4)
        
    }


    const alignright=()=>{


        setCheck5(!check5)

    }




    const alignjustify=()=>{


        setCheck6(!check6)
    
    }
    
    const colorpalet=()=>{


        setCheck7(!check7)
        
      }  
    
    const link=()=>{


        setCheck8(!check8)
    
    }
    
    const smile=()=>{


        setCheck9(!check9)
    }
    
    const image=()=>{


        setCheck10(!check10)
        navigation.navigate("Editarticleimage")
    
    }






  

return(
 
 <View style={styles.conatainer}>
<StatusBar style="dark"/>
<NativeBaseProvider> 

<View style={{flex:0.26 ,}}    >
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
    CyberCrime
    
    </Heading>}
        

          
          
/>
<VStack width="90%"  my="auto" mx="auto" >

<FlatList
          
          data={stockData}
          
      
          renderItem={({ item }) => (
           <HStack space="5">

<TouchableOpacity onPress={()=>bold()}>
<FontAwesome name="bold" size={16} color={check1 ? "#4169e1":'gray'} />
</TouchableOpacity>
<TouchableOpacity onPress={()=>Italic()}>
<FontAwesome name="italic" size={16} color={check2 ? "#4169e1":'gray'} />
</TouchableOpacity>
<TouchableOpacity onPress={()=>underline()}>
<FontAwesome name="underline" size={16} color={check3 ? "#4169e1":'gray'} />
</TouchableOpacity>
<TouchableOpacity onPress={()=>alignleft()}>
<FontAwesome name="align-left" size={16} color={check4 ? "#4169e1":'gray'} />
</TouchableOpacity>
<TouchableOpacity onPress={()=>alignjustify()}>
<FontAwesome name="align-justify" size={16} color={check6? "#4169e1":'gray'} />
</TouchableOpacity>
<TouchableOpacity onPress={()=>alignright()}>
<FontAwesome name="align-right" size={16} color={check5 ? "#4169e1":'gray'} />
</TouchableOpacity>
<TouchableOpacity onPress={()=>colorpalet()}>
<MaterialIcons name="format-color-fill" size={16} color={check7 ? "#4169e1":'gray'} />
</TouchableOpacity>
<TouchableOpacity onPress={()=>link()}>
<Foundation name="link"  size={18} color={check8 ? "#4169e1":'gray'} />
</TouchableOpacity>
<TouchableOpacity onPress={()=>smile()}>
<FontAwesome5 name="smile" size={16} color={check9 ? "#4169e1":'gray'} />
</TouchableOpacity>
<TouchableOpacity onPress={()=>image()}>
<Feather name="image" size={18} color={check10 ? "#4169e1":'gray'} />
</TouchableOpacity>


   


           </HStack>





          

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


    
</Center>
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

    <VStack mt="2" space={1}>
        <VStack>
            <Center>
        <Image source={{ uri:item.Image[0]} }   width="64" height="64"  resizeMode="stretch"/>
        </Center>
        </VStack>
  
        <Text  textAlign="justify"  > {item.article1}  </Text>  
  
  </VStack>

    





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


<VStack mt="2">
<Button  shadow="1"  borderTopRightRadius="xl" borderTopLeftRadius="xl" 
 borderBottomLeftRadius="xl" borderBottomRightRadius="xl" 
  onPress={() => navigation.navigate("Nextarticlescreen")}  
  colorScheme="blue"   _text={{ color: 'white',fontWeight:'bold',fontSize:'lg' }}    >
     Save Article
</Button>
</VStack>





 </VStack>

</View>
     
    
</NativeBaseProvider>

 </View>

)






}
export default updateeditarticle;
const styles = StyleSheet.create({
   
    conatainer:{
        flex:1,
        justifyContent:"center",
        backgroundColor:"#fff",
        
        
      
        
    },
    text:{
        position:"absolute"
    },
    img:{
        position:"absolute"
    }
   
});