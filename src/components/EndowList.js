import React from 'react'
import { Dimensions, Image, FlatList, View, TouchableOpacity, Text, StyleSheet } from 'react-native'

const WIDTH = Dimensions.get('window').width;

const endowList = [
    {
        id: 1,
        photo: 'https://thumb.danhsachcuahang.com/image/2019/10/20191015_aeb431334bfd773e3dd7dd922508cc5c_1571122681.jpg',
        title: 'Voucher 35k tại Coolmate',
        bean: 99
    },
    {
        id: 2,
        photo: 'https://bazaarvietnam.vn/wp-content/uploads/2018/12/trang-suc-PNJ-hinh-anh-16.jpg',
        title: 'Voucher 200,000đ tại PNJ',
        bean: 99
    },
    {
        id: 3,
        photo: 'https://bazaarvietnam.vn/wp-content/uploads/2018/12/trang-suc-PNJ-hinh-anh-13.jpg',
        title: 'Voucher 200,000đ tại PNJ (Áp dụng cho khách hàng mới)',
        bean: 99
    },
    {
        id: 4,
        photo: 'https://vcdn1-ngoisao.vnecdn.net/2015/02/27/27-2-201551-147265921-1246-1425027253.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=EXH1565HabMlcuQZenkVmA',
        title: 'Voucher 200,000đ tại PNJ (Áp dụng cho khách hàng mới)',
        bean: 99
    },
    {
        id: 5,
        photo: 'https://cdn.pnj.io/images/tin-tuc/2019/022019/PNJ-8-3-4.png?1551427425964',
        title: 'Voucher 200,000đ tại PNJ (Áp dụng cho khách hàng mới)',
        bean: 99
    },
    {
        id: 6,
        photo: 'https://thienthoi.com.vn/wp-content/uploads/2020/09/thienthoi-28.png',
        title: 'Tặng 2 mask vải mè trượt nước',
        bean: 99
    },
    {
        id: 7,
        photo: 'https://thienthoi.com.vn/wp-content/uploads/2020/09/thienthoi-28.png',
        title: 'Miễn phí upsize',
        bean: 199
    },
    {
        id: 8,
        photo: 'https://thienthoi.com.vn/wp-content/uploads/2020/09/thienthoi-28.png',
        title: 'Cash voucher 50,000đ',
        bean: 299
    },

]

export default function EndowList() {

    const renderItem = ({ item }) => (
        <View>
            <TouchableOpacity style={styles.endow}>
                <Image
                style={styles.endowImages}
                source={{ uri: item?.photo }}
                />
                <Text 
                style={styles.endowInfo}
                numberOfLines={2}
                ellipsizeMode = 'tail'
                >{item?.title}</Text>
                <View style={{justifyContent: 'center'}}>
                    <TouchableOpacity>
                        <Text style={styles.bean}>{item?.bean}</Text>
                    </TouchableOpacity>
                    <Text style={{textAlign: 'center', color: '#000'}}>BEAN</Text>
                </View>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={{marginTop: 4}}>
            <FlatList
                data={endowList}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal={false}
                style={{ marginBottom: 10 }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    endow: {
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#FFF',
        borderBottomWidth: 1,
        borderBottomColor: '#EEE'
    },
    endowImages: {
        width: WIDTH*0.15,
        height: WIDTH*0.15,
        borderRadius: 4,
    },
    endowInfo: {
        marginTop: 4,
        width: WIDTH*0.55,
        color: '#000',
    },
    bean: {
        padding: 4,
        width: 60,
        backgroundColor: '#caffbf',
        color: '99d98c',
        textAlign: 'center',
        borderRadius: 16,
    }
})
