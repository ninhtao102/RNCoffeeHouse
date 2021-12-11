import React from 'react'
import { Dimensions, Image, View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

const WIDTH = Dimensions.get('window').width

export default function SelectHeader() {
    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.category}>
                <Image source={require('../images/application.png')} style={styles.image} />
            </TouchableOpacity>
            <View style={styles.text_input}>
                <Ionicons name="search-outline" size={18} color="#000" style={styles.search_icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Tìm kiếm"
                />
            </View>
            <TouchableOpacity style={styles.button}>
                <Ionicons name="heart-outline" size={24} color="#000" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 16,
        backgroundColor: '#FFF', 
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    category: {
        marginVertical: 12,
        padding: 6,
        backgroundColor: '#e9d8a6',
        borderRadius: 32
    },
    image: {
        width: 12,
        height: 12,
    },
    text_input: {
        marginVertical: 8,
        paddingHorizontal: 8,
        height: 32,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#EEE',
        borderRadius: 16
    },
    search_icon: {
        alignSelf: 'center',
    },
    input: {
        width: WIDTH*0.6,
        height: 36,
    },
    tittle: {
        marginHorizontal: 8,
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
    },
    icon: {
        marginVertical: 2,
    },
    button: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
})
