import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text, Image } from 'react-native';
import firebase from '../utils/firebase';
import {validateEmail} from '../utils/validation';

const SignInScreen = (props) =>{
    const { changeForm } = props;

    const [formData, setFormData] = useState(defaultValue);
    const [formError, setFormError] = useState({});

    const login = ()=>{
        let error ={};
        if(!formData.email || !formData.password){
            console.log("Error 1");
            if(!formData.email) error.email = true;
            if(!formData.password) error.password = true;
        }else if(!validateEmail(formData.email)){
            console.log("Error 2");
            error.email=true;
        }else{
            firebase.auth().signInWithEmailAndPassword(formData.email,formData.password)
            .then(()=>{
                console.log("ok");
            })
            .catch(()=>{
                setFormError({
                    email:true,
                    password:true
                });
            });
        }
        setFormError(error);
    };

    const onChange=(e,type)=>{
        setFormData({...formData,[type]:e.nativeEvent.text});
    };

    return(
        <View style={styles.container}>
            <Image style={styles.beeLogo}
            source={{uri: 'https://thegraphicsfairy.com/wp-content/uploads/2013/05/Honey-Bee-Stock-Image-GraphicsFairy1.jpg'}}
            />
            <Text style={styles.textTitle}>
                Sign In
            </Text>
            <TextInput
                style={styles.textInput}
                placeholder = '  Enter Email'
                onChange={(e)=>onChange(e,"email")}
            />
            <TextInput
                style={styles.textInput}
                placeholder = '  Enter Password'
                secureTextEntry={true}
                onChange={(e)=>onChange(e,"password")}
            />
            <TouchableOpacity style={styles.button} onPress={login}>
                <Text style={styles.text}>Sign In</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.button}  
                onPress={changeForm}
            >
                <Text style={styles.text}>Sign Up</Text>
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
        height : 50,
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
    },
    beeLogo : {
        marginTop : 25,
        width: 150,
        height: 150,
    },

})

export default SignInScreen;