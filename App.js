import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import {Dimensions} from 'react-native';


var { height, width } = Dimensions.get('window');

export default function App() {
  const [userPassPhrase, setUserPassPhrase] = useState("");
  const [result, setResult] = useState("");

  //validating user input
  const validate = (userPassPhrase) => {
    let passPhrase = "Str0ngP355w0rD";
    if (passPhrase == userPassPhrase) {
      setResult("congratulation");
    } else {
      setResult("better luck next time");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Enter The Passcode</Text>
      <TextInput
        style={styles.input}
        onChangeText={(val) => setUserPassPhrase(val)}
      /><View style={styles.button}>
      <Button
        title="submit"
        onPress={() => {
          validate(userPassPhrase);
        }}
      /></View>

      {/* {result == "congratulation" ? (
        <Text style={styles.text}>{result}</Text>
      ) : ( */}
      <Text style={styles.text}>{result}</Text>
      {/* )} */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderColor:'black',
    borderWidth:1,
    padding:15,
    width:width-60,
    
    
  },
  title: {
    color:"#000",
    padding:15,
    fontSize:18,

  },
  text: {
    fontSize:20,
  },
  button:{
    padding:15,
  }
});
