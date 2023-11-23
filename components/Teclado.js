import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Teclado({num1, setNum1, num2, setNum2, setOperacion, showDisplay, reset, getResult}) {

    const [num, setNum] = useState('');

    useEffect(() => {
        cambio()
      }, [num]);

    const cambio = () => {
        const num = 2;
        if(num === 1){
            setNum1(num)
            num = 2;
        }else if(num === 2){
            setNum2(num)
            num = 1;
        }
    }

    return(
    <View style={styles.Teclado}>
        <View style={styles.fila}>
            <TouchableOpacity style={[styles.TeclaC]} key={"C"} onPress={() => reset()}>
            <Text style={[styles.Text]}>C</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.Tecla]} key={"-"} onPress={() => setOperacion("-")}>
            <Text style={[styles.Text]}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.Tecla]} key={"+"} onPress={() => setOperacion("+")}>
            <Text style={[styles.Text]}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.Tecla]} key={"9"}>
            <Text style={[styles.Text]}>9</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.fila}>
            <TouchableOpacity style={[styles.Tecla]} key={5}>
            <Text style={[styles.Text]}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.Tecla]} key={6}>
            <Text style={[styles.Text]}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.Tecla]} key={7}>
            <Text style={[styles.Text]}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.Tecla]} key={8}>
            <Text style={[styles.Text]}>8</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.fila}>
            <TouchableOpacity style={[styles.Tecla]} key={1} onPress={() => setNum(1)}>
            <Text style={[styles.Text]}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.Tecla]} key={2} onPress={() => setNum(2)}>
            <Text style={[styles.Text]}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.Tecla]} key={3} onPress={() => setNum(3)}>
            <Text style={[styles.Text]}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.Tecla]} key={4} onPress={() => setNum(4)}>
            <Text style={[styles.Text]}>4</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.fila}>
            <TouchableOpacity style={[styles.Tecla]} key={0}>
            <Text style={[styles.Text]}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.Tecla]} key={"="} onPress={() => getResult()}>
            <Text style={[styles.Text]}>=</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.Tecla]} key={"/"} onPress={() => setOperacion("/")}>
            <Text style={[styles.Text]}>/</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.Tecla]} key={"X"} onPress={() => setOperacion("X")}>
            <Text style={[styles.Text]}>X</Text>
            </TouchableOpacity>
        </View>
    </View>
    )
}
const styles = StyleSheet.create({
    Teclado: {
      flex: 2,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 10,
    },
    Text: {
        margin: 10,
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 'normal',
      },
    fila: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
    },
      Tecla: {
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#a8a8a8',
        borderRadius: 10,
        margin: 5,
      },
      TeclaC: {
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e00f00',
        borderRadius: 10,
        margin: 5,
      },
  });