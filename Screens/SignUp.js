import  React from 'react';
import { StatusBar } from 'expo-status-bar';




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
  
  Select,
  CheckIcon
  

  
} from 'native-base';
import { TouchableNativeFeedbackBase,StyleSheet,Text,KeyboardAvoidingView,ImageBackground, Dimensions, Alert ,View} from 'react-native';
import { style } from 'styled-system';





const SignUp=({navigation})=>{
return(
    <ImageBackground style={styles.container}
    source={require("../Images/background.jpg")}
    >
    < NativeBaseProvider>
    
   
   
   <StatusBar style="auto"/>
  
  
    {/* //mx means margin of  left and right//
          my = margin of top and bottom
        mt=margin-top
        mb=margin-bottom
        same for padding 
        pt=paddiing top
        pb = padding bottom 
        px=padding of left and right
        py paddding of top and bottom
        same  for margin
          ml = marginleft
          mr = margin right
          pr= padding right
          pl =padding left
          HStack= objects in Horizantol
          VStack= Objects in Vertical 
           */}
     <Box safeArea flex={1} width="90%" mx="auto"  >  
     <KeyboardAvoidingView style={{marginTop:"5%"}}>
    <Text style={styles.text}>
      Social Media     Automation
      </Text>
      </KeyboardAvoidingView>
      
  
      <VStack space={3} mt="20%">
        <FormControl>
          <FormControl.Label
            _text={{
              color: "white",
              fontSize: 'lg',
              fontWeight: "bold",
            }}>
            Select The Role
          </FormControl.Label>
          <Select
      
    
      accessibilityLabel="Select The Role"
      placeholder="Select The Role"
      variant="filled"
      fontSize="md"
      
      bgColor="transparent"
       
      _selectedItem={{
        
        endIcon: <CheckIcon size="5"  color="black"  />,
      }}
      
     
    >
          <Select.Item label="Freelancer" value="Fre" />
          <Select.Item label="Employee" value="Emp" />
          <Select.Item label="Internie" value="Int" />
          </Select>
        </FormControl>
        <HStack justifyContent="space-between">
            <VStack  width="45%">
        <FormControl>
        <FormControl.Label
            _text={{
              color: "white",
              fontSize: 'lg',
              fontWeight: "bold",
            }}>
            First Name
          </FormControl.Label>
          <Input
          
           variant="filled" placeholder="Enter First Name"
           fontSize="md"
        
          />
         
         
        </FormControl>
        </VStack>
  
        <VStack  width="45%">
        <FormControl>
        <FormControl.Label
            _text={{
              color: "white",
              fontSize: 'lg',
              fontWeight: "bold",
            }}>
            Last Name
          </FormControl.Label>
          <Input
          
            type="text" 
           variant="filled" placeholder="Enter Last Name"
          fontSize="md"
        
          />
          
         
        </FormControl>
        </VStack>



  </HStack>
  <FormControl>
        <FormControl.Label
            _text={{
              color: "white",
              fontSize: 'lg',
              fontWeight: "bold",
            }}>
            User Email
          </FormControl.Label>
          <Input
          
            keyboardType="email-address"
           variant="filled" placeholder="Enter Email"
          fontSize="lg"
        
          />
         
         
        </FormControl>

  
  
         <HStack justifyContent="space-evenly">
         <VStack width="40%">
             
        <Button 
        onPress={() => navigation.navigate("SignUp1")}
         mt="4" colorScheme="green" _text={{ color: 'white',fontWeight:'bold',fontSize:'lg' }} opacity="0.8"  >
          Next
        </Button>
        </VStack>    
        <VStack width="40%">
        <Button 
        onPress={() => Alert.alert("PRESSED")}
         mt="4" colorScheme="blue" _text={{ color: 'white',fontWeight:'bold',fontSize:'lg' }}  opacity="0.8" >
          Cancel
        </Button>
  </VStack>
        



  </HStack>
        
      
  
      </VStack>
    </Box>
    </NativeBaseProvider>
    </ImageBackground>
  
  

)






}
export default SignUp;

  

const styles = StyleSheet.create({
   
    container:{
      flex:1,
     width:Dimensions.get("screen").width,
     height:Dimensions.get("screen").height,
     },
    
    
       text:{
         fontSize:30,
         textAlign:'center',
         fontWeight:"bold",
         color:"#dc143c",
         position:"relative",
         
    
       },
      //  size:{
      //   width:"50%"
      //  },
    
       textarea:{
         width:"45%",
         position:"absolute",
         left:"55%",
         top:"-116%",
         
         
         
         
    
       },
       signup:{
    
       fontSize:20,
       color:"white",
       fontWeight:"bold"
    
    
    
       }
    
       
    
        
    
      
      
      
      });