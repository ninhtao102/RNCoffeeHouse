import React from 'react'
import { Dimensions, Image, View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

const WIDTH = Dimensions.get('window').width

export default function SelectHeader() {
    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.btnMap}>
                <Image source={require('../images/application.png')} style={styles.image} />
                <Text>Danh mục</Text>
                <Ionicons name="chevron-up-outline" size={20} color="#000" style={styles.iconMap} />
            </TouchableOpacity>
            <View>
                <Ionicons name="search-outline" size={20} color="#000" style={styles.icon} />
                {/* <TextInput
                    style={styles.input}
                    placeholder="Tìm kiếm"
                /> */}
            </View>
            <TouchableOpacity style={styles.btnMap}>
                <Ionicons name="heart-outline" size={20} color="#000" style={styles.iconMap} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#e9d8a6', 
        flexDirection: 'row',
    },
    image: {
        width: 16,
        height: 16,
    },
    input: {
        paddingLeft: 42,
        marginBottom: 16,
        marginHorizontal: 16,
        width: WIDTH*0.7,
        height: 40,
        backgroundColor: '#FFF',
        borderRadius: 10,
    },
    icon: {
        top: 30,
        left: 30,
        zIndex: 1,
    },
    btnMap: {
        padding: 16,
        flexDirection: 'row',
        top: 15,
        left: -15,
    },
    txtMap: {
        margin: 2,
        paddingLeft: 5,
        color: '#000',
        fontWeight: 'bold',
    },
})
