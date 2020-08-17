import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, CheckBox, Button } from 'react-native-elements';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { ListItem } from 'react-native-elements'
import firebase from "../lib/firebase";
import "firebase/firestore"

export default function LoginScreen({navigation}) {
    
    const [password, setPassword] = useState('')
    const [correo, setCorreo] = useState('')
    const [check, setCheck] = useState(false)
    const [setOne] = useState();
    
    const oneDocument = () => {

        firebase.firestore().collection('users').where('email', '==', correo).get()
            .then((snapshot) => {
                if(snapshot.size==0){
                    Alert.alert('Verifique que el usuario y contraseña sean correctos')

                }
                snapshot.forEach((doc) => {
                   let item=doc.data()
                   if(item.password==password){
                    navigation.navigate('Inicio')
                   }else{
                    console.log("error");
                   }
                })
            }
            )
            .catch((err) => {
                console.log('Error getting documents', err);
            });
        firebase.firestore().collection('users').doc('1').get()
            .then(snapshot => {
                setOne(snapshot.data())
            })
            .catch((err) => {
                console.log('Error getting documents', err);
            })
    }

    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <Text>EMAIL/USUARIO:</Text>
                <Input
                    title='Correo Electrónico'
                    placeholder='Ingrese su email o usuario'
                    onChangeText={changeCorreo => setCorreo(changeCorreo)}
                    rightIcon={
                        <Icon
                            name='envelope-o'
                            size={25}
                            color='black'
                        />
                    }
                />
                <Text>CONTRASEÑA:</Text>
                <Input
                    title='Contraseña'
                    placeholder='Ingrese su contraseña'
                    secureTextEntry={true}
                    onChangeText={changePass => setPassword(changePass)}
                    rightIcon={
                        <Icon
                            name='key'
                            size={25}
                            color='black'
                        />
                    }
                />
                <View style={styles.boton}>
                    <Text style={styles.forgot}>¿Olvidaste tu contraseña? </Text>
                    <Button
                        title="Iniciar Sesión"
                        onPress={oneDocument}
                        buttonStyle={{
                            width: 200.0,
                            justifyContent: 'center',
                            alignItems: 'center',
                            margin: 30,
                            backgroundColor: '#FC5B27'
                        }}
                    />
                    
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Registro')}

                    >

                        <Text style={styles.forgot} >REGISTRATE</Text>
                    </TouchableOpacity>

                </View>

            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: '10%',
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: "bold"
    },
    forgot: {

        fontSize: 17,
        color: 'black',
    },

    body: {
        flex: 2,
        margin: 30,
        padding: 10,
        alignContent: 'space-around',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    boton: {
        justifyContent: 'center',
        alignItems: 'center'
    },

});

LoginScreen.navigationOptions = {
    title: 'Login'
}
