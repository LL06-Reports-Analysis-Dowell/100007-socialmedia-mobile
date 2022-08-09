import  React  from 'react';
import { StatusBar } from 'expo-status-bar';
import { Hastagpop } from '../Screens/Data';

import { Entypo,Ionicons  } from '@expo/vector-icons'

import {
  NativeBaseProvider,
  Box,
 Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  Icon,
  IconButton,
  HStack,
  Divider,
  Center,
  Stack,
  TextArea,
  View,
  Modal,
  ScrollView,
  Avatar,
  FlatList
  
} from 'native-base';
import { TouchableNativeFeedbackBase,StyleSheet,Text,KeyboardAvoidingView } from 'react-native';
import { useState } from 'react';
const Hastagprop=()=>{
    const [showModal, setShowModal] = useState(true)

    return(
<View style={styles.conatainer}>
<NativeBaseProvider>
<Modal isOpen={showModal} size="xl" onClose={() => setShowModal(false)} >
        <Modal.Content maxH="80" borderTopRadius="1"  borderBottomRadius="1"  >
        
          
          <Modal.Body>
          <FlatList
          
          data={Hastagpop}
          
      
          renderItem={({ item }) => (
              <VStack>

<HStack  borderBottomWidth="1" borderColor="gray.300" py="4" justifyContent="space-between"> 
         
<Heading color="black"  size="md" fontWeight="light" >
  {item.name}
</Heading>

<Entypo name="chevron-thin-down" size={15} color="black" />

</HStack>

 </VStack>
            
          )}
          keyExtractor={(item) => item.id}
        />
       






          </Modal.Body>
          </Modal.Content>
      </Modal>






</NativeBaseProvider>
</View>

    )

}
 export default Hastagprop;
 const styles = StyleSheet.create({
   
    conatainer:{
        flex:1,
        justifyContent:"center"
        
    
        
    },
    
    Image:{
width:"100%",
height:130  



    }
    
        
    
      
      
      
      });