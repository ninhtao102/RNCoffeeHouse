import React from 'react'
import { View,StyleSheet, Text,Image, TouchableOpacity } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native';

export function ItemProduct({item, index}) {
    const navigation = useNavigation();
    const moveToDetail = (item) => () => navigation.navigate('ProductDetail', { data: item })
    return(
        <TouchableOpacity key={index} style={styles.itemBox} onPress={moveToDetail(item)}>
            <View style={styles.itemContent}>
                <Text numberOfLines={1} style={styles.itemTitle}>{item?.name}</Text>
                <Text numberOfLines={2} style={styles.itemIntro}>{item?.description}</Text>
                <Text style={styles.itemPrice}>{item?.base_price}đ</Text>
            </View>
            <Image source={{uri: item?.images?.[0]}} style={styles.itemImage} />
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
        marginBottom:15
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
        marginRight:15,
        justifyContent:'space-between',
    },
    itemImage: {
        width:90,
        height:90,
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
    }
});