import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Pantalla({display}) {
    return(
    <View style={styles.pantalla}>
        <Text style={styles.display}>{display}</Text>
    </View>
    )
}
const styles = StyleSheet.create({
    pantalla: { 
    margin: 25,
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#a8a8a8',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
    },
    display:{
    fontSize: 40,
    marginLeft: 20,
    flex: 1,
    flexDirection: 'row',
    alignItems: "flex-start",
    }
  });