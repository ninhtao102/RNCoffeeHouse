import React from 'react'
import { FlatList, Image, View, Text, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import styles from '../styles/BookingStyles'
import Ionicons from 'react-native-vector-icons/Ionicons'

const productsList = [
    {
        id: 1,
        title: 'Cà Phê Sữa Đá',
        description: 'Cà phê được pha phin truyền thống kết hợp với sữa đặc tạo nên',
        price: '32.000đ',
        photo: 'https://minio.thecoffeehouse.com/image/admin/caphe-suada--bacsiu_063797_400x400.jpg',
    },
    {
        id: 2,
        title: 'Cà Phê Sữa Nóng',
        description: 'Cà phê được pha phin truyền thống kết hợp với sữa đặc tạo nên',
        price: '35.000đ',
        photo: 'https://minio.thecoffeehouse.com/image/admin/cfsua-nong_235317_400x400.jpg',
    },
    {
        id: 3,
        title: 'Bạc Sỉu',
        description: 'Bạc sửa chính là "Ly sữa trắng kèm một chút cà phê".',
        price: '32.000đ',
        photo: 'https://minio.thecoffeehouse.com/image/admin/caphe-suada--bacsiu_063797_400x400.jpg',
    },
    {
        id: 4,
        title: 'Bạc Sỉu Nóng',
        description: 'Bạc sửa chính là "Ly sữa trắng kèm một chút cà phê".',
        price: '35.000đ',
        photo: 'https://minio.thecoffeehouse.com/image/admin/bacsiunong_062500_400x400.jpg',
    },
    {
        id: 5,
        title: 'Cà Phê Đen Đá',
        description: 'Cà phê được pha phin truyền thống kết hợp với sữa đặc tạo nên',
        price: '32.000đ',
        photo: 'https://minio.thecoffeehouse.com/image/admin/cfdenda-espressoDa_647698_400x400.jpg',
    },
    {
        id: 6,
        title: 'Cà Phê Đen Nóng',
        description: 'Cà phê được pha phin truyền thống kết hợp với sữa đặc tạo nên',
        price: '35.000đ',
        photo: 'https://minio.thecoffeehouse.com/image/admin/cfden_nong_016851_400x400.jpg',
    },
    {
        id: 7,
        title: 'Caramel Macchiato Đá',
        description: 'Cà phê được pha phin truyền thống kết hợp với sữa đặc tạo nên',
        price: '50.000đ',
        photo: 'https://minio.thecoffeehouse.com/image/admin/caramel-macchiato_143623_400x400.jpg',
    },
    {
        id: 8,
        title: 'Caramel Macchiato Nóng',
        description: 'Cà phê được pha phin truyền thống kết hợp với sữa đặc tạo nên',
        price: '50.000đ',
        photo: 'https://minio.thecoffeehouse.com/image/admin/caramelmacchiatonong_168039_400x400.jpg',
    },
]

const renderItem = ({ item }) => (
    <View>
        <TouchableOpacity style={styles.productItem}>
            <View>
                <Text style={styles.title}>{item?.title}</Text>
                <Text style={styles.description}>{item?.description}</Text>
                <Text style={{marginTop: 8}}>{item?.price}</Text>
            </View>
            <Image
            style={styles.productsImages}
            source={{ uri: item?.photo }}
            />
        </TouchableOpacity>
    </View>
);

export default function Booking() {
    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <View style={[styles.headerBar, {paddingTop: 8}]}>
                        <Image
                            style={styles.icon}
                            source={require('../images/shipping_icon.jpg')}
                        />
                        <View>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={styles.txtShipping}>Giao đến</Text>
                                <Ionicons name="chevron-down-outline" size={20} color="#000" />
                            </View>
                            <Text>Xã Tam Hưng, Huyện Thanh Oai, Hà Nội,...</Text>
                        </View>
                    </View>
                    <View style={[styles.headerBar,{paddingBottom: 16}]}>
                        <TextInput
                            style={styles.input}
                            placeholder="Thực đơn"
                        />
                        <View style={styles.searchBar}>
                            <Ionicons name="chevron-down-outline" size={20} color="#000" style={{}} />
                        </View>
                        <TouchableOpacity style={styles.ionIcons}>
                            <Ionicons name="search-outline" size={20} color="#000" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.ionIcons}>
                            <Ionicons name="heart-outline" size={20} color="#000" />
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.titleContent}>Cà phê</Text>
                    <FlatList
                            data={productsList}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                            horizontal={false}
                        />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
