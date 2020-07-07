import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Account(props){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Perfil de Usuario</Text>
            </View>
            <View style={styles.content}>
                <Text>Aquí agregar el contenido</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flex: 1,
        backgroundColor: '#FC5B27',
        alignItems: 'center',
        paddingTop: 10,
        justifyContent:'center'
    },
    content: {
        flex: 8,
        padding: 20
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white'
    }
})