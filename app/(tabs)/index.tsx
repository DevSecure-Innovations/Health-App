import { Text, View , Image, Button } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor:'white',
       
      }}
    >
      <Image source={require('../../assets/images/icon.png')}
      style={{
        width:'100%',
        height:500
      }}
      
      
      
      />
      <Text
      style={{
        alignItems:'center',
        fontFamily:'regular',
        fontSize:50,
        textAlign:'center',
        color:'red'
      }}
      >This is sample text</Text>
      <Text
      style={{
        textAlign:'center',
        fontFamily:'outfit',
        fontSize:30,
        color:'blue'
      }}
      >This is sample text 2</Text>
      <Text
      style={{
        fontFamily:'font4',
        textAlign:'center',
        fontSize:30

      }}
      >This is sample text 3</Text>
      
    </View>
  );
}
