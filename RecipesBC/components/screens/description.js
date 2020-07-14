import React from 'react'
import { View, Text, StyleSheet, FlatList, ImageBackground, ScrollView} from 'react-native';
import { IconButton, Colors } from 'react-native-paper';


const photo = { uri: 'https://www.cocina-ecuatoriana.com/base/stock/Recipe/3-image/3-image_web.jpg' };

const Ingredientes = [
    {

        id: '1',
        n: '2 ½ tazas de almidón de yuca'
    },
    {
        id: '2',
        n: '4 tazas de queso rallado'
    },
    {
        id: '3',
        n: '1 cucharadita de polvo de hornear'
    },
    {
        id: '4',
        n: 'Una pizca de sal'
    },
    {
        id: '5',
        n: '4 onzas de mantequilla'
    },
]
function Item(props) {
    return (
        <View style={styles.ItemCont}>
            <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: '#FC5B27', }} />
            <Text style={styles.description}>{props.item.n}</Text>
        </View>
    )
}


export default function Description({ navigation }) {
    return (
        <View style={styles.container}>
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
                    <Text style={styles.title}>Ingredientes:</Text>            
                        <FlatList
                            disableVirtualization
                            data={Ingredientes}
                            renderItem={({ item }) => <Item item={item} />}
                            keyExtractor={item => item.id}
                        />
                    <Text style={styles.title}>Preparación:</Text>
                    <Text style={styles.descriptionPre}>Dejámos reposar el agua al menos 5 horas sin moverla, hasta que todo el almidón de haya depositado en el fondo. Cuando el almidón se haya depositado en el fondo, retiramos el agua con un cazo de servir. Deja secar el almidón al menos 8 horas.</Text>
            </View>
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
        paddingBottom: 15
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
        height: '95%'
    },
    review: {
        backgroundColor: '#FC5B27'
    }
})