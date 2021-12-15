import React from 'react'
import { Dimensions, View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useSelector, useDispatch } from "react-redux"

const WIDTH = Dimensions.get('window').width;

export function ItemProduct({item, index}) {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const moveToDetail = (item) => () => navigation.navigate('ProductDetail', { data: item })
    const onAddCart = () => {
        dispatch({ type: "ADD_TO_CART", data: { ...data, quantity: 1 } }); // gui action toi reducer
    }
    return(
        <TouchableOpacity key={index} style={styles.itemBox} onPress={moveToDetail(item)}>
            <Image source={{uri: item?.images?.[0]}} style={styles.itemImage} />
            <View style={styles.itemContent}>
                <View>
                    <Text numberOfLines={1} style={styles.itemTitle}>{item?.name}</Text>
                    <Text numberOfLines={2} style={styles.itemIntro}>{item?.description}</Text>
                    <Text style={styles.itemPrice}>{item?.base_price}đ</Text>
                </View>
                <TouchableOpacity
                onPress={onAddCart}
                >
                    <Text style={styles.addCart}>+</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

export default function ListItem({data, title}) {
    return (
        <View style={styles.listBox}>
            <Text style={styles.listTitle}>{title}</Text>
            {
                data.map((item, index) => {
                    return(
                        <ItemProduct item={item} index={index} key={index} />
                    )
                })
            }
        </View>
    )
}
const styles = StyleSheet.create({
    listBox: {
        marginBottom:15,
    },
    listTitle: {
        fontSize:20,
        fontWeight:'900',
        marginBottom:5
    },
    itemBox:{
        flexDirection:'row',
        marginTop:10,
        backgroundColor:"#fff",
        padding:15,
        borderRadius:10
    },
    itemContent:{
        flex:2,
        marginLeft:15,
        justifyContent:'space-between',
    },
    itemImage: {
        width: WIDTH*0.3,
        height: WIDTH*0.3,
        borderRadius:5
    },
    itemTitle: {
        color: '#000',
        fontSize:15,
        fontWeight:"900",
        textTransform:'capitalize'
    },
    itemIntro: {
        color: '#000',
        fontSize:14,
    },
    itemPrice: {
        color: '#000',
        fontSize:16
    },
    addCart: {
        width: 27,
        color: '#FFF',
        fontSize: 20,
        alignSelf: 'flex-end',
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: '#e9d8a6',
        borderRadius: 16,
    }
});