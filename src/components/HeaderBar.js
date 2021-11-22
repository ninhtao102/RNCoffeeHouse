import React from 'react'
import { View,TouchableOpacity, Text, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function HeaderBar() {
    return (

          <View style={styles.header}>
            <View>
                {/* <Image
                    style={{ width: 24, height: 24 }}
                    source={require('./src/images/sun_icon.png')}
                /> */}
                <Text>Chào buổi sáng, Ninh</Text>
            </View>
            
            <View>
                <TouchableOpacity>
                    <Ionicons name="cash-outline" size={20} color="#000" />
                    <Text>4</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Ionicons name="notifications-outline" size={20} color="#000" />
                    <Text>3</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
    
    }
})
