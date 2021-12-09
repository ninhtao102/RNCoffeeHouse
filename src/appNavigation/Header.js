import React, { useState, useEffect } from 'react'
import { Dimensions, Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import moment from 'moment'
import Moment from 'react-moment'

const WIDTH = Dimensions.get('window').width
// var hr = (new Date()).getHours();
    // console.log(hr)
    // var noon = ( 5 <= hr <= 18 ) ? 
    // {
    //     <View style={{flexDirection: 'row'}} >
    //             <Image source={require('../images/sun_and_cloud.png')}  style={styles.session_icon} />
    //             <Text style={styles.message}>Good morning, Ninh</Text>
    //         </View>
    // }
    // : "Good night"
    // console.log(noon)


    var hr = (new Date()).getHours();
    console.log(hr)
    // var noon = ( 5 <= hr <= 18 ) ? "Good day" : "Good night"
    // console.log(noon)
    // {
    //     return (
    //         day = () => {
    //             return (
    //                 <View style={{flexDirection: 'row'}} >
    //                     <Image source={require('../images/sun_and_cloud.png')}  style={styles.session_icon} />
    //                     <Text style={styles.message}>Good day</Text>
    //                 </View>
    //             )
    //         }
    //     ) 
    // } : 
    // {
    //     return ( 
    //         day = () => {
    //             return (
    //                 <View style={{flexDirection: 'row'}} >
    //                     <Image source={require('../images/moon_and_cloud.png')}  style={styles.session_icon} />
    //                     <Text style={styles.message}>Good night</Text>
    //                 </View>
    //             )
    //         }
    //     ) 
    // }

export default function Header() {

    return (
        <View style={styles.header}>
            <View style={{flexDirection: 'row'}} >
                <Image source={require('../images/sun_and_cloud.png')}  style={styles.session_icon} />
                <Text style={styles.message}>Good morning, Ninh</Text>
            </View>
            <View style={{flexDirection: 'row'}} >
                <TouchableOpacity style={styles.button} >
                    <Ionicons name="cash-outline" size={20} color="#eeaa68" />
                    <Text style={styles.voucher_count}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} >
                    <Ionicons name="notifications-outline" size={20} color="#000" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: { 
        paddingHorizontal: 16,
        height: 60, 
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#e9d8a6' 
    },
    session_icon: {
        marginVertical: 12,
        width: WIDTH*0.08,
        height: WIDTH*0.08,
    },
    message: {
        marginLeft: 16,
        color: '#000',
        fontWeight: 'bold',
        textAlignVertical: 'center'
    },
    button: {
        marginHorizontal: 4,
        padding: 8,
        flexDirection: 'row',
        backgroundColor: '#FFF',
        alignSelf: 'center',
        borderRadius: 24,
    },
    voucher_count: {
        marginLeft: 8,
        color: '#000'
    }
})
