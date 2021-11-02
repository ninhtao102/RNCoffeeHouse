import React from 'react'
import { Image,  View, Text, TouchableOpacity, SafeAreaView, ScrollView, StyleSheet} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function Cart() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <TouchableOpacity>
                        <Text>Xóa</Text>
                    </TouchableOpacity>
                    <Text style={styles.title}>Xác nhận đơn hàng</Text>
                    <TouchableOpacity>
                        <Ionicons name="close-outline" size={20} color="#000" />
                    </TouchableOpacity>
                </View>

                <View>
                    <View>
                        <Text style={styles.titleContent}>Tự đến lấy hàng</Text>
                        <TouchableOpacity>
                            <Text>Thay đổi</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View>
                    <View>
                        <Text style={styles.titleContent}>Sảm phẩm đã chọn</Text>
                        <TouchableOpacity>
                            <Text>+ Thêm</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.content}>
                    <Text style={styles.titleContent}>Tổng cộng</Text>
                    <View>
                        <View style={{ paddingVertical: 16, flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text>Thành tiền</Text>
                            <Text style={styles.price}>125.000đ</Text>
                        </View>
                        <View style={styles.line}></View>
                        <View>
                            <Ionicons name="chevron-forward-outline" size={20} color="#000" style={styles.rightArrow} />    
                            <Text style={styles.select}>Chọn khuyến mãi</Text>
                        </View>
                        <View style={styles.line}></View>
                        <View style={{ paddingVertical: 16, flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text>Số tiền thanh toán</Text>
                            <Text style={styles.price}>125.000đ</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.content}>
                    <Text style={styles.titleContent}>Thanh toán</Text>
                    <View>
                        <Ionicons name="chevron-forward-outline" size={20} color="#000" style={styles.rightArrow} />    
                        <Text style={styles.select}>Chọn phương thức thanh toán</Text>
                    </View>
                </View>

                <View style={styles.infoBooking}>
                    <View>
                        <Text style={styles.txtBooking}>Tự đến lấy • 3 sản phẩm</Text>
                        <Text style={styles.totalPrice}>125.000đ</Text>
                    </View>

                    <TouchableOpacity>
                        <Text style={styles.btnBooking}>đặt hàng</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20
    },
    content: {
        marginTop: 16,
        backgroundColor: '#FFF'
    },
    header: {
        padding: 16,
        backgroundColor: '#FFF',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        color: '#000',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    line: {
        borderBottomWidth: 1,
        borderBottomColor: '#CCC'
    },
    titleContent: {
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold'
    },
    select: {
        color: '#0077b6',
    },
    rightArrow: {
        top: 21,
        alignSelf: 'flex-end',
    },
    
    infoBooking: {
        padding: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#FF7900',
    },
    txtBooking: {
        color: '#FFF'
    },
    totalPrice: {
        color: '#FFF',
        fontWeight: 'bold'
    },
    btnBooking: {
        padding: 8,
        paddingHorizontal: 16,
        backgroundColor: '#FFF',
        color: '#FF7900',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        borderRadius: 24,
    }
})
