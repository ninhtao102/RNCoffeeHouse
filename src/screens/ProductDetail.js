import React from 'react'
import { Image, View, Text, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from '../styles/ProductDetailStyles'

export default function ProductDetail({navigation}) {

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{backgroundColor: '#EEE'}}>
                    <View style={{backgroundColor: '#FFF'}}>
                        <Image
                            style={styles.productImages}
                            source={{ uri: 'https://minio.thecoffeehouse.com/image/admin/caphe-suada--bacsiu_063797.jpg' }}
                            />
                        <View>
                            <View style={{ padding: 16, flexDirection: 'row', justifyContent: 'space-between'}}>
                                <View>
                                    <Text style={styles.productName}>Cà Phê Sữa Đá</Text>
                                    <Text style={styles.price}>32.000đ</Text>
                                </View>
                                <Ionicons name="heart-outline" size={20} color="#000" style={styles.icon} />
                            </View>
                            <Text style={styles.productInfo}>
                            Cà phê được pha phin truyền thống kết hợp với sữa đặc tạo nên hương vị đậm đà, hài hòa giữa vị ngọt đầu lưỡi và vị đắng thanh thoát nơi hậu vị.
                            </Text>
                        </View>
                    </View>

                    <View style={styles.option}>
                        <Text style={styles.title}>Size</Text>
                        <Text style={styles.desc}>Chọn 1 kích thước</Text>
                    </View>

                    <View style={styles.option}>
                        <Text style={styles.title}>Yêu cầu khác</Text>
                        <Text style={styles.desc}>Những tùy chọn khác</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Thêm ghi chú"
                        />
                    </View>

                    <View style={[styles.option, {paddingTop: 0}]}>
                        <View style={[styles.addMoreProduct, {marginHorizontal: 90}]}>
                            <TouchableOpacity>
                                <Text style={styles.btnAddMore}>-</Text>
                            </TouchableOpacity>
                            <Text style={styles.addMoreValue}>1</Text>
                            <TouchableOpacity>
                                <Text style={styles.btnAddMore}>+</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity>
                            <Text style={styles.addProduct}>Chọn sản phẩm</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
