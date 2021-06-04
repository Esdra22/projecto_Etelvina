import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Box} from 'react-native';

import styled from 'styled-components/native';

export default function App() {
  return (
   
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View >
        <Text style={styles.HeaderTitle }>
         Multicaixa
         </Text>
         <Text style={styles.Text1}> mais próximo de ti...</Text>
      </View>
    <View>
    <TextInput
        Placeholder="insira o seu endereço"
        placeholderTextColor="#000"
         style= {styles.TextInput}
          /> 
    </View>


<View  style={styles.caixa} >
<Text  style={styles.textView1}> ATM - BANCO BPC </Text>
<Text style={styles.textView2}>Dinheiro
</Text>

<Text style={styles.textView3}> Papel </Text>
</View>
<View  style={styles.caixa} >

</View>
<View  style={styles.caixa} >

</View>


</View>
 
 


 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFA500'
   
  },
  Text1:{
    fontSize:16,
    color:'#FFF'

  },

  HeaderTitle:{
    marginTop: -170,
    width: 250,
    fontSize:24,
    fontWeight:'bold',
    color:'#FFF'

  },
    TextInput:{

    marginTop: -90,
    fontSize:12,
    color: '#000',
    backgroundColor:"#ffff",
    paddingRight: 40,
    width: 300,
    height: 40,
    paddingVertical:10,
    borderRadius:3
  
  },
  caixa:{
    marginTop:10,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    width: 300,
    height: 110,
    backgroundColor:"#FFF",
    borderRadius:10

  },
  textView1:{
    marginTop: -60,
    alignItems: "center",
    fontWeight:'bold',
  },
  textView2:{
    marginTop: -30,
    paddingRight:70,
   fontSize:12,
    
  },
  textView3:{
    marginTop:-3,
    paddingRight:70,
   fontSize:12,

  }
  
  
 
});
