import React from 'react'
import { Dimensions, Image, View, Text, TouchableOpacity, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

export default function StoreLocationDetails({navigation, route}) {

    const { data } = route.params
    const onBooking = () => navigation.navigate('Booking')

    return (
        <SafeAreaView>
            <ScrollView style={{backgroundColor: '#FFF'}}>
                <View style={styles.thumbnail}>
                    <Image source={{ uri: data?.images[0] }} style={styles.image} />
                </View>
                <View style={styles.title}>
                    <Text style={styles.name}>{data?.pu_city}</Text>
                    <Text style={styles.store} >{data?.name}</Text>
                    <Text style={{fontSize: 12}}>Giờ mở cửa: {data?.open_time}</Text>
                </View>
                <View style={{margin: 16}}>
                    <View style={styles.info}>
                        <Ionicons name="navigate-outline" size={20} color="#000" style={styles.icon} />
                        <Text
                            style={styles.infoStore}
                            numberOfLines={2}
                            ellipsizeMode= 'tail'
                        >{data?.full_address}</Text>
                    </View>
                    <View style={styles.info}>
                        <Ionicons name="heart-outline" size={20} color="#000" style={styles.icon} />
                        <Text
                            style={styles.infoStore}
                        >Thêm vào danh sách yêu thích</Text>
                    </View>
                    <View style={styles.info}>
                        <Ionicons name="call" size={20} color="#000" style={styles.icon} />
                        <Text
                            style={styles.infoStore}
                        >Liên hệ</Text>
                    </View>
                    <View style={styles.info}>
                        <Ionicons name="arrow-redo-outline" size={20} color="#000" style={styles.icon} />
                        <Text
                            style={styles.infoStore}
                        >Chia sẻ với bạn bè</Text>
                    </View>
                </View>

                <TouchableOpacity
                    onPress={onBooking}
                    style={styles.button}
                >
                    <Text style={[styles.btnName, {fontWeight: 'bold'}]}>Đặt sản phẩm</Text>
                    <Text style={styles.btnName}>Tự đến lấy tại cửa hàng này</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
        )
}

const styles = StyleSheet.create({
    image: {
        width: WIDTH,
        height: HEIGHT*0.36,
        resizeMode: 'cover',
    },
    imageSingle: {
        width: WIDTH*0.8,
        height: HEIGHT*0.36,
        resizeMode: 'contain',
    },
    title: {
        padding: 16,
        borderBottomWidth: 0.5,
        borderBottomColor: '#CCC'
    },
    button: {
        margin: 16,
        padding: 16,
        backgroundColor: '#FF7900',
        borderRadius: 8,
    },
    btnName: {
        color: '#FFF',
        textAlign: 'center'
    },
    name: {
        fontSize: 12,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    store: {
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold'
    },
    info: {
        marginVertical: 8,
        flexDirection: 'row', 
        justifyContent: 'space-between'
    },
    icon: {
        marginRight: 8,
        padding: 12,
        justifyContent: 'center',
        alignContent: 'center',
        width: 46,
        height: 46,
        backgroundColor: '#EEE',
        borderRadius: 8,
    },
    infoStore: {
        width: 300,
        textAlignVertical: 'center',
        color: '#000',
        borderBottomWidth: 1,
        borderBottomColor: '#EEE'
    }
})