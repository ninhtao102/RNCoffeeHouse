import { Dimensions, StyleSheet } from 'react-native'

const WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
    headerBar: {
        backgroundColor: '#FFF',
        paddingHorizontal: 16,
        flexDirection: 'row'
    },
    icon: {
        width: 50,
        height: 50,
        marginRight: 8
    },
    txtShipping: {
        color: '#000',
        fontWeight: 'bold',
        paddingTop: 2,
    },
    shipping: {
        width: WIDTH*0.75,
    },
    input: {
        width: WIDTH*0.6,
        height: 40,
        paddingLeft: 16,
        backgroundColor: '#EEE',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    searchBar: {width: 40,
        height: 40, 
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EEE', borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
    ionIcons: {
        width: 40,
        height: 40,
        marginLeft: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EEE',
        borderRadius: 10,
    },
    titleContent: {
        marginHorizontal: 16,
        marginVertical: 16,
        fontSize: 18,
        fontWeight: 'bold'
    },
    productItem: {
        marginHorizontal: 16,
        marginBottom: 16,
        paddingHorizontal: 16,
        paddingVertical: 16,
        backgroundColor: '#FFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 8,
    },
    title: {
        fontWeight: 'bold',
        color: '#000',
    },
    description: {
        width: WIDTH*0.6,
        fontSize: 13,
    },
    productsImages: {
        width: WIDTH*0.2,
        height: WIDTH*0.2,
        borderRadius: 8,
    }
})

export default styles;