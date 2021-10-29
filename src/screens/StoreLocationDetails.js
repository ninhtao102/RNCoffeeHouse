import React from 'react'
import { Dimensions, Image, View, Text, TouchableOpacity, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

const { HEIGHT, WIDTH } = Dimensions.get('window');

export default function StoreLocationDetails({navigation}) {

    const onBooking = () => navigation.navigate('Booking')

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{backgroundColor: '#FFF'}}>
                    <Image
                        style={styles.locationImages}
                        source={{ uri: 'https://image.bnews.vn/MediaUpload/Org/2021/01/23/the-coffee-house1.jpg' }}
                        />
                    <View style={styles.title}>
                        <Text style={styles.name}>the coffee house</Text>
                        <Text style={styles.store}>Chung cư Victoria Văn Phú Tòa V2 Khu đô thị Văn Phú</Text>
                        <Text style={{fontSize: 12}}>Giờ mở cửa: 7:00 - 22:00</Text>
                    </View>

                    <View style={{margin: 16}}>
                        <View style={styles.info}>
                            <Ionicons name="navigate-outline" size={20} color="#000" style={styles.icon} />
                            <Text
                                style={styles.infoStore}
                                numberOfLines={2}
                                ellipsizeMode= 'tail'
                            >Chung cư Victoria Văn Phú Tòa V2 Khu đô thị Văn Phú, Hà Đông, Hà Nội, Việt Nam</Text>
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
                </View>
            </ScrollView>
        </SafeAreaView>
        )
}

const styles = StyleSheet.create({
    locationImages: {
        width: WIDTH,
        height: 320,
        resizeMode: 'cover',
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
        padding: 12,
        justifyContent: 'center',
        alignContent: 'center',
        width: 46,
        height: 46,
        backgroundColor: '#EEE',
        borderRadius: 8,
    },
    infoStore: {
        width: 340,
        textAlignVertical: 'center',
        color: '#000',
        borderBottomWidth: 1,
        borderBottomColor: '#EEE'
    }
})