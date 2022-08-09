import  React from 'react';
import { StatusBar } from 'expo-status-bar';


import { stockData } from "./Data";

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
  Select,
  CheckIcon
  

  
} from 'native-base';
import { TouchableNativeFeedbackBase,StyleSheet,Text,KeyboardAvoidingView,ImageBackground, Dimensions } from 'react-native';
import { style } from 'styled-system';





const Login=({navigation})=>{
  // const { width, height } = Dimensions.get('window') 
  let [service, setService] = React.useState("")
  

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
   <Box safeArea flex={1} width="90%" mx="auto" >  
   <KeyboardAvoidingView style={{marginTop:"5%"}}>
  <Text style={styles.text}>
    Social Media     Automation
    </Text>
    </KeyboardAvoidingView>

    <VStack space={3} mt="5%">
      <FormControl>
        <FormControl.Label
          _text={{
            color: "white",
            fontSize: 'lg',
            fontWeight: "bold",
          }}>
          Email
        </FormControl.Label>
        <Input  
        
          placeholder="Enter Email"
         fontSize="lg"
        variant="filled"
        
        />
      </FormControl>
      <FormControl>
      <FormControl.Label
          _text={{
            color: "white",
            fontSize: 'lg',
            fontWeight: "bold",
          }}>
          Password
        </FormControl.Label>
        <Input
          type="password" 
         variant="filled" placeholder="Enter Password"
        fontSize="lg"
      
        />
        {/* <View style={styles.textarea}>
        <FormControl.Label
          _text={{
            color: 'coolGray.800',
            fontSize: 'lg',
            fontWeight: 500,
          }}>
          Face Id 
        </FormControl.Label>
       
        


        </View>   */}
       
      </FormControl>

      <FormControl>
      <FormControl.Label
          _text={{
            color: "white",
            fontSize: 'lg',
            fontWeight: "bold",
          }}>
          Language
        </FormControl.Label>
        <Select
    
  
    accessibilityLabel="Select The Language"
    placeholder="Select The Language"
    variant="filled"
    fontSize="md"
    
    bgColor="transparent"
     
    _selectedItem={{
      
      endIcon: <CheckIcon size="5"  color="black"  />,
    }}
    
   
  >
        <Select.Item label="English" value="Eng" />
        <Select.Item label="Spanish" value="Spi" />
        <Select.Item label="Hindhi" value="Hin" />
        <Select.Item label="Urdu" value="Ur" />
        <Select.Item label="Dutch" value="Du" />
      </Select>

      </FormControl>



      <Button 
      onPress={() => navigation.navigate("Dashboard")}
       mt="4" colorScheme="green" _text={{ color: 'white',fontWeight:'bold',fontSize:'lg' }}  >
        Log In 
      </Button>
      
    
<HStack mt="4" justifyContent="center">
       <Text style={styles.signup}>
              I'm a new user.{' '}
            </Text>
            <Link onPress={() => navigation.navigate("SignUp")}
              _text={{
                color: 'indigo.500',
                fontWeight: 'medium',
                fontSize: 'lg',
              }}
              >
              Sign Up
            </Link>

     
        
      </HStack>
    </VStack>
  </Box>
  </NativeBaseProvider>
  </ImageBackground>



)






}
export default Login;

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
  