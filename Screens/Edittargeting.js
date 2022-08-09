import  React from 'react';
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
    Image

  } from "native-base"
const Edittargeting=({navigation})=>{

 return(
<View style={styles.conatainer}>
<StatusBar style="dark"/>
    <NativeBaseProvider>
    <HStack  mt="9"   >
<TouchableOpacity  onPress={() => navigation.goBack()}  >
<ArrowBackIcon
  size="9"
  ml="2"
  
  

/>
</TouchableOpacity   >
  
</HStack>

<VStack  width="80%" mx="auto" >
<FlatList
         
        data={stockData}
        
    
        renderItem={({ item }) => (
          <Box  >
          
      

      <VStack borderBottomWidth="1">

      <Text fontSize="md" mt="2"   >
      {item.Topics[0]}

      </Text>
      <HStack mt="3" mb="1" >
          <VStack>
          <Button mt="1"  colorScheme="green" 
        _text={{ color: 'white',fontWeight:'bold',fontSize:"xl" }} 
        onPress={()=> Alert.alert("MENTION TAG")}  >
     MENTION
</Button> 
<Button mt="3"  colorScheme="green" 
        _text={{ color: 'white',fontWeight:'bold',fontSize:"xl" }} 
        onPress={()=>Alert.alert(" TAG")}  >
     TAG 
</Button> 
  
        </VStack>
      <Image style={styles.Image}
      source={{
        uri:item.Image[0]
      }}
      alt="Alternate Text"
      mx="auto"
    />
    
    
 </HStack>
 </VStack>
 <VStack>
 <Select
    
        minWidth="200"
        accessibilityLabel="List Topics"
        placeholder="Qualitative categorization of post "
        variant="filled"
        fontSize="md"
        placeholderTextColor="black"
        _selectedItem={{
          
          endIcon: <CheckIcon size="5" />,
        }}
        
       
      >
        <Select.Item label= {item.Qualitative_categorization_of_post[0]} 
        value={item.Qualitative_categorization_of_post[0]} />
        <Select.Item label={item.Qualitative_categorization_of_post[1]} 
        value={item.Qualitative_categorization_of_post[1]} />
        <Select.Item label={item.Qualitative_categorization_of_post[2]} 
        value={item.Qualitative_categorization_of_post[2]} />
        
        
      </Select>
<VStack mt="1"> 
 <Text fontSize="xl">
     This Post is targeted to 
 </Text>
 <Select
    
    minWidth="200"
    accessibilityLabel="Brand List"
    placeholder="Brand List"
    variant="filled"
    fontSize="md"
    placeholderTextColor="black"
    _selectedItem={{
      
      endIcon: <CheckIcon size="5" />,
    }}
    
   
  >
    <Select.Item label= {item.Brands[0]} value={item.Brands[0]} />
    <Select.Item label={item.Brands[1]} value={item.Brands[1]} />
    <Select.Item label={item.Brands[2]} value={item.Brands[2]} />

    
  </Select>

    </VStack>
    <VStack > 
 <Text fontSize="xl">
     This Post is designed for
 </Text>
 <Select
    
    minWidth="200"
    accessibilityLabel="Channel List"
    placeholder="Channel List"
    variant="filled"
    fontSize="md"
    placeholderTextColor="black"
    _selectedItem={{
      
      endIcon: <CheckIcon size="5" />,
    }}
    
   
  >
    <Select.Item label= {item.listitem1} value={item.listitem1} />
    <Select.Item label={item.listitem2} value={item.listitem2} />
    <Select.Item label={item.listitem3} value={item.listitem3} />
    <Select.Item label={item.listitem4} value={item.listitem4} />
    
  </Select>

    </VStack>
 <HStack mt="2">

 <Text fontSize="lg" mt="2">
     Targeted geography
 </Text>
 <Select
    
    width="150"
    accessibilityLabel="City List"
    placeholder="City List"
    variant="filled"
    fontSize="md"
    placeholderTextColor="black"
    ml="3"
    _selectedItem={{
      
      endIcon: <CheckIcon size="5" />,
    }}
    
   
  >
    <Select.Item label= {item.City[0]} value={item.City[0]} />
    <Select.Item label={item.City[1]} value={item.City[1]} />
    <Select.Item label={item.City[2]} value={item.City[2]} />
    
    
  </Select>

 </HStack>


 </VStack>
 
           
      
          </Box>
        )}
        keyExtractor={(item) => item.id}
      />

<Button mt="1"  colorScheme="green" style={{ width:"70%" }} 
        _text={{ color: 'white',fontWeight:'bold',fontSize:"xl" }} 
        onPress={()=> navigation.navigate("Editpost")}  >
    UPDATE TO POST 
</Button> 
 
 </VStack>



</NativeBaseProvider>
</View>
   


 )



}
export default Edittargeting;
const styles = StyleSheet.create({
   
    conatainer:{
        flex:1,
        justifyContent:"center",
    
        
    },
    Image:{
        width:130,
        height:160,
        
    },
    
    
    
        
    
      
      
      
      });