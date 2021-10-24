import React from 'react'
import { Dimensions, FlatList, Image, View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

const numColumns = 2
const { WIDTH, HEIGHT } = Dimensions.get('window')

const bannerList = [
    {
        id: 1,
        photo: 'https://feed.thecoffeehouse.com//content/images/2021/10/BANNER-APP.jpg',
        title: 'vui có bạn - tươi trẻ có đôi',
        date: 'Đến 12/10',
    },
    {
        id: 2,
        photo: 'https://feed.thecoffeehouse.com//content/images/2021/10/1200x1200.png',
        title: 'cần món nước ngon, nhà & shoppee khao ngay deal hot',
        date: 'Đến 11/10',
    },
    {
        id: 3,
        photo: 'https://feed.thecoffeehouse.com//content/images/2021/10/APP-NEWS-TUNGTANG.jpg',
        title: 'đến hẹn lại lên - xuất chiêu deal hot',
        date: 'Đến 16/10',
    },
    {
        id: 4,
        photo: 'https://feed.thecoffeehouse.com//content/images/2021/10/APP-NEWS-khoi-dau.jpg',
        title: 'khởi đầu mới - ưu đãi cực hời',
        date: 'Đến 15/10',
    },
    {
        id: 5,
        photo: 'https://feed.thecoffeehouse.com//content/images/2021/10/02.jpg',
        title: 'sản phầm mới: chai fresh - cho ngày dài trọn vị',
        date: 'Đến 22/10',
    },
    {
        id: 6,
        photo: 'https://feed.thecoffeehouse.com//content/images/2021/10/NEWS-KETNOI-1029x513.jpg',
        title: 'đã lâu không gặp nhà khao 30%',
        date: 'Đến 24/10',
    },
    {
        id: 7,
        photo: 'https://feed.thecoffeehouse.com//content/images/2021/10/h-nh-m--b-n.jpg',
        title: 'the coffee house có phiên bản mới dành riêng cho tp.hcm',
        date: 'Đến 30/10',
    },
    {
        id: 8,
        photo: 'https://feed.thecoffeehouse.com//content/images/2021/09/APP-NEWS-2-2.jpg',
        title: 'ưu đãi cà phê ngon chỉ từ 19k',
        date: 'Đến 28/10',
    },
]

export default function BannerList() {

    const renderItem = ({ item }) => (
        <View>
            <TouchableOpacity>
                <Image
                style={styles.banner}
                source={{ uri: item?.photo }}
                />
                <View>
                    <Text 
                    numberOfLines={2}
                    ellipsizeMode= 'tail'
                    style={styles.title}
                    >{item?.title}</Text>
                    <View style ={{flexDirection: 'row'}}>
                        <Ionicons name="calendar-outline" size={16} color="#000" />
                        <Text style={styles.date}>{item?.date}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );

    return (
        <View>
            <FlatList
                data={bannerList}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={numColumns}
                horizontal={false}
                style={{ marginBottom: 10 }}
                columnWrapperStyle={{ flex: 1, justifyContent: "space-around" }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    banner: {
        width: 150,
        height: 150,
        borderRadius: 8,
    },
    title: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        marginVertical: 8,
        color: '#000',
        width: 150,
    },
    date: {
        paddingLeft: 8,
        marginBottom: 16,
    }
})

