import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements'
import firebase from "../firebase/firebase";
import "firebase/firestore";
import { lessOrEq } from 'react-native-reanimated';
export default function categorydata({ navigation }) {
    const category = firebase.firestore().collection('categoria');

    let setSf = category.doc('rfacloni@unib.edu.ec').set({
        password: '12456'
    });

    const [data, setData] = useState([]);
    const synch = () => {
        let a = [];
        category.get()
            .then((snapshot) => {
                snapshot.forEach((doc) => {
                    a.push(doc.data());
                })
                setData(a)
            })
            .catch((err) => {
                console.log('Error getting documents', err);
            });
    }
    const oneDocument = () => {
        let a = [];
        category.doc('rfacloni@unib.edu.ec').get()
            .then((snapshot) => {
                console.log(snapshot.data().password);
            }
            )
            .catch((err) => {
                console.log('Error getting documents', err);
            });
    }
    useEffect(() => {
        let isMounted = true;
        synch();
        oneDocument();
        return () => { isMounted = false };
    }, [])


    return (
        <View>
            <Text style={{ textAlign: 'center', color: 'blue', marginTop: 300 }}>
                Welcome to Tab B screen !
            </Text>
            <Button
                onPress={() => navigation.navigate('Tab', {}, navigation.navigate('TabA Details',
                    {
                        papitas: 'from papitas'
                    }))}
                title="Learn More"
            />
            {
                data.map((item, i) => (
                    <ListItem
                        key={i}
                        title={item.name}
                        leftIcon={{ name: 'av-timer' }}
                        bottomDivider
                        chevron
                    />
                ))
            }
            <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Text>{item.description}, {item.name}</Text>
                )}
            />


        </View>
    );
}
