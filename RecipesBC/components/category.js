import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, FlatList, ImageBackground, Image } from 'react-native';
import Search from './searchbar';

const DataCategories = [
    {
        id: "1",
        title: "Panadería",
        photo: "https://www.cocina-ecuatoriana.com/base/stock/Recipe/3-image/3-image_web.jpg",
        list: "lista de recetas"
    },
    {
        id: "2",
        title: "Pastelería",
        photo: "https://cdn.kiwilimon.com/recetaimagen/29025/th5-320x320-29840.jpg",
        list: "Lista de recetas"
    }
]

function Item(props) {
    return (
        <TouchableOpacity style={styles.item}>
            <ImageBackground style={styles.image} source={{ uri: props.item.photo }}/>
            <Text style={styles.title} >{props.item.title}</Text>
        </TouchableOpacity>
    )
}

export default function Category(props) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.logo} source={require('../assets/Logo.png')}/>
            </View>
            <Search/>
            <View style={styles.content}>
                <SafeAreaView>
                    <FlatList
                        data={DataCategories}
                        renderItem={({ item }) => <Item item={item} />}
                        keyExtractor={item => item.id}
                    />
                </SafeAreaView>
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
    logo: {
        justifyContent: "center",
        width: '50%',
        height: '100%'
    },
    content: {
        flex: 7,
        padding: 20
    },
    item: {
        paddingBottom: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        position: 'absolute'
    },
    image: {
        justifyContent: "center",
        width: '100%',
        height: 200,
        opacity: 0.3,
        position: 'relative'
    }
})