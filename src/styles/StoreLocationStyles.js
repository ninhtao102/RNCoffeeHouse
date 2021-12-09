import { Dimensions, StyleSheet } from 'react-native'

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

const styles = StyleSheet.create({
    input: {
        paddingLeft: 42,
        marginBottom: 16,
        marginHorizontal: 16,
        width: WIDTH*0.7,
        height: 40,
        backgroundColor: '#FFF',
        borderRadius: 10,
    },
    icon: {
        top: 30,
        left: 30,
        zIndex: 1,
    },
    btnMap: {
        padding: 16,
        flexDirection: 'row',
        top: 15,
        left: -15,
    },
    txtMap: {
        margin: 2,
        paddingLeft: 5,
        color: '#000',
        fontWeight: 'bold',
    },
    titleContent: {
        marginTop: 16,
        marginHorizontal: 16,
        marginVertical: 8,
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
    },
    image: {
        width: WIDTH*0.8,
        height: HEIGHT*0.4,
        resizeMode: 'contain',
    },
    imageSingle: {
        width: WIDTH,
        height: HEIGHT*0.4,
        resizeMode: 'contain',
    },
    locationtItem: {
        marginHorizontal: 16,
        marginBottom: 5,
        padding: 16,
        flexDirection: 'row',
        backgroundColor: '#FFF',
        borderRadius: 10,
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
        marginBottom: 5,
        width: WIDTH*0.6,
        color: '#000',
        fontSize: 16,
    }
})

export default styles;