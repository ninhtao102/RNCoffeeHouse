import { Dimensions, StyleSheet } from 'react-native'

const WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
    codeUsers: {
        marginHorizontal: 16,
        marginVertical: 16,
        marginBottom: 64,
    },
    content: {
        backgroundColor: '#FFF', 
        borderTopLeftRadius: 16, 
        borderTopRightRadius: 16,
        shadowColor: "#000",
        shadowOpacity: 1,
        elevation: 24,
    },
    scroll: {
        backgroundColor: '#DDD',
        margin: 8,
        alignSelf: 'center',
        width: WIDTH*0.12,
        height: 6,
        borderRadius: 8,
    },
    option: {
        borderWidth: 1,
        borderColor: '#CCC',
        borderRadius: 8,
        marginHorizontal: 16,
        marginBottom: 16,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    icon: {
        width: 80,
        height: 80,
    },
    bannerList: {
        marginBottom: 10,
        height: 360,
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
    titleDiscovery: {
        color: '#000',
        fontWeight: 'bold',
        marginTop: 36,
        marginHorizontal: 16,
    },
    swipeBtnDiscovery: {
        flexDirection: 'row', 
        marginHorizontal: 16, 
        marginVertical: 10,
    },
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
        paddingHorizontal: 16,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between',
    },
    bannerImages: {
        width: WIDTH*0.44,
        height: WIDTH*0.44,
        borderRadius: 8,
    },
    title: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        marginVertical: 8,
        color: '#000',
        width: WIDTH*0.4,
    },
    date: {
        paddingLeft: 8,
        marginBottom: 16,
    }
})

export default styles;
