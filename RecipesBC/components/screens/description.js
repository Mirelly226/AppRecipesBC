import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, FlatList, ImageBackground} from 'react-native';
import { IconButton, Colors } from 'react-native-paper';


const photo={uri:'https://www.cocina-ecuatoriana.com/base/stock/Recipe/3-image/3-image_web.jpg'};
       /*  reviews: "Comentarios de la receta",
        ingredientes:"Harina",
        preparacion: "Combine la harina o almidón de yuca, el queso, el polvo de hornear y la sal en el procesador de alimentos, mezcle bien",  
 */

const Ingredientes=[
    {
        
        id:'1',
        n:'harina'
    },
    {
        id:'2',
        n:'azul'
    },
    {
        id:'3',
        n:'pc'
    },
    {
        id:'4',
        n:'sad'
    },
    {
        id:'5',
        n:'sdsd'
    },
]
function Item (props){
    return(
        <View>
        <Text>{props.item.n}</Text>
    </View>
    )
   
}


export default function Description({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.ContentImage}>
                <ImageBackground style={styles.image} source={ photo}>
                    <View style={{flex: 6}}></View>
                    <View style={{flex: 3, alignItems: 'flex-end', padding: 5}}>    
                        <IconButton icon="comment" color={Colors.white} size={35} style={styles.review}
                            onPress={() => navigation.navigate('Reseñas')}/>             
                    </View> 
                </ImageBackground> 
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>Ingredientes:</Text>
                <SafeAreaView>
                    <FlatList
                        data={Ingredientes}
                        renderItem={({ item }) => <Item item={item} />}
                        keyExtractor={item => item.id}
                    />
                </SafeAreaView>
                <Text style={styles.title}>Preparación:</Text>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
        
    },
    ContentImage:{
        flex: 4,

    },
    content: {
        flex: 6,
        padding: 20
    },
    item: {
        paddingBottom: 15
    },
    title: {
        fontSize: 25,
        marginLeft:10, 
        marginTop:5
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