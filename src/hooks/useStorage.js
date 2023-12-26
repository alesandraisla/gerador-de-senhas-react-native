import AsyncStorage from '@react-native-async-storage/async-storage'

const useStorage = () =>  {

    // buscar os itens salvdos
    const getItem = async (key) => {
        try {
            const passwords = await AsyncStorage.getItem(key)
            return JSON.parse(passwords) || [];
        } catch(error) {
            console.log('Erro ao buscar', error)
            return [];
        }
    }

    // Salvar um item no storage
    const saveItem = async (key, value) =>  {
        try {
            let passwords = await getItem(key)

            passwords.push(value)

            await AsyncStorage.setItem(key, JSON.stringify(passwords))

        } catch(error) {
            console.log('Error ao salvar', error)
        }

    }

    // Remover algo do storage 
    const removeItem = async (key, item) => {
        try{
            let passwords = await getItem(key)

            let myPassword = passwords.filter((password) => {
                return (password)!== item
            })

            await AsyncStorage.setItem(key, JSON.stringify(myPassword))
            return myPassword;

        }catch(error) {
            console.log('Erro ao deletar', error)
        }

    }

    return {
        getItem,
        saveItem,
        removeItem
    }
}

export default useStorage;