import  React  from 'react';
import { StatusBar } from 'expo-status-bar';
import { At_theratepop } from '../Screens/Data';



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
  FlatList,
  
  
} from 'native-base';
import { TouchableNativeFeedbackBase,StyleSheet,Text,KeyboardAvoidingView } from 'react-native';
import { useState } from 'react';
const At_theratepopup=()=>{
    const [showModal, setShowModal] = useState(true)

    return(
<View style={styles.conatainer}>
<NativeBaseProvider>
<Modal isOpen={showModal} size="xl" onClose={() => setShowModal(false)} >
        <Modal.Content maxH="96" borderTopRadius="1"  borderBottomRadius="1"  >
          <Modal.CloseButton />
          
          <Modal.Body>
          <FlatList
          
          data={At_theratepop}
          
      
          renderItem={({ item }) => (
              <VStack>

<HStack space={2} borderBottomWidth="1" borderColor="gray.300" py="2"> 
         
<Avatar
 source={{
  uri:item.pic
}}
width="12"
height="12"



/>
<Center>
<Heading color="blue.600"  size="md" fontWeight="bold">
  {item.name}
</Heading>
</Center>


</HStack>

 </VStack>
            
          )}
          keyExtractor={(item) => item.id}
        />
       <Modal.Footer/>






          </Modal.Body>
          </Modal.Content>
      </Modal>






</NativeBaseProvider>
</View>

    )

}
 export default At_theratepopup;
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