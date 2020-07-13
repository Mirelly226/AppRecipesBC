import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {  Image } from 'react-native';


export default function Review() {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
            <Image
                            style={styles.image}
                            source={require('../../assets/usuario.jpg')}
                            resizeMode='contain'
                        />
            <Text style={styles.jhon}>Jhon</Text>
            <textarea name="comentarios" rows="4" cols="20">Escribe aquí tus comentarios</textarea>
            <Image
                            style={styles.image1}
                            source={require('../../assets/usuario1.jpg')}
                            resizeMode='contain'
                        />
            <Text style={styles.pablo}>Pablo</Text>
            <textarea name="comentarios" rows="4" cols="20">Escribe aquí tus comentarios</textarea>
            <Image
                            style={styles.image2}
                            source={require('../../assets/usuario.jpg')}
                            resizeMode='contain'
                        />
            <Text style={styles.julio}>Julio</Text>
            <textarea name="comentarios" rows="4" cols="20">Escribe aquí tus comentarios</textarea>
            <Image
                            style={styles.image3}
                            source={require('../../assets/usuario1.jpg')}
                            resizeMode='contain'
                        />
            <Text style={styles.maria}>María</Text>
            <textarea name="comentarios" rows="4" cols="20">Escribe aquí tus comentarios</textarea>



            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    jhon: {
        flex:1,
        fontSize:23,
        fontWeight: "bold",
        
    },
    image: {
         width: 50,
         height: 50, 
         borderRadius: 360,
         

    },
    pablo: {
        flex:1,
        fontSize:23,
        fontWeight: "bold",
    },
    image1: {
         width: 50,
         height: 50, 
         borderRadius: 360, 
    },
    julio: {
        flex:1,
        fontSize:23,
        fontWeight: "bold",
    },
    image2: {
         width: 50,
         height: 50, 
         borderRadius: 360, 
    },
    maria: {
        flex:1,
        fontSize:23,
        fontWeight: "bold",
    },
    image3: {
         width: 50,
         height: 50, 
         borderRadius: 360, 
    }

})