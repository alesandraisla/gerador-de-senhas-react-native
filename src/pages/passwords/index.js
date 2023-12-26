import {View, Text, StyleSheet, FlatList} from 'react-native'
import { SafeAreaView } from 'react-native'
import { useState, useEffect } from 'react'
import {useIsFocused} from '@react-navigation/native'
import useStorage from '../../hooks/useStorage'
import { PasswordItem } from './components/passwordItem'


export function Passwords() {
    const [listPasswords, setListPasswords] = useState([])
    const focused = useIsFocused()
    const { getItem, removeItem } = useStorage()

    //efeito colateral
    useEffect(() => {
        async function loadPasswords() {
            const passwords = await getItem("@pass")
            console.log(passwords)
            setListPasswords(passwords);
        }

        loadPasswords()
    }, [focused])

    async function handleDeletePassword(item) {
       const password = await removeItem("@pass", item)
       setListPasswords(password)
    }

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
                    renderItem={({item}) => <PasswordItem data={item} removePassword={() => handleDeletePassword(item)} />}
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