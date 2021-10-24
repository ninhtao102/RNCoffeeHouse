import { StyleSheet } from 'react-native'

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

})

export default styles;
