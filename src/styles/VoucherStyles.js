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
        paddingHorizontal: 12,
        paddingVertical: 16,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    btnItem: {
        margin: 4,
        padding: 16,
        width: WIDTH*0.45,
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
    
})

export default styles;