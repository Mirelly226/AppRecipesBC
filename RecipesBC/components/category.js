import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, FlatList, ImageBackground, Image, Button } from 'react-native';
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

        <TouchableOpacity onPress={() => props.navigation.navigate('Recetas por Categoría')} style={styles.item}>
            <ImageBackground style={styles.image} source={{ uri: props.item.photo }} />
            <Text style={styles.title} >{props.item.title}</Text>
        </TouchableOpacity>
    )
}


export default function Category({ navigation }) {
    return (
        <View style={styles.container}>
            <Search />
            <View style={styles.content}>
                <SafeAreaView>
                    <FlatList
                        data={DataCategories}
                        renderItem={({ item }) => <Item item={item} navigation={navigation} />}
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
    content: {
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
        position: 'absolute',
        color: '#FC5B27'
    },
    image: {
        justifyContent: "center",
        width: '100%',
        height: 200,
        opacity: 0.3,
        position: 'relative'
    }
})

