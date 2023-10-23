import { View, Text, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import * as Clipboead from 'expo-clipboard';
import useStorage, {} from '../../hooks/useStorage';
import { useState } from 'react';

export function ModalPassword({ password, handleClose }) {
    const { saveItem } = useStorage();

   async function handleCopyPassword() {
     await Clipboead.setStringAsync(password)
     await saveItem("@pass", password)

     alert("Senha salva com sucesso!")
     handleClose();
    }   

  return (
    <View style={styles.container}>
        <View style={styles.content}>
        <Text style={styles.title}>Senha Gerada</Text>

        <Pressable style={styles.innerPassword} onLongPress={handleCopyPassword}>
            <Text style={styles.text}>
                {password}
            </Text>
        </Pressable>

        <View style={styles.buttomArea}>
            <TouchableOpacity style={styles.buttom} onPress={handleClose}>
                <Text style={styles.buttomText}>Voltar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.buttom, styles.buttomSave]} onPress={handleCopyPassword}>
                <Text style={styles.buttomSaveText}>Salvar Senha</Text>
            </TouchableOpacity>
        </View>

        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(24, 24, 24, 0.6)",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    content: {
        backgroundColor: "#FFF",
        width: "85%",
        paddingTop: 24,
        paddingBottom: 24,
        justifyContent: "center",
        borderRadius: 8,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#000",
        marginBottom: 24,
    },
    innerPassword: {
        backgroundColor: "#0e0e0e",
        width: "90%",
        padding: 14,
        borderRadius: 8,
    },
    text: {
        color: "#FFF",
        textAlign: "center",
    },
    buttomArea: {
        flexDirection: "row",
        marginTop: 8,
        alignItems: "center",
        justifyContent: "space-between",
    },
    buttom: {
        flex: 1,
        alignItems: "center",
        marginTop:14,
        marginBottom: 14,
        padding: 8,
    },
    buttomSave: {
        backgroundColor: "#392DE9",
        borderRadius: 8,
    },
    buttomSaveText: {
        color: "#FFF",
        fontWeight: "bold",
    },
});