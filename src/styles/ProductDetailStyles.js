import { Dimensions, StyleSheet } from "react-native";

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

const btnGroup = {
    margin: 8,
    padding: 4,
    width: 36,
    height: 36,
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    borderRadius: 8,
    backgroundColor: '#EEE'
}

const styles = StyleSheet.create({
    productImages: {
        width: WIDTH,
        height: 360,
        resizeMode: 'contain',
    },
    productName: {
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold'
    },
    price: {
        fontWeight: 'bold'
    },
    icon: {
        top: 12,
        right: 12,
    },
    productInfo: {
        paddingHorizontal: 16,
        color: '#000',
    },
    title: {
        fontSize: 16,
        color: '#000',
        fontWeight: 'bold',
    },
    option: {
        marginTop: 8,
        padding: 16,
        backgroundColor: '#FFF'
    },
    desc: {
        fontSize: 12,
    },
    input: {
        marginTop: 16,
        paddingLeft: 16,
        height: 40,
        borderWidth: 0.5,
        borderRadius: 8,
    },
    addMoreProduct: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        
    },
    btnAddMore: {
        ...btnGroup,

    },
    addMoreValue: {
        ...btnGroup,
        backgroundColor: '#FFF'
    },
    addProduct: {
        padding: 12,
        backgroundColor: '#FF6600',
        color: '#FFF',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        borderRadius: 16,
    }
})

export default styles;
