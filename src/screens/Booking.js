import React, {useEffect, useState} from 'react'
import { Dimensions, Image, View, Text, TextInput, TouchableOpacity, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import { useSelector, useDispatch } from "react-redux"
import { conditionalExpression } from '@babel/types'
import Ionicons from 'react-native-vector-icons/Ionicons'
import ListItem from '../components/ListItem'
import axios from 'axios'

const WIDTH = Dimensions.get('window').width

export default function Booking({navigation}) {
    const [text, onChangeText] = React.useState("useless text")
    const dispatch = useDispatch()
    const onSendNameToStore = () => {
        dispatch({ type: "SEND_FROM_GIRL_FRIEND1", data: text })
    }

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
            <ScrollView style={{backgroundColor: '#FFF'}}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.category}>
                        <Image source={require('../images/application.png')} style={styles.image} />
                    </TouchableOpacity>
                    <View style={styles.text_input}>
                        <Ionicons name="search-outline" size={18} color="#000" style={styles.search_icon} />
                        <TextInput
                            style={styles.input}
                            // placeholder="Tìm kiếm"
                            onChangeText={onChangeText}
                            value={text}
                        />
                    </View>
                    <TouchableOpacity style={styles.button} onPress={onSendNameToStore}>
                        <Ionicons name="heart-outline" size={18} color="#000" />
                    </TouchableOpacity>
                </View>

                <View style={styles.menu}>
                    {
                        data.map((item, index) => {
                        return (
                            <TouchableOpacity key={index}>
                                <Image style={styles.thumbnail} source={{uri : item?.thumbnail}} />
                                <Text numberOfLines={2} style={styles.categoryTitle} >{item?.name}</Text>
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
    header: {
        paddingHorizontal: 16,
        backgroundColor: '#e9d8a6', 
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    category: {
        marginVertical: 8,
        padding: 8,
        width: 32,
        backgroundColor: '#FFF',
        borderRadius: 32
    },
    image: {
        width: 16,
        height: 16,
    },
    text_input: {
        marginVertical: 8,
        paddingHorizontal: 8,
        height: 32,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#FFF',
        borderRadius: 16
    },
    search_icon: {
        alignSelf: 'center',
    },
    input: {
        width: WIDTH*0.6,
        height: 36,
    },
    tittle: {
        marginHorizontal: 8,
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
    },
    icon: {
        marginVertical: 2,
    },
    button: {
        marginVertical: 8,
        padding: 6,
        flexDirection: 'row',
        alignSelf: 'center',
        backgroundColor: '#FFF',
        borderRadius: 24,
    },
    menu: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        flexDirection:'row', 
        flexWrap:'wrap',
        justifyContent:'space-between',
        backgroundColor: '#FFF'
    },
    thumbnail: {
        marginVertical: 4,
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
