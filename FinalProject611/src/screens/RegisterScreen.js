import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text, Alert } from 'react-native';


import { validateEmail } from '../utils/validation';
import firebase from '../utils/firebase';
import 'firebase/auth/';
import "firebase/firestore";

const RegisterScreen = (props) =>{
    const { changeForm } = props;
    const [formData, setFormData] = useState(defaultValue);
    const [formError, setFormError] = useState({});

    async function registration(formData) {
        try {
          await firebase.auth().createUserWithEmailAndPassword(formData.email, formData.password)
          .then(() => {console.log("correo registrado");})
          .catch(() => {
                setFormError({
                    email: true,
                    password: true,
                    confirmPass: true
                });
           });
          const user = firebase.auth().currentUser;
      
          const db = firebase.firestore();
          db.collection("users")
            .doc(user.uid)
            .set({
                id: user.uid,
                name: formData.name,
                lastName: formData.lastName,
                email: user.email,
                userType: "user"
            });
        } catch (err) {
          Alert.alert("There is something wrong!!!!", err.message);
        }
    }


    const register = () => {
        console.log("registrando...")
        let error = {};

        if (!formData.email || !formData.password || !formData.confirmPass) {
            if (!formData.email) error.email = true;
            if (!formData.password) error.password = true;
            if (!formData.confirmPass) error.confirmPass = true;
        }
        else if (!validateEmail(formData.email)) {
            error.email = true;
        }
        else if (formData.password !== formData.confirmPass) {
            error.password = true;
            error.confirmPass = true;
        }
        else if (formData.password.length < 6) {
            error.password = true;
        }
        else {
            registration(formData);
           
        }
        setFormError(error);
    }

    return(
        <View style={styles.container}>
            <Text style={styles.textTitle}>
                Register Now!
            </Text>
            <TextInput
                style={styles.textInput}
                placeholder = '  Enter Name'
                onChange = {(e)=>setFormData({...formData, name:e.nativeEvent.text})}
            />
            <TextInput
                style={styles.textInput}
                placeholder = '  Enter Last Name'
                onChange = {(e)=>setFormData({...formData, lastName:e.nativeEvent.text})}
            />
            <TextInput
                style={styles.textInput}
                placeholder = '  Enter Email'
                onChange = {(e)=>setFormData({...formData, email:e.nativeEvent.text})}
            />
            <TextInput
                style={styles.textInput}
                placeholder = '  Enter Password'
                secureTextEntry={true}
                onChange = {(e)=>setFormData({...formData, password:e.nativeEvent.text})}
            />
            <TextInput
                style={styles.textInput}
                placeholder = '  Enter Password'
                secureTextEntry={true}
                onChange = {(e)=>setFormData({...formData, confirmPass:e.nativeEvent.text})}
            />
            <TouchableOpacity style={styles.button} onPress={register}>
                <Text style={styles.text}>Create!</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={changeForm}>
                <Text style={styles.text}>Start Session!</Text>
            </TouchableOpacity>
        </View>
    )
} 

function defaultValue() {
    return {
        email: "",
        password: ""
    }

};

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems : 'center',
    },
    textInput: {
        height: 40,
        width : 250,
        margin: 12,
        borderWidth: 1,
        borderRadius : 25,
        marginTop : 15,
        
    },
    button : {
        height : 35,
        width : 240,
        backgroundColor : 'red',
        marginTop : 30,
        borderRadius : 25,
        alignItems : 'center',
        justifyContent : 'center'

    },
    text : {
        fontSize: 15,
    },
    textTitle : {
        fontSize : 35,
        fontWeight : 'bold',
        marginTop : 55,
        marginBottom : 35
    }

})

export default RegisterScreen;