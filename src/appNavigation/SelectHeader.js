import React from 'react'
import { Dimensions, Image, View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

const WIDTH = Dimensions.get('window').width

export default function SelectHeader() {
    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.name}>
                <Image source={require('../images/application.png')} style={styles.image} />
                <Text style={styles.tittle}>Danh mục</Text>
                <Ionicons name="chevron-up-outline" size={20} color="#000" style={styles.icon} />
            </TouchableOpacity>
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={styles.button}>
                    <Ionicons name="search-outline" size={24} color="#000" />
                </TouchableOpacity>
                {/* <Ionicons name="search-outline" size={24} color="#000" /> */}
                {/* <TextInput
                    style={styles.input}
                    placeholder="Tìm kiếm"
                /> */}
                <TouchableOpacity style={styles.button}>
                    <Ionicons name="heart-outline" size={24} color="#000" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 8,
        backgroundColor: '#FFF', 
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    name: {
        paddingVertical: 12,
        paddingHorizontal: 8,
        flexDirection: 'row',
    },
    image: {
        marginVertical: 4,
        width: 16,
        height: 16,
    },
    tittle: {
        marginHorizontal: 8,
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
        // textAlignVertical: 'center'
    },
    icon: {
        marginVertical: 2,
    },
    button: {
        paddingHorizontal: 8,
        paddingVertical: 12,
        flexDirection: 'row',
    },
})
