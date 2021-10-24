import React from 'react'
import { Dimensions, Image, FlatList, View, Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import { useState } from 'react'

const swipeBanner = [
    'https://feed.thecoffeehouse.com//content/images/2021/10/BANNER-APP.jpg',
    'https://feed.thecoffeehouse.com//content/images/2021/10/1200x1200.png',
    'https://feed.thecoffeehouse.com//content/images/2021/10/APP-NEWS-TUNGTANG.jpg',
    'https://feed.thecoffeehouse.com//content/images/2021/10/APP-NEWS-khoi-dau.jpg',
    'https://feed.thecoffeehouse.com//content/images/2021/10/02.jpg',
]

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default function SwiperBanner() {

    const [imgActive, setimgActive] = useState(0)

    const onchange = (nativeEvent) => {
        if (nativeEvent) {
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
            if (slide != imgActive) {
                setimgActive(slide);
            }
        }
    }

    const renderItem = ({ item }) => (
        <View>
            <Image
            style={styles.wrap}
            source={{uri: item?.photo}}
            />
        </View>
    )

    return (
        <SafeAreaView style={styles.container}>
            <View
            style={[styles.wrap]}
            >
                    <ScrollView
                    onScroll={({nativeEvent}) => onchange(nativeEvent)}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    horizontal
                    style={styles.wrap}
                    >
                        {
                            swipeBanner.map((e, index) => 
                            <Image
                                key={e}
                                resizeMode='stretch'
                                style={styles.wrap}
                                source={{uri :e}}
                            />
                            )
                        }
                    </ScrollView>

                    <View style={styles.wrapDot}>
                    {
                        swipeBanner.map((e, index) =>
                            <Text
                            key={e}
                            style={imgActive == index ? styles.dotActive : styles.dot}
                            > ● </Text>
                        )
                    }
                        
                    </View>
                </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 16,
        borderRadius: 8,
        shadowColor: "#EEE",
        shadowOpacity: 0.4,
        elevation: 8,
    },
    wrap: {
        width: WIDTH*0.9,
        height: HEIGHT*0.3,
        borderRadius: 8,
    },
    wrapDot: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignSelf: 'center'
    },
    dotActive: {
        margin: 3,
        color: '#FF7900',
    },
    dot: {
        margin: 3,
        color: '#FFF',
    }
})
