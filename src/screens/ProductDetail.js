import React, { useState, useEffect } from 'react'
import { Dimensions, Image, View, Text, TextInput, TouchableOpacity, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import { useSelector, useDispatch } from "react-redux"
import Ionicons from 'react-native-vector-icons/Ionicons'

const { HEIGHT, WIDTH } = Dimensions.get('window');

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
            <ScrollView>
                <View>
                    <ScrollView
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
                    </ScrollView>
                </View>
                <View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View>
                            <Text style={styles.product_name}>{data?.name}</Text>
                            <Text style={styles.price}>{priceDetail}đ</Text>
                        </View>
                        <TouchableOpacity>
                            <Ionicons name="heart-outline" size={20} color="#000" style={styles.icon} />
                        </TouchableOpacity>
                    </View>
                    <Text>{data?.description}</Text>

                </View>

            </ScrollView>

            
        </View>

    )
}

const styles = StyleSheet.create({
    image: {
        width: WIDTH*0.8,
        height: WIDTH,
        resizeMode: 'contain',
    },
    imageSingle: {
        width: WIDTH,
        height: WIDTH,
        resizeMode: 'contain',
    },
    product_name: {
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold'
    },
    price: {
        color: '#767676',
        fontWeight: 'bold'
    },
    icon: {
        top: 10,
        right: 10,
    }
})
