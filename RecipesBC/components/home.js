import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, FlatList, ImageBackground, Image, ActivityIndicator } from 'react-native';
import Search from './searchbar';
import { IconButton, Colors } from 'react-native-paper';
import firebase from "./lib/firebase";
import "firebase/firestore"

const DataRecipes = [
    {
        id: "1",
        title: "Pan de Yuca",
        photo: "https://www.cocina-ecuatoriana.com/base/stock/Recipe/3-image/3-image_web.jpg",
        reviews: "Comentarios de la receta"
    },
    {
        id: "2",
        title: "Pan de Ajo y Parmesano",
        photo: "https://cdn.kiwilimon.com/recetaimagen/29025/th5-320x320-29840.jpg",
        review: "Comentarios de la receta"
    },
    {
        id: "3",
        title: "Cupcakes de Vainilla",
        photo: "https://www.cocina-ecuatoriana.com/base/stock/Recipe/3-image/3-image_web.jpg",
        review: "Comentarios de la receta"
    },
    {
        id: "4",
        title: "Bocaditos de Mesa Sable",
        photo: "https://cdn.kiwilimon.com/recetaimagen/29422/th5-320x320-30161.jpg",
        review: "Comentarios de la receta"
    },
    {
        id: "5",
        title: "Galletas de Chocolate",
        photo: "https://cdn.kiwilimon.com/recetaimagen/29025/th5-320x320-29840.jpg",
        review: "Comentarios de la receta"
    },
    {
        id: "6",
        title: "Budín de Pan Chocolatoso",
        photo: "https://www.cocina-ecuatoriana.com/base/stock/Recipe/3-image/3-image_web.jpg",
        review: "Comentarios de la receta"
    },
    {
        id: "7",
        title: "Pastel de la Torre",
        photo: "https://cdn.kiwilimon.com/recetaimagen/29025/th5-320x320-29840.jpg",
        review: "Comentarios de la receta"
    },
    {
        id: "8",
        title: "Pastel de Chocolate de Tres Leches",
        photo: "https://cdn.kiwilimon.com/recetaimagen/29422/th5-320x320-30161.jpg",
        review: "Comentarios de la receta"
    },
    {
        id: "9",
        title: "Churros",
        photo: "https://www.cocina-ecuatoriana.com/base/stock/Recipe/3-image/3-image_web.jpg",
        review: "Comentarios de la receta"
    },
    {
        id: "10",
        title: "Pastel de Naranja con Crema Inglesa",
        photo: "https://cdn.kiwilimon.com/recetaimagen/15126/th5-320x320-7347.jpg",
        review: "Comentarios de la receta"
    }
]





function Item(props) {
    return (
        <TouchableOpacity onPress={() => props.navigation.navigate('Descripción Receta',
            {
                titulo: props.item.titulo
            })} style={styles.item}>
            <Text style={styles.title} >{props.item.titulo}</Text>
            <ImageBackground style={styles.image} source={{ uri: props.item.img }}>
                <View style={{ flex: 6 }}></View>
                <View style={{ flex: 3, alignItems: 'flex-end', padding: 5 }}>
                    <IconButton icon="comment" color={Colors.white} size={35} style={styles.review}
                        onPress={() => props.navigation.navigate('Reseñas')} />
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
}
export default function Recipes({ navigation }) {
    const db = firebase.firestore();
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const synch = () => {
        let array = [];
        db.collection('recetas').get()
            .then((snapshot) => {
                snapshot.forEach((doc) => {
                    array.push(doc.data());
                })
                setData(array)

                console.log(array)
            })
            .catch((err) => {
                console.log('Error getting documents', err);
            }).finally(() => {
                setLoading(false)
            });
    }
    useEffect(() => {
        let isMounted = true;

        synch();

        return () => { isMounted = false };
    }, [])

    return (
        <View style={styles.container}>
            {isLoading ? (<ActivityIndicator />)
                : (
                    <>
                        <Search />
                        <View style={styles.content}>
                            <SafeAreaView>
                                <FlatList
                                    data={data}
                                    renderItem={({ item }) => <Item item={item} navigation={navigation} />}

                                />
                            </SafeAreaView>
                        </View>
                    </>
                )
            }

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        padding: 20
    },
    item: {
        paddingBottom: 15
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    image: {
        justifyContent: "center",
        width: '100%',
        height: 200
    },
    review: {
        backgroundColor: '#FC5B27'
    }
})