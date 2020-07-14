import React from 'react';
import { View, Text, StyleSheet, Image, Button, ScrollView } from 'react-native';



const DataUser = {
    name: "Juan",
    lastName: "Pérez",
    sexo: "Masculino",
    email: "jsi@hotmail.com",
    telf: "09898765465",
    ciudad: "Quito"

}

export default function Account() {
    return (
        <View style={styles.container}>
            <View style={styles.contentImage}>
                <Image
                    style={styles.image}
                    source={require('./../assets/usuario.jpg')}
                    resizeMode='contain'
                />
            </View>
            <ScrollView>
                <View style={styles.content} data={DataUser}>

                    <Text style={styles.info}>Nombre: <Text style={styles.data}>{DataUser.name}</Text></Text>
                    <Text style={styles.info}>Apellido: <Text style={styles.data}>{DataUser.lastName}</Text></Text>
                    <Text style={styles.info}>Sexo: <Text style={styles.data}>{DataUser.sexo}</Text></Text>
                    <Text style={styles.info}>Email: <Text style={styles.data}>{DataUser.email}</Text></Text>
                    <Text style={styles.info}>Teléfono: <Text style={styles.data}>{DataUser.telf}</Text></Text>
                    <Text style={styles.info}>Ciudad: <Text style={styles.data}>{DataUser.ciudad}</Text></Text>

                </View>
                <Button onPress={() => console.log('Sesion cerrada')} title="Cerrar Sesión" color="#FC5B27" ></Button>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    contentImage: {
        alignItems: 'center'
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 160,
    },
    content: {
        paddingTop: 30,
        paddingBottom: 15
    },
    info: {
        fontSize: 20,
        lineHeight: 35,
        fontWeight: 'bold',
        flexDirection: "row"
    },
    data: {
        fontWeight: 'normal'
    },


})