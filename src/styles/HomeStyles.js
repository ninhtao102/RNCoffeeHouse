import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    codeUser: {
        backgroundColor: '#ff9e00',
        marginHorizontal: 16,
        marginVertical: 16,
        marginBottom: 100,
        marginTop: 50,
        paddingHorizontal: 8,
        borderRadius: 20,
    },
    addPoint: {
        width: 100,
        padding: 8,
        left: 200,
        color: '#FFF',
        backgroundColor: '#ff6d00',
        borderWidth: 1,
        borderTopWidth: 0,
        borderColor: '#CCC',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        flexDirection: 'row',
    },
    codeInfo: {
        color: '#FFF',
        marginLeft: 8,
    },
    barcode: {
        width: 220,
        height: 40,
        alignSelf: 'center',
    },
    code: {
        backgroundColor: '#FFF',
        height: 100,
        padding: 16,
        marginVertical: 16,
        marginHorizontal: 8,
        borderRadius: 10,
    },
    content: {
        backgroundColor: '#FFF', borderTopLeftRadius: 16, borderTopRightRadius: 16,
        shadowColor: "#000",
        shadowOpacity: 1,
        elevation: 24,
    },
    option: {
        borderWidth: 1,
        borderColor: '#CCC',
        borderRadius: 20,
        marginHorizontal: 16,
        marginVertical: 16,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    icon: {
        width: 80,
        height: 80
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
    bannerImage: {
        width: 325,
        height: 200, 
        borderRadius: 20,
        marginHorizontal: 16,
        // shadowColor: "#000",
        // shadowOpacity: 1,
        // elevation: 24,
    },
    titleDiscovery: {
        color: '#000',
        fontWeight: 'bold',
        marginTop: 48,
        marginHorizontal: 16,
        marginVertical: 8,
    },
    btnDiscovery: {
        marginVertical: 10,
        marginLeft: 10,
        padding: 8,
        width: 120,
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
