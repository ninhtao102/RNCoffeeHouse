import React from 'react'
import { Image, View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import styles from '../styles/AccountStyles'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function Account() {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>

                    <Text style={styles.title}>Tiện ích</Text>
                    <View>
                        <View style={{flexDirection: 'row'}}>
                            <TouchableOpacity style={[styles.btnGroup,styles.btnExt, {marginRight: 16}]}>
                                <Image source={require('../images/icon_paper.png')} style={styles.imgExt} />
                                <Text style={styles.extInfo}>Lịch sử đơn hàng</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.btnGroup,styles.btnExt]}>
                                <Image source={require('../images/icon_document.png')}  style={styles.imgExt} />
                                <Text style={styles.extInfo}>Điều khoản</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={[styles.btnGroup,styles.btnExt,{marginTop: 16}]}>
                            <Image source={require('../images/icon_music.png')}  style={styles.imgExt} />
                            <Text style={styles.extInfo}>Nhạc đang phát</Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.title}>Hỗ trợ</Text>
                    <View style={styles.btnGroup}>
                        <View style={styles.btnItem}>
                            <View style={{flexDirection: 'row',}}>
                                <Ionicons name="star-outline" size={16} color="#000" />
                                <Text style={styles.btnInfo}>Đánh giá đơn hàng</Text>
                            </View>
                            <Ionicons name="chevron-forward-outline" size={16} color="#000" />
                        </View>
                        <View style={styles.line}></View>
                        <View style={styles.btnItem}>
                            <View style={{flexDirection: 'row',}}>
                                <Ionicons name="chatbox-outline" size={16} color="#000" />
                                <Text style={styles.btnInfo}>Liên hệ và góp ý</Text>
                            </View>
                            <Ionicons name="chevron-forward-outline" size={16} color="#000" />
                        </View>
                    </View>

                    <Text style={styles.title}>Tài khoản</Text>


                    <View style={styles.btnGroup}>
                        <View style={styles.btnItem}>
                            <View style={{flexDirection: 'row',}}>
                                <Ionicons name="person-outline" size={16} color="#000" />
                                <Text style={styles.btnInfo}>Thông tin cá nhân</Text>
                            </View>
                            <Ionicons name="chevron-forward-outline" size={16} color="#000" />
                        </View>

                        <View style={styles.line}></View>

                        <View style={styles.btnItem}>
                            <View style={{flexDirection: 'row',}}>
                                <Ionicons name="bookmark-outline" size={16} color="#000" />
                                <Text style={styles.btnInfo}>Địa chỉ đã lưu</Text>
                            </View>
                            <Ionicons name="chevron-forward-outline" size={16} color="#000" />
                        </View>
                        
                        <View style={styles.line}></View>

                        <View style={styles.btnItem}>
                            <View style={{flexDirection: 'row',}}>
                                <Ionicons name="settings-outline" size={16} color="#000" />
                                <Text style={styles.btnInfo}>Cài đặt</Text>
                            </View>
                            <Ionicons name="chevron-forward-outline" size={16} color="#000" />
                        </View>
                        
                        <View style={styles.line}></View>

                        <View style={styles.btnItem}>
                            <View style={{flexDirection: 'row',}}>
                                <Ionicons name="log-out-outline" size={16} color="#000" />
                                <Text style={styles.btnInfo}>Đăng xuất</Text>
                            </View>
                            <Ionicons name="chevron-forward-outline" size={16} color="#000" />
                        </View>

                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
