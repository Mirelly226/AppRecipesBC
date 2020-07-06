import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

export default function Menu(props) {
    return(
        <View style={styles.menu}>
            <TouchableOpacity style={[styles.icons, {borderTopColor: '#FC5B27', borderTopWidth: 3}]} onPress={()=>props.navigation.navigate('Home')}>
                <FontAwesome name="home" size={35} color="#FC5B27" />
                <Text style={styles.text}>Inicio</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.icons} onPress={()=>props.navigation.navigate('Categorías')}>
                <FontAwesome name="list-ul" size={35} color="gray" />
                <Text style={styles.text}>Categorías</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.icons} onPress={() => props.navigation.navigate('Cuenta')}>
                <MaterialIcons name="account-circle" size={35} color="gray" />
                <Text style={styles.text}>Cuenta</Text>
            </TouchableOpacity>
        </View>
    )
} 
const styles = StyleSheet.create({
    menu: {
      flexDirection: 'row',
      flex: 1,
      backgroundColor: 'white',
    },
    icons: {
        flex: 1,
        padding: 5,
        alignItems: 'center'
    },
    text: {
        fontSize: 12,
        fontWeight: '700',
        color: 'gray'
    }
})