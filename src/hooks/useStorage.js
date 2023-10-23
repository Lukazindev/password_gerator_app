import AsyncStorage from "@react-native-async-storage/async-storage";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

const useStorage = () => {
    // Buscar os itens salvos
    const getItem = async (key) => {
        try{
            const passwords = await AsyncStorage.getItem(key);
            return JSON.parse(passwords) || [];
        }catch(error){
            console.log("ERRO AO BUSCAR", error)
            return [];
        }
    }

    //Salvar um item no storage
    const saveItem = async (key, value) => {
        try{
          let passwords = await getItem(key);

          passwords.push(value)

          await AsyncStorage.setItem(key, JSON.stringify(passwords))

        }catch(error){
            console.log("ERRO AO SALVAR", error)
        }
    }

    //remover algo do storage
    const removeItem = async (key, item) => {
        try{
          let passwords = await getItem(key); 

          let myPasswords = passwords.filter( (password) => {
            return (password !== item)
          })

          await AsyncStorage.setItem(key, JSON.stringify(myPasswords))
          return myPasswords;
          
        }catch(error){
            console.log("ERRO AO DELETAR", error)
        }
    }

    return {
        getItem,
        saveItem,
        removeItem,
    }

}

export default useStorage;