import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';

import firebase from '../utils/firebase';
import firebaseTime from 'firebase';
import 'firebase/auth/';
import "firebase/firestore";

const BottomMessageScrn = (props) =>{
    const [inputValue, setInputValue] = useState('');

    const createTwoButtonAlert = () =>
    Alert.alert(
      "Alert Title",
      "Message Sent!!",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );

    async function sendMessage(user){
       
        await firebase.firestore().collection("messages").doc("messages"+user)
            .collection(user)
            .add({
                idSender: user,
                content: inputValue,
                userType: "user",
                createdAt: Date()
            }).catch((err)=>{console.log(err)}).then(()=>{createTwoButtonAlert();})
       
    }

    return(
        <View style={styles.containerBottom}>
            <TextInput
                placeholder = "Messages Here!"
                placeholderTextColor = '#000'
                style = {styles.inputText}
                onChange = {(e)=>{setInputValue(e.nativeEvent.text); console.log(inputValue);}}
                value={inputValue}
            />
            <TouchableOpacity 
            onPress={()=>{
                sendMessage(props.user);
        
            }}
            >
                <Text style={styles.textButton}>Send</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    containerBottom : {
        backgroundColor : 'grey',
        flexDirection : 'row',
        height : '10%',
        width : '100%',
        position: 'absolute',
        bottom : 0

    },
    inputText : {
        width : "70%"
    },
    buttonSend : {
        width : "30%",
        
    },
    textButton : {
        margin : 20,
        color : 'white',
        fontSize : 20,
    }
});

export default BottomMessageScrn;