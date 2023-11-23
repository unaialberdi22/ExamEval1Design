import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Pantalla from './components/Pantalla.js'
import Teclado from './components/Teclado.js'

export default function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operacion, setOperacion] = useState('');
  const [display, setDisplay] = useState('');
  
  useEffect(() => {
    showDisplay();
  }, []);

  useEffect(() => {
    showDisplay();
  }, [num1, operacion, num2]);

  const reset = () => {
    setNum1('');
    setNum2('');
    setOperacion('');
    setDisplay('');
  }

  const showDisplay = () => {
    setDisplay(num1 + operacion + num2);
  }

  const getResult = () => {
    if(operacion === '+'){
      setDisplay(num1 + num2)
    }else if(operacion === '-'){
      setDisplay(num1 - num2)
    }else if(operacion === 'x'){
      setDisplay(num1 * num2)
    }else if(operacion === '/'){
      setDisplay(num1 / num2)
    }
  }

  return (
    <View style={styles.container}>
      <Pantalla num1={num1} num2={num2} operacion={operacion} display={display}></Pantalla>
      <Teclado num1={num1} setNum1={setNum1} num2={num2} setNum2={setNum2} setOperacion={setOperacion} showDisplay={showDisplay} reset={reset} getResult={getResult}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
