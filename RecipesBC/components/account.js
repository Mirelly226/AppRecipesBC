import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {  Image } from 'react-native';


export default function Account(props) {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
            <Image
                            style={styles.image}
                            source={require('./../assets/usuario.jpg')}
                            resizeMode='contain'
                        />
               <Text style={styles.nombre}>Nombre: Jhon</Text>
               <Text style={styles.apellido}>Apellido: Torres</Text>
               <Text style={styles.sexo}>Sexo: Masculino</Text>
               <Text style={styles.email}>Email: jsi@hotmail.com</Text>
               <Text style={styles.numero}>Número de telefono: 0958954123</Text>
               <Text style={styles.ciudad}>Ciudad: Quito</Text>

            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    nombre: {
        flex:1,
        fontSize:23,
        fontWeight: "bold"
    },
    apellido: {
        flex:1,
        fontSize:23,
        fontWeight: "bold"
    },
    sexo: {
        flex:1,
        fontSize:23,
        fontWeight: "bold"
    },
    email: {
        flex:1,
        fontSize:23,
        fontWeight: "bold"
    },
    numero: {
        flex:1,
        fontSize:23,
        fontWeight: "bold"
    },
    ciudad: {
        flex:1,
        fontSize:23,
        fontWeight: "bold"
    },
    image: {
        width: 300, 
        height: 300, 
        borderRadius: 160,
        textAlign: "ceter"

    }

})