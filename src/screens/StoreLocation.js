import React, {useEffect, useState} from 'react'
import { FlatList, Image, View, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from '../styles/StoreLocationStyles'
import axios from 'axios'

export default function StoreLocation({item, index}) {

    const navigation = useNavigation();
    const moveToStoreDetail = (item) => () => navigation.navigate('StoreLocationDetails', { data: item })

    const [data, useData] = useState([]);
    const [isLoading, useIsLoading] = useState(true);
    useEffect(() => {
        axios.get('https://api.thecoffeehouse.com/api/v5/stores/all')
          .then(({ data }) => {
            console.log("data", data.stores)
            useData(data.stores)
          })
          .catch((error) => console.error(error))
          .finally(() => useIsLoading(false));
      }, []);

    const ListHeader = () => (
        <View>
            <View style={{backgroundColor: '#e9d8a6', flexDirection: 'row',}}>
                <View>
                    <Ionicons name="search-outline" size={20} color="#000" style={styles.icon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Tìm kiếm"
                    />
                </View>
                <TouchableOpacity style={styles.btnMap}>
                    <Ionicons name="map-outline" size={20} color="#000" style={styles.iconMap} />
                    <Text style={styles.txtMap}>Bản đồ</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.titleContent}>Các cửa hàng khác</Text>
        </View>
    )

    const renderItem = ({ item }) => (
        <View>
            <TouchableOpacity
            onPress={moveToStoreDetail(item)}
            style={styles.locationtItem}>
                <Image
                    style={styles.locationImages}
                    source={{ uri: item?.images[0] }}
                    />
                <View style={styles.locationInfo}>
                    <Text 
                    style={styles.name}
                    numberOfLines={1}
                    ellipsizeMode= 'tail'
                    >{item.name}</Text>
                    <Text 
                    style={styles.location}
                    numberOfLines={2}
                    ellipsizeMode= 'tail'
                    >{item?.full_address}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );

    return (
        <SafeAreaView>
            <View style={{backgroundColor: '#EEE'}}>
                <FlatList
                    ListHeaderComponent={ListHeader}
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    horizontal={false}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </SafeAreaView>
    )
}