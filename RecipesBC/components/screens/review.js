import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


export default function Review() {
    return (
        <View style={styles.container}>
            <View>
                <Image
                    style={styles.image}
                    source={require('../../assets/usuario.jpg')}
                    resizeMode='contain'
                />
                <Text style={styles.user}>Jhon</Text>
                <textarea name="comentarios" rows="4" cols="20" placeholder="Escribe aquí tus comentarios" ></textarea>
                <Image
                    style={styles.image}
                    source={require('../../assets/usuario1.jpg')}
                    resizeMode='contain'
                />
                <Text style={styles.user}>Pablo</Text>
                <Text style={styles.comentario}>muy facil</Text >
                <Image
                    style={styles.image}
                    source={require('../../assets/usuario.jpg')}
                    resizeMode='contain'
                />
                <Text style={styles.user}>Julio</Text>
                <Text style={styles.comentario}>Falta explicacion</Text >
                <Image
                    style={styles.image}
                    source={require('../../assets/usuario1.jpg')}
                    resizeMode='contain'
                />
                <Text style={styles.user}>María</Text>
                <Text style={styles.comentario}>no se entiende</Text >
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    user: {
        flex: 1,
        fontSize: 23,
        fontWeight: "bold",

    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 360,

    },
    comentario: {
        flex: 1,
        fontSize: 23,
    }


})