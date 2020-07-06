import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import Menu from './menu';

export default function Category(props){
    return(
        <View style={styles.container}>
            <View style={styles.body}>
                <TouchableOpacity>
                    <Text>Aquí van las categorías</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.menu}>
                <Menu/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1  
    },
    body: {
        flex: 8,
        padding: 20
    },
    menu:{
        flex: 1
    }
})