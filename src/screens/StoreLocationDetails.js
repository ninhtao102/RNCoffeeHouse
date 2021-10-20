import React from 'react'
import { Image, View, Text, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import styles from '../styles/StoreLocationDetailStyles'

export default function StoreLocationDetails() {
    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <Image
                        style={styles.locationImages}
                        source={{ uri: 'https://image.bnews.vn/MediaUpload/Org/2021/01/23/the-coffee-house1.jpg' }}
                        />
                    <View>
                        <Text style={styles.name}>the coffee house</Text>
                        <Text style={styles.store}>Chung cư Victoria Văn Phú Tòa V2 Khu đô thị Văn Phú</Text>
                        <Text style={{fontSize: 12}}>Giờ mở cửa: 7:00 - 22:00</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
        )
}
