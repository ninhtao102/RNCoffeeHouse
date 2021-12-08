import React, { useState, useEffect } from 'react'
import { Dimensions, Image, View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import { useSelector, useDispatch } from "react-redux"
import Ionicons from 'react-native-vector-icons/Ionicons'

const WIDTH = Dimensions.get("window").width
const HEIGHT = Dimensions.get("window").height

export default function ProductDetail({navigation, route}) {

    const { data } = route.params;
    // const dispatch = useDispatch();

    const [priceDetail, setPriceDetail] = useState(data?.price)
    const [quantity, setQuantity] = useState(1)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        setTotal(priceDetail * quantity) 
    }, [quantity]);

    // const onAddCart = () => {
    //     dispatch({ type: "ADD_TO_CART", data: { ...data, quantity: quantity } });
    // }

    return (
        <View style={styles.container}>
            <ScrollView
            showsVerticalScrollIndicator={false}
            >
                <View style={styles.thumbnail}>
                    {/* <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        {
                            data?.images?.map((item, index) => {
                                return(
                                    <Image
                                        style={
                                            data?.images?.length === 1 ? styles.imageSingle : styles.image
                                        }
                                        key={index}
                                        source={{
                                        uri: item,
                                    }} />
                                )
                            })
                        }
                    </ScrollView> */}
                    <Image source={{ uri: data?.images[0] }} style={styles.imageSingle} />
                </View>
                <View style={{backgroundColor: '#FFF', padding: 16}} >
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View>
                            <Text 
                            style={styles.product_name}
                            numberOfLines={2}
                            ellipsizeMode= 'tail'
                            >{data?.name}</Text>
                            <Text style={styles.price}>{priceDetail}đ</Text>
                        </View>
                        <TouchableOpacity>
                            <Ionicons name="heart-outline" size={24} color="#000" style={styles.icon} />
                        </TouchableOpacity>
                    </View>
                    <Text style={{color: '#000'}} >{data?.description}</Text>
                </View>
                <View style={{ marginTop: 12, padding: 16, backgroundColor: '#FFF' }} >
                    <Text style={{color: '#000', fontSize: 20, fontWeight: 'bold' }}>Size</Text>
                    <Text style={{color: '#767676'}}>Chọn 1 loại size</Text>
                </View>
                <View style={{ marginTop: 12, padding: 16, backgroundColor: '#FFF' }} >
                    <Text style={{color: '#000', fontSize: 20, fontWeight: 'bold' }}>Topping</Text>
                    <Text style={{color: '#767676'}}>Chọn tối đa 2 loại</Text>
                </View>
                <View style={{ marginTop: 12, padding: 16, backgroundColor: '#FFF' }} >
                    <Text style={{color: '#000', fontSize: 20, fontWeight: 'bold' }}>Yêu cầu khác</Text>
                    <Text style={{color: '#767676'}}>Những tùy chọn khác</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Thêm ghi chú"
                        />
                </View>
                <View style={{ marginTop: 12, padding: 16, backgroundColor: '#FFF', flexDirection: 'row', justifyContent: 'space-between' }} >
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity>
                            <Text style={styles.quantity_btn}>-</Text>
                        </TouchableOpacity>
                        <Text style={styles.quantity_value}>1</Text>
                        <TouchableOpacity>
                            <Text style={styles.quantity_btn}>+</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                    
                    >
                        <Text 
                        style={styles.add_cart} 
                        // onPress={onAddCart}
                        >Chọn • đ</Text>
                    </TouchableOpacity>
                </View>


            </ScrollView>

            
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f4f4f4'
    },
    image: {
        width: WIDTH*0.8,
        height: HEIGHT*0.4,
        resizeMode: 'contain',
    },
    imageSingle: {
        width: WIDTH,
        height: HEIGHT*0.4,
        resizeMode: 'contain',
    },
    product_name: {
        maxWidth: '90%',
        color: '#000',
        fontSize: 22,
        fontWeight: 'bold'
    },
    price: {
        color: '#767676',
        fontSize: 16,
        fontWeight: 'bold'
    },
    icon: {
        top: 10,
        right: 10,
    },
    input: {
        marginTop: 12,
        padding: 8,
        height: 32,
        borderWidth: 0.5,
        borderRadius: 8
    },
    quantity_btn: {
        width: 42,
        height: 42,
        color: '#e67904',
        fontSize: 24,
        backgroundColor: '#fcf7e8',
        textAlign: 'center',
        textAlignVertical: 'center',
        borderRadius: 24
    },
    quantity_value: {
        width: 42,
        height: 42,
        color: '#000',
        fontSize: 20,
        textAlign: 'center',
        textAlignVertical: 'center',
        borderRadius: 24
    },
    add_cart: {
        height: 48,
        width: 210,
        color: '#FFF',
        backgroundColor: '#e67904',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center',
        borderRadius: 8
    }
})
