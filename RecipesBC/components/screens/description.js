import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, ImageBackground, ActivityIndicator } from 'react-native';
import { IconButton, Colors } from 'react-native-paper';
import firebase from "../lib/firebase";
import "firebase/firestore"
import { useRoute } from '@react-navigation/native';
let photo = { uri: 'https://www.cocina-ecuatoriana.com/base/stock/Recipe/3-image/3-image_web.jpg' };
let Ingredientes = [

    '2 ½ tazas de almidón de yuca',

    '4 tazas de queso rallado',

    '1 cucharadita de polvo de hornear',

    'Una pizca de sal',

    '4 onzas de mantequilla'
]
let description = '';
let receta = new Object();
receta.ingredientes = Ingredientes;
receta.preparacion = description;

export default function Description({ navigation }) {
    const db = firebase.firestore();
    const [one, setOne] = useState();
    const [isLoading, setLoading] = useState(true);
    let route = useRoute();
    let titulo = route.params.titulo;
    console.log('' + titulo)
    //leer Documentos
    const oneDocument = () => {
        db.collection('recetas').where('titulo', '==', titulo).get()
            .then((snapshot) => {
                snapshot.forEach((doc) => {
                    setOne(doc.data())
                })

            })
            .catch((err) => {
                console.log('Error getting documents', err);
            }).finally(() => {
                setLoading(false)
            });
    }
    if (one != undefined) {
        Ingredientes = one.ingredientes;
        description = one.preparacion
        photo = one.img
    }
    useEffect(() => {
        let isMounted = true;

        oneDocument();

        return () => { isMounted = false };
    }, [])

    function Item(props) {
        return (
            <View style={styles.ItemCont}>
                <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: '#FC5B27', marginRight: 5 }} />
                <Text style={styles.descrition}>{props.item}</Text>
            </View>
        )
    }

    function HeaderComponent() {
        return (
            <Text style={styles.title}>Ingredientes:</Text>
        )
    }

    function FooterComponent() {
        return (
            <>
                <Text style={styles.title}>Preparación:</Text>
                <Text style={styles.descriptionPre}>{description}</Text>
            </>
        )
    }

    return (

        <View style={styles.container}>
            {isLoading ? (<ActivityIndicator />)
                : (
                    <>
                        <View style={styles.ContentImage}>
                            <ImageBackground style={styles.image} source={photo}>
                                <View style={{ flex: 6 }}></View>
                                <View style={{ flex: 3, alignItems: 'flex-end', padding: 5 }}>
                                    <IconButton icon="comment" color={Colors.white} size={35} style={styles.review}
                                        onPress={() => navigation.navigate('Reseñas')} />
                                </View>
                            </ImageBackground>
                        </View>
                        <View style={styles.content}>
                            <FlatList
                                ListHeaderComponent={
                                    <HeaderComponent />
                                }
                                ListFooterComponent={
                                    <FooterComponent />
                                }

                                disableVirtualization
                                data={Ingredientes}
                                renderItem={({ item }) => <Item item={item} />}


                            />
                        </View>
                    </>
                )
            }

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    ItemCont: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: 15,
        justifyContent: 'flex-start',
        paddingBottom: 15,
    },
    ContentImage: {
        flex: 3.7,

    },
    content: {
        flex: 5,
        paddingLeft: 15,
        paddingRight: 15
    },
    item: {
        paddingBottom: 15
    },
    title: {
        fontSize: 22,
        marginLeft: 15,
        marginTop: 5,
        fontWeight: 'bold',
        paddingBottom: 10
    },
    description: {
        fontSize: 15,
        marginLeft: 15,
        marginTop: -3

    },
    descriptionPre: {
        fontSize: 15,
        marginLeft: 12,
        paddingBottom: 15
    },
    image: {
        justifyContent: "center",
        width: '100%',
        height: '96.5%'
    },
    review: {
        backgroundColor: '#FC5B27'
    }
})