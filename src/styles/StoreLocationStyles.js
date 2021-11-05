import { Dimensions, StyleSheet } from 'react-native'

const WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#EEE',
        marginHorizontal: 16,
        width: WIDTH*0.7,
        height: 40,
        borderRadius: 10,
        paddingLeft: 42,
        marginBottom: 16,
    },
    icon: {
        top: 30,
        left: 30,
        zIndex: 1,
    },
    btnMap: {
        flexDirection: 'row',
        padding: 16,
        top: 15,
        left: -15,
    },
    txtMap: {
        color: '#000',
        margin: 2,
        paddingLeft: 5,
        fontWeight: 'bold',
    },
    titleContent: {
        marginHorizontal: 16,
        marginVertical: 8,
        marginTop: 20,
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
    },
    locationtItem: {
        flexDirection: 'row',
        backgroundColor: '#FFF',
        borderRadius: 10,
        marginHorizontal: 16,
        marginBottom: 5,
        padding: 16,
    },
    locationImages: {
        width: WIDTH*0.2,
        height: WIDTH*0.2,
        borderRadius: 8,
    },
    locationInfo: {
        marginHorizontal: 16,
    },
    name: {
        width: WIDTH*0.6,
        textTransform: 'uppercase',
        fontSize: 12,
        fontWeight: 'bold',
    },
    location: {
        color: '#000',
        width: WIDTH*0.6,
        fontSize: 16,
        marginBottom: 5,
    }
})

export default styles;