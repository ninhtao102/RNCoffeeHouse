import React from 'react'
import { Dimensions, Image, ImageBackground, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default function Login({navigation}) {

    return (
        <View>
            <ImageBackground
            source={{ uri: "https://websitecuckukvn.misacdn.net/wp-content/uploads/2019/09/foody-mobile-960x600-the-coffee-h-761-636304658264606242-1568800909178126962452-crop-1568800918203296009047.jpg" }} 
            style={{width: WIDTH, height: WIDTH*0.6}}
            resizeMode="cover" 
            >
                <View style={styles.content}>
                    <Text style={styles.title}>Chào mừng bạn đến với</Text>
                    <Image
                        style={styles.logo}
                        source={require('../images/logo_the_coffee_house.png')}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Nhập số điện thoại"
                        keyboardType="numeric"
                    />
                    <TouchableOpacity
                    style={[styles.button, {backgroundColor: '#CCC',}]}
                    >
                        <Text style={styles.txtButton}>Đăng nhập</Text>
                    </TouchableOpacity>
                    
                    <View style={styles.bar}>
                        <View style={styles.line}></View>
                        <Text style={styles.txtBar}>HOẶC</Text>
                        <View style={styles.line}></View>
                    </View>

                    <TouchableOpacity
                    style={[styles.button, {backgroundColor: '#000',}]}
                    >
                        <Ionicons name="logo-apple" size={16} style={styles.icon} color="#FFF"  />
                        <Text style={styles.txtButton}>Tiếp tục bằng Apple</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                    style={[styles.button, {backgroundColor: '#0077b6',}]}
                    >
                        <Ionicons name="logo-facebook" size={16} style={styles.icon} color="#FFF"  />
                        <Text style={styles.txtButton}>Tiếp tục bằng Facebook</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                    style={[styles.button, {borderWidth: 1,}]}
                    >
                        <Ionicons name="logo-google" size={16} style={styles.icon} color="#000"  />
                        <Text style={[styles.txtButton, {color: '#000'}]}>Tiếp tục bằng Google</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity
                    style={[styles.button]}
                    >
                        <Text style={[styles.txtButton, {color: '#000'}]}>Tiếng Việt</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        marginTop: HEIGHT*0.17,
        height: HEIGHT,
        backgroundColor: '#FFF', 
        borderTopLeftRadius: 16, 
        borderTopRightRadius: 16,
        shadowColor: "#EEE",
        shadowOpacity: 1,
        elevation: 24,
        zIndex: 2
    },
    title: {
        marginTop: 36,
        marginVertical: 16,
        color: '#000',
        textAlign: 'center'
    },
    logo: {
        marginBottom: 36,
        width: WIDTH*0.6,
        height: WIDTH*0.05,
        alignSelf: 'center'
    },
    input: {
        marginVertical: 8,
        marginHorizontal: 24,
        paddingLeft: 16,
        borderWidth: 1,
        borderColor: '#CCC',
        borderRadius: 8,
    },
    button: {
        marginTop: 8,
        marginHorizontal: 24,
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 8,
    },
    icon: {
        marginRight: 8,
    },
    txtButton: {
        color: '#FFF',
        textAlign: 'center'
    },
    bar: {
        marginVertical: 16,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    txtBar: {
        margin: 8,
        fontWeight: 'bold',
    },
    line: {
        backgroundColor: '#CCC',
        width: WIDTH*0.38,
        height: 1,
        alignSelf: 'center',
    }
})
