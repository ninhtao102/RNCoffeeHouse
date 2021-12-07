import React from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

export function StoreItem({item, index}) {
    const navigation = useNavigation();
    const moveToDetail = (item) => () => navigation.navigate('StoreDetail', { data: item })
    return(
        <TouchableOpacity key={index} style={styles.itemBox} onPress={moveToDetail(item)}>
            <Image source={{uri: item?.images}} style={styles.itemImage} />
            <View style={styles.itemContent}>
                <Text numberOfLines={1} style={styles.itemTitle}>{item?.name}</Text>
                <Text numberOfLines={2} style={styles.itemIntro}>{item?.full_address}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default function ListStores({data, title}) {
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
})
