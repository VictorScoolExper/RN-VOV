import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CardListMessage = props => {
  return (
      <View style={styles.listItem}>
        <Text>{props.from}</Text>
        <Text>{props.about}</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    height : 60,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  },
  textFrom : {
      fontSize : 20,
      fontWeight : 'bold'
  },
  textAbout : {
    fontSize : 10,
  }
});

export default CardListMessage;