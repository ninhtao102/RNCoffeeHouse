import React from 'react'
import { FlatList, Image, View, Text, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import styles from '../styles/StoreLocationStyles'
import Ionicons from 'react-native-vector-icons/Ionicons'

const storeLocationList = [
    {
        id: 1,
        photo: 'https://bloganchoi.com/wp-content/uploads/2019/12/ha-dong.jpg',
        location: 'Chung cư Victoria Văn Phú Tòa V2 Khu đô thị Văn Phú, Hà Đông, Hà Nội, Việt Nam',
        distance: 9.0
    },
    {
        id: 2,
        photo: 'https://www.spectos.com/wp-content/uploads/2019/09/teaser-the-coffee-house.jpg',
        location: 'Rice City Linh Đàm, Hoàng Mai, Hà Nội, Việt Nam',
        distance: 10.0
    },
    {
        id: 3,
        photo: 'https://danviet.mediacdn.vn/2021/4/13/the-coffee-house-khong-nhuong-nguyen-1618324271848672760365-crop-1618324294521246672359.jpg',
        location: 'Tầng 1 tòa CT5A thuộc dự án Văn Khê, Hà Đông, Hà Nội, Việt Nam',
        distance: 10.7
    },
    {
        id: 4,
        photo: 'https://cdn.vietnambiz.vn/171464876016439296/2020/8/19/tch-15839274229471306654924-crop-15839274339272101041463-1597828167997932436972.jpg',
        location: '38 Nguyễn Khuyến, Hà Đông, Hà Nội, Việt Nam',
        distance: 10.8
    },
    {
        id: 5,
        photo: 'https://hai.doimoisangtao.vn/wp-content/uploads/Kinhnghiemkinhdoanh.org-the-coffee-house-phat-trien-thuong-hieu-nho-vao-customer-insight-k7-1.jpg',
        location: 'Số BT16B5-06 Làng Việt Kiều Châu Âu, Khu ĐTM Mỗ Lao, Hà Nội, Việt Nam',
        distance: 11.6
    },
    {
        id: 6,
        photo: 'https://blog.utop.vn/uploads/126638328908012021.jpg',
        location: '349 Vũ Tông Phan, Thanh Xuân, Hà Nội, Việt Nam',
        distance: 12.6
    },
    {
        id: 7,
        photo: 'https://giaanjsc.com/wp-content/uploads/2020/10/thi-c%C3%B4ng-qu%C3%A1n-cafe-%C4%91%E1%BA%B9p-t%E1%BA%A1i-h%C3%A0-n%E1%BB%99i-6.jpg',
        location: 'Chung dân cư Hà Đông, Hà Nội, Việt Nam',
        distance: 12.8
    },
    {
        id: 8,
        photo: 'https://www.spectos.com/wp-content/uploads/2019/09/teaser-the-coffee-house.jpg',
        location: '72 Trần Nguyên Đán, Hoàng Mai, Hà Nội, Việt Nam',
        distance: 12.9
    },
]

const renderItem = ({ item }) => (
    <View>
        <TouchableOpacity style={styles.locationtItem}>
            <Image
                style={styles.locationImages}
                source={{ uri: item?.photo }}
                />
            <View style={styles.locationInfo}>
                <Text style={styles.name}>the coffee house</Text>
                <Text 
                style={styles.location}
                numberOfLines={2}
                ellipsizeMode= 'tail'
                >{item?.location}</Text>
                <Text style={styles.distance}>Cách đây {item?.distance} km</Text>
            </View>
        </TouchableOpacity>
    </View>
);

export default function StoreLocation() {
    return (
        <SafeAreaView>
            <ScrollView
            showsVerticalScrollIndicator={false}
            >
                <View style={{backgroundColor: '#EEE'}}>
                    <View style={{backgroundColor: '#FFF', flexDirection: 'row',}}>
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
                    <FlatList
                            data={storeLocationList}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                            horizontal={false}
                        />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
