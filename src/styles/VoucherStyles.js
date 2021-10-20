import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    codeView: {
        marginHorizontal: 16,
        marginVertical: 16,
        backgroundColor: '#FFF',
        borderRadius: 16,
    },
    btnGroup: {
        paddingHorizontal: 12,
        paddingVertical: 16,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    btnItem: {
        margin: 4,
        padding: 16,
        width: 160,
        backgroundColor: '#FFF',
        borderRadius: 8,
    },
    btnInfo: {
        marginTop: 8,
        color: '#000',
        fontWeight: 'bold',
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
        width: 180,
    },
    voucherImages: {
        width: 100,
        height: 100,
        borderRadius: 4,
    }
})

export default styles;