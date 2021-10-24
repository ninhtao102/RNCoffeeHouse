import React from 'react'
import { Image, FlatList, View, TouchableOpacity, Text, StyleSheet } from 'react-native'

const vousherList = [
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
        id: 1,
        photo: 'https://minio.thecoffeehouse.com/image/admin/storage/696_Coupon_20Pickup_2020_.jpg',
        title: 'Ưu đãi 20% đơn Pickup 2 món bất kỳ',
        date: 'Hết hạn 31/10/2021'
    },
    {
        id: 1,
        photo: 'https://minio.thecoffeehouse.com/image/admin/CPSD289Kcoupou-all_285104.jpg',
        title: 'Giảm giá Thùng Cà phê sữa đá 289,000',
        date: 'Hết hạn 31/10/2021'
    },
]

export default function VoucherList() {

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
        <View>
            <FlatList
                data={vousherList}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal={false}
                style={{ marginBottom: 10 }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    voucher: {
        marginVertical: 4,
        marginHorizontal: 16,
        padding: 16,
        borderRadius: 16,
        flexDirection: 'row',
        backgroundColor: '#FFF'
    },
    stylevoucher: {
        marginHorizontal: 16,
        marginVertical: 4,
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 8,
        backgroundColor: '#FFF'
    },
    voucherInfo: {
        marginHorizontal: 16,
        fontSize: 16,
        color: '#000', 
        width: 200,
    },
    voucherImages: {
        width: 80,
        height: 80,
        borderRadius: 4,
    }
})
