import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {SafeAreaView, StyleSheet } from 'react-native';

import Routes from './src/screens/Routes';
import Auth from './src/componentes/Auth';

import firebase from './src/utils/firebase';
import 'firebase/auth/';



const App = () => {
  const [user,setUser] = useState(undefined);



  useEffect(()=>{
    firebase.auth().onAuthStateChanged((response)=>{
      setUser(response);
    });

  },[]);


  if(user === undefined) return null;


  return (
    <>
      <StatusBar barStyle = "light-content"/>
      <SafeAreaView style={styles.background}>
        {user ? <Routes/>:<Auth/>}
      </SafeAreaView>
    </>
  );
  
}


const styles = StyleSheet.create({
  background:{
    flex: 1,
  }
});

export default App;
