import {View, Text, StyleSheet, FlatList} from 'react-native'
import { SafeAreaView } from 'react-native'
import { useState, useEffect } from 'react'
import {useIsFocused} from '@react-navigation/native'
import useStorage from '../../hooks/useStorage'


export function Passwords() {
    const [listPasswords, setListPasswords] = useState([])
    const focused = useIsFocused()
    const { getItem } = useStorage()

    //efeito colateral
    useEffect(() => {
        async function loadPasswords() {
            const passwords = await getItem("@pass")
            console.log(passwords)
            setListPasswords(passwords);
        }

        loadPasswords()
    }, [focused])

    return(
        <SafeAreaView style={{flex: 1, }}>
            <View style={syles.header}>
            <Text style={syles.title}> Minhas senhas </Text>
            </View>
            <View style={syles.content}>
                <FlatList
                    style={{ flex: 1, paddingTop: 14}}
                    data={listPasswords}
                    keyExtractor={(item) => String(item)}
                    renderItem={({item}) => <Text>{item}</Text>}
                />
            </View>
        </SafeAreaView>
    )
}

const syles = StyleSheet.create({
    header: {
        backgroundColor: '#51194e',
        paddingTop: 58,
        paddingBottom: 14,
        paddingLeft: 14,
        paddingRight: 14,
    },

    title: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    },

    content: {
        flex: 1,
        paddingLeft: 14,
        paddingRight: 14,
    }

})