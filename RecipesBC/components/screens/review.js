import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Button, SafeAreaView, FlatList } from 'react-native';


const DataReview = [
    {
        id: "1",
        photo: "https://cdn.pixabay.com/photo/2012/04/13/21/07/user-33638_960_720.png",
        name: "Carlos",
        reseña: "Muy facil"
    },
    {
        id: "2",
        photo: "https://cdn.pixabay.com/photo/2012/04/13/21/07/user-33638_960_720.png",
        name: "Juan",
        reseña: "Falta Detalles"
    },
    {
        id: "3",
        photo: "https://cdn.pixabay.com/photo/2012/04/13/21/07/user-33638_960_720.png",
        name: "Mario",
        reseña: "Exelente explicacion"
    },
    {
        id: "4",
        photo: "https://i0.pngocean.com/files/924/414/456/user-profile-avatar-woman-icon-girl-avatar.jpg",
        name: "Camila",
        reseña: "No se entiende"
    },
    {
        id: "5",
        photo: "https://i0.pngocean.com/files/924/414/456/user-profile-avatar-woman-icon-girl-avatar.jpg",
        name: "Fernanda",
        reseña: "Falta mas informacion"
    }
]

function Item(props) {
    return (
        <View style={styles.content}>
            <Image
                style={styles.image}
                source={{ uri: props.item.photo }}
                resizeMode='contain'
            />
            <View style={styles.review}>
                <Text style={styles.user}>{props.item.name}</Text>
                <Text style={styles.comentario} 
                onChangeText={changePass => getReview(changePass)}>{props.item.reseña}</Text >
            </View>
        </View>
    )
}
export default function Review() {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Image
                    style={styles.image}
                    source={require('../../assets/usuario.jpg')}
                    resizeMode='contain'
                />
                <View style={styles.review}>
                    <Text style={styles.user}>Jhon</Text>
                    <TextInput style={styles.add} name="comentarios" multiline={true} numberOfLines={1} placeholder="Escribe aquí tus comentarios" />
                    <View style={styles.btn}>
                        <Button onPress={() => console.log('enviado')} color="#FC5B27" title='Enviar'></Button>
                    </View>
                </View>

            </View>

            <SafeAreaView style={styles.item}>
                <FlatList
                    data={DataReview}
                    renderItem={({ item }) => <Item item={item} />}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    content: {
        paddingBottom: 10,
        paddingTop: 10,
        flexDirection: 'row',
    },

    user: {
        fontSize: 18,
        fontWeight: "bold",

    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 160,

    },
    comentario: {
        flex: 1,
        fontSize: 15,

    },
    review: {
        flex: 5,
        marginLeft: 10,
        backgroundColor: '#FCC7B5',
        padding: 5
    },
    item: {
        flex: 4,
    },
    add: {
        padding: 5,

    },
    btn: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    }


})