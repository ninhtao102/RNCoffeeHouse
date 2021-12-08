import React, {useEffect, useState} from 'react'
import { Dimensions, Image, View, Text, TextInput, TouchableOpacity, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import axios from 'axios'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { conditionalExpression } from '@babel/types'
import ListItem from '../components/ListItem'

const WIDTH = Dimensions.get('window').width;

export default function Booking({navigation}) {

    // const [data, useData] = useState([]);
    // const [isLoading, useIsLoading] = useState(true);
    // useEffect(() => {
    //     axios.post('https://api.thecoffeehouse.com/api/v5/menu')
    //       .then(({ data }) => {
    //         console.log("data", data.menu)
    //         useData(data.menu)
    //       })
    //       .catch((error) => console.error(error))
    //       .finally(() => useIsLoading(false));
    //   }, []);

    const [data, setData] = useState([])
    useEffect(() => {
        const getProductList = async () => {
            try {
                const response = await axios.post('https://api.thecoffeehouse.com/api/v5/menu');
                setData(response?.data.menu)
            } catch (error) {
                console.error(error);
            }
        }
        getProductList()
    }, [])
    
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.menu}>
                    {
                        data.map((item, index) => {
                        return (
                            <TouchableOpacity key={index} style={styles.category}>
                                <Image style={styles.thumbnail} source={{uri : item?.thumbnail}} />
                                <Text numberOfLines={3} style={styles.categoryTitle} >{item?.name}</Text>
                            </TouchableOpacity>
                        )
                        })
                    }
                    {/* <TouchableOpacity key="8" style={styles.category}>
                        <Image style={styles.thumbnail} source={require('../images/more.png')} />
                        <Text numberOfLines={3} style={styles.categoryTitle} >Khác</Text>
                    </TouchableOpacity> */}
                </View>

                <View style={styles.shopList}>
                    {
                        data.map((item, index) => {
                        return (
                            <ListItem data={item?.products} title={item?.name} key={index} />
                        )
                        })
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    menu: {
        flexDirection:'row', 
        flexWrap:'wrap',
        justifyContent:'space-between'
    },
    category: {
        margin: 4
    },
    thumbnail: {
        alignSelf: 'center',
        width:"80%",
        height:WIDTH*0.2*0.8
    },
    categoryTitle: {
        textAlign: 'center',
        width: 80,
    },
    shopList: {
        backgroundColor:"#dfdfdf",
        padding:15
    }
})
