import { Dimensions, StyleSheet } from 'react-native'

const WIDTH = Dimensions.get('window').width;


const styles = StyleSheet.create({
    codeView: {
        marginHorizontal: 16,
        marginVertical: 16,
        backgroundColor: '#FFF',
        borderRadius: 16,
    },
    btnGroup: {
        paddingHorizontal: 16,
        paddingVertical: 16,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    btnItem: {
        margin: 4,
        padding: 16,
        width: WIDTH*0.43,
        backgroundColor: '#FFF',
        borderRadius: 8,
    },
    btnInfo: {
        marginTop: 8,
        color: '#000',
        fontWeight: 'bold',
    },
    content: {
        marginHorizontal: 16, 
        flexDirection: 'row', 
        justifyContent: 'space-between',
    },
    titleContent: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
    },
    btnMore: {
        padding: 8,
        backgroundColor: '#E7DAC9',
        color: '#FF6600',
        fontWeight: 'bold',
        borderRadius: 36,
    },
    voucher: {
        marginVertical: 4,
        marginHorizontal: 16,
        padding: 16,
        borderRadius: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#FFF'
    },
    stylevoucher: {
        marginHorizontal: 16,
        marginVertical: 4,
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 8,
        backgroundColor: '#FFF'
    },
    voucherInfo: {
        marginHorizontal: 16,
        fontSize: 16,
        color: '#000', 
        width: WIDTH*0.55,
    },
    voucherImages: {
        width: WIDTH*0.2,
        height: WIDTH*0.2,
        borderRadius: 4,
    }
})

export default styles;