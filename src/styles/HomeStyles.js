import { StyleSheet, Dimensions } from 'react-native'

const { WIDTH, HEIGHT } = Dimensions.get('window')

const styles = StyleSheet.create({
    
    content: {
        backgroundColor: '#FFF', 
        borderTopLeftRadius: 16, 
        borderTopRightRadius: 16,
        shadowColor: "#000",
        shadowOpacity: 1,
        elevation: 24,
    },
    option: {
        borderWidth: 1,
        borderColor: '#CCC',
        borderRadius: 8,
        marginHorizontal: 16,
        marginVertical: 16,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    icon: {
        width: 80,
        height: 80,
    },
    txtOption: {
        color: '#000',
        textAlign: 'center',
        marginBottom: 16,
    },
    line: {
        height: 80,
        alignSelf: 'center',
        borderRightWidth: 1,
        borderRightColor: '#CCC',
    },
    swipeBanner: {
        marginHorizontal: 16,
        borderRadius: 8,
        shadowColor: "#EEE",
        shadowOpacity: 0.4,
        elevation: 8,
    },
    bannerImage: {
        borderRadius: 8,
        width: '100%',
        height: 200, 
    },

    wrap: {
        width: WIDTH,
        height: 250,
        // height: HEIGHT*0.25,
    },

    titleDiscovery: {
        color: '#000',
        fontWeight: 'bold',
        marginTop: 48,
        marginHorizontal: 16,
        marginVertical: 8,
    },
    swipeBtnDiscovery: {
        flexDirection: 'row', 
        marginHorizontal: 16, 
        marginVertical: 10,},
    btnDiscovery: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        color: '#000',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    activeBtnDiscovery: {
        color: '#FF7900',
        backgroundColor: '#EEE',
        borderRadius: 20,
    },
    banner: {
        width: 150,
        height: 150,
        borderRadius: 8,
    },
    title: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        marginVertical: 8,
        color: '#000',
        width: 150,
    },
    date: {
        paddingLeft: 8,
        marginBottom: 16,
    }
})

export default styles;
