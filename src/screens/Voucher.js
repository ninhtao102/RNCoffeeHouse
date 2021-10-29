import React from 'react'
import { Image, FlatList, View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from '../styles/VoucherStyles'
import CodeUsers from '../components/CodeUsers'
import EndowList from '../components/EndowList'

const voucherList = [
    {
        id: 1,
        photo: 'https://minio.thecoffeehouse.com/image/admin/storage/1159_m1t1-v1.jpg',
        title: 'Mua 1 tặng 1 đơn Delivery ',
        date: 'Hết hạn 31/10/2021'
    },
    {
        id: 2,
        photo: 'https://minio.thecoffeehouse.com/image/admin/storage/852__C4_90o_CC_82_CC_80ng-gia_CC_81-29K_coupon.jpg',
        title: 'Đồng giá 29k Caramel Macchiato Đá (M)',
        date: 'Hết hạn 31/10/2021'
    },
    {
        id: 3,
        photo: 'https://minio.thecoffeehouse.com/image/admin/Coupondelivery30_684527.jpg',
        title: 'Ưu đãi 30% (tối đa 35k) đơn từ 2 món bất kỳ',
        date: 'Hết hạn 31/10/2021'
    },
    {
        id: 4,
        photo: 'https://minio.thecoffeehouse.com/image/admin/storage/696_Coupon_20Pickup_2020_.jpg',
        title: 'Ưu đãi 20% đơn Pickup 2 món bất kỳ',
        date: 'Hết hạn 31/10/2021'
    },
    {
        id: 5,
        photo: 'https://minio.thecoffeehouse.com/image/admin/CPSD289Kcoupou-all_285104.jpg',
        title: 'Giảm giá Thùng Cà phê sữa đá 289,000',
        date: 'Hết hạn 31/10/2021'
    },
]

export default function Voucher() {

    const ListHeader = () => (
        <View>
            <View style={styles.codeView}>
                <CodeUsers/>
            </View>

            <View style={styles.btnGroup}>
                <TouchableOpacity style={styles.btnItem}>
                    <Ionicons name="gift-outline" size={16} color="#FF3300" />
                    <Text style={styles.btnInfo}>Đổi ưu đãi</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnItem}>
                    <Ionicons name="cash-outline" size={16} color="#FF3300" />
                    <Text style={styles.btnInfo}>Voucher của bạn</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnItem}>
                    <Ionicons name="card-outline" size={16} color="#FF3300" />
                    <Text style={styles.btnInfo}>Lịch sử BEAN</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnItem}>
                    <Ionicons name="shield-checkmark-outline" size={16} color="#3366CC" />
                    <Text style={styles.btnInfo}>Quyền lợi của bạn</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.content}>
                <Text style={styles.titleContent}>Phiếu ưu đãi của bạn</Text>
                <TouchableOpacity>
                    <Text  style={styles.btnMore}>Xem tất cả</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

    const renderItem = ({ item }) => (
        <View>
            <TouchableOpacity style={styles.voucher}>
                <Image
                style={styles.voucherImages}
                source={{ uri: item?.photo }}
                />
                <View style={{justifyContent: 'space-between'}}>
                    <Text 
                    style={styles.voucherInfo}
                    numberOfLines={2}
                    ellipsizeMode = 'tail'
                    >{item?.title}</Text>
                    <Text style={styles.voucherInfo}>{item?.date}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );

    return (
        <SafeAreaView>
            <View style={{backgroundColor: '#EEE'}}>

                <View>
                    <FlatList
                        ListHeaderComponent={ListHeader}
                        data={voucherList}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        horizontal={false}
                        showsVerticalScrollIndicator={false}
                        style={{ marginBottom: 10 }}
                    />
                </View>

                {/* <View style={styles.content}>
                    <Text style={styles.titleContent}>Đổi ưu đãi</Text>
                    <TouchableOpacity>
                        <Text  style={styles.btnMore}>Xem tất cả</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <EndowList/>
                </View> */}

            </View>
        </SafeAreaView>
    )
}


