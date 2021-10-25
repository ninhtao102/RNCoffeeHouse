import React from 'react'
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from '../styles/VoucherStyles'
import CodeUsers from '../components/CodeUsers'
import VoucherList from '../components/VoucherList'
import EndowList from '../components/EndowList'

export default function Voucher() {
    return (
        <SafeAreaView>
            <ScrollView
            showsVerticalScrollIndicator={false}
            >
                <View style={{backgroundColor: '#EEE'}}>

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

                    <View>
                        <VoucherList/>
                    </View>

                    <View style={styles.content}>
                        <Text style={styles.titleContent}>Đổi ưu đãi</Text>
                        <TouchableOpacity>
                            <Text  style={styles.btnMore}>Xem tất cả</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <EndowList/>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}


