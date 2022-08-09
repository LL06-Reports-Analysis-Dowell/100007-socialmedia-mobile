import  React,{useState} from 'react';
import {View,StyleSheet,TouchableOpacity, Alert} from "react-native"
import { stockData } from './Data';
import { StatusBar } from "expo-status-bar";
import {
    Box,
    FlatList,
    Heading,

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
    Image,
    Avatar,
    Modal

  } from "native-base"
  import {Header,Icon,} from "react-native-elements"
  import { Feather,AntDesign,MaterialIcons,Ionicons,Foundation  } from '@expo/vector-icons'
import { justifyContent, left, opacity } from 'styled-system';
const Nextpost=({navigation})=>{
  const [showModal, setShowModal] = useState(false);
 return(
<View style={styles.conatainer}>
<StatusBar style="dark" />
<NativeBaseProvider>
<View style={{flex:0.31,}}>
<Header containerStyle={{elevation: 10, // remove shadow on Android
            shadowOpacity: 3, // remove shadow on iOS
            borderBottomWidth: 0,
            shadow:9,
          
            opacity:0.9
      
          
           }}
    
         backgroundColor={"#e6e6fa"}
         

         leftContainerStyle={{flex:1}}
         
          leftComponent={
<TouchableOpacity  onPress={() => navigation.goBack()}  >
<ArrowBackIcon
  style={{color:"grey"}}
/>

</TouchableOpacity   >


            
  }
  centerComponent={<Heading color="blue.600">
    Cyber Crime 
    
    </Heading>}
        

          
          
/>


<VStack  width="90%" mx="auto"  my="auto">
  <FlatList
          
          data={stockData}
          
      
          renderItem={({ item }) => (
            <VStack>
              <Select
    
    width="100%"
    accessibilityLabel="List Of All Posts"
    placeholder="List Of All Posts"
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
  
  </VStack>
          )}
          keyExtractor={(item) => item.id}
        />
        </VStack>



</View>
<View style={{flex:1,}}>
 
<VStack  width="90%" mx="auto"  my="auto">
  <FlatList
          
          data={stockData}
          
      
          renderItem={({ item }) => (
            <VStack space={3}>
             <VStack borderTopWidth="2"  borderColor="gray.200"  pt="4" space={1}
>  
<HStack space={2}>          
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
  <Feather name="more-vertical" size={30} color="grey"    />
</TouchableOpacity>
</Center>
<Modal isOpen={showModal}  width="56"   onClose={() => setShowModal(false)} ml="auto" mt="-10" >
        <Modal.Content paddingTop="3"  paddingBottom="3" borderTopRadius="3xl"  borderBottomRadius="3xl" bgColor="blue.100">
          <Modal.CloseButton />
          
          <Modal.Body>
            <VStack space={3}>
<TouchableOpacity activeOpacity={1} onPress={()=>{setShowModal(false),navigation.navigate("Editpostscreen")}}>
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

<Text>

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

      

            </VStack>
            <VStack borderBottomWidth="2"  borderColor="gray.400" pb="2" mt="1">
            <Image  style={styles.Image}
      source={{
        uri:item.Image[1]
      }}
      alt="Alternate Text"
      resizeMode="stretch"
      
      
  
    />
    </VStack>
    <HStack borderBottomWidth="2"  borderColor="gray.400" pb="1">
<Text fontSize="sm">
Qualitative Categorisation : <Text color="gray.400" fontSize="sm" fontWeight="bold">
  {item.Qualitative_categorisation}
  </Text>
   {"\n"}   
Targeted To:               <Text color="gray.400" fontSize="sm" fontWeight="bold" >
  {  item.Brand}
  </Text>
  
  {"\n"}
  Designed For :                     <Text color="gray.400" fontSize="sm" fontWeight="bold">
  {item.Designed_for}
  </Text>
  {"\n"}
  Targeted Geography:       <Text color="gray.400" fontSize="sm" fontWeight="bold">
  {item.Geography}
  </Text>

</Text>



    </HStack>
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



  
  </VStack>
          )}
          keyExtractor={(item) => item.id}
        />
        </VStack>


</View>

<View style={{flex:0.14}}>
<HStack space={3} mt="2" justifyContent="flex-end" >
<Button   shadow="9" size="lg" borderTopRightRadius="xl" borderTopLeftRadius="xl" 
 borderBottomLeftRadius="xl" borderBottomRightRadius="xl" onPress={() =>
   navigation.navigate("Nextpost")} 
  colorScheme="gray"
  
  
  style={{width:100,}}
  
  
  
   _text={{ color: 'white',fontWeight:'bold',fontSize:'lg' }}    >
    Next
</Button>
<Button size="lg" shadow="9"  borderTopRightRadius="xl" borderTopLeftRadius="xl" 
 borderBottomLeftRadius="xl" borderBottomRightRadius="xl" 
  onPress={() => navigation.navigate("Post")}  
  colorScheme="blue"  style={{width:100}} _text={{ color: 'white',fontWeight:'bold',fontSize:'lg' }}    >
     Post
</Button>



</HStack>


</View>

</NativeBaseProvider>
</View>
   


 )



}
export default Nextpost;
const styles = StyleSheet.create({
   
    conatainer:{
        flex:1,
        justifyContent:"center"
        
    
        
    },
    
    Image:{
width:"100%",
height:160  



    }
    
        
    
      
      
      
      });