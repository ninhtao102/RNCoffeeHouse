import React from 'react'
import { Image,  View, Text, TouchableOpacity, SafeAreaView, ScrollView} from 'react-native'

export default function Cart() {
    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <TouchableOpacity>
                        <Text>Xóa</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Ionicons name="close-outline" size={20} color="#000" />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
