import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, FlatList, ImageBackground, Image } from 'react-native';
import { IconButton, Colors } from 'react-native-paper';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import Category from './category';
import Account from './account';
import Search from './searchbar';

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
        <TouchableOpacity style={styles.item}>
            <Text style={styles.title} >{props.item.title}</Text>
            <ImageBackground style={styles.image} source={{ uri: props.item.photo }}>
            <View style={{flex: 6}}></View>
            <View style={{flex: 3, alignItems: 'flex-end', padding: 5}}>
                <IconButton icon="comment" color={Colors.white} size={35} style={styles.review}
                onPress={() => props.navigation.navigate('Cuenta')}/>
            </View> 
            </ImageBackground>                
        </TouchableOpacity>
    )
}
function HomeScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.logo} source={require('../assets/Logo.png')}/>
            </View>
            <Search/>
            <View style={styles.content}>
                <SafeAreaView>
                    <FlatList
                        data={DataRecipes}
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

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                let iconName;
    
                if (route.name === 'Inicio') {
                    iconName = focused
                    ? 'home'
                    : 'home';
                } else if (route.name === 'Categorías') {
                    iconName = focused ? 'list-ul' : 'list-ul';
                } else if (route.name === 'Cuenta') {
                    iconName = focused ? 'user' : 'user';
                }
                return <FontAwesome name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="Inicio" component={HomeScreen} />
            <Tab.Screen name="Categorías" component={Category} />
            <Tab.Screen name="Cuenta" component={Account} />
        </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App
/* const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Recetas B&C" component={HomeScreen} />
                <Stack.Screen name="Categorías" component={Category} />
                <Stack.Screen name="Cuenta" component={Account} />
            </Stack.Navigator>
        </NavigationContainer>
    );
} */
