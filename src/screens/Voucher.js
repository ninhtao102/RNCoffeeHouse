import React from 'react'
import { FlatList, Image, View, Text, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import styles from '../styles/VoucherStyles'



export default function Voucher() {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{backgroundColor: '#EEE'}}>
                    <View>
                        
                    </View>
                    <Text style={styles.titleContent}>Phiếu ưu đãi của bạn</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
