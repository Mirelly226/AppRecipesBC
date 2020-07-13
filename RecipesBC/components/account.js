import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Account(props) {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text>Aquí agregar el contenido</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
})