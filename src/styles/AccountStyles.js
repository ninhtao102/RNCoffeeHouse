import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 16,
        backgroundColor: '#EEE',
    },
    title: {
        marginVertical: 16,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000'
    },

    btnExt: {
        // width: 200
        padding: 16,
        backgroundColor: '#FFF',
    },
    extInfo: {
        marginTop: 8,
        color: '#000', 
        fontWeight: 'bold'
    },
    imgExt: {
        width: 20,
        height: 20,
    },
    btnGroup: {
        backgroundColor: '#FFF',
        borderRadius: 6,
    },
    btnItem: {
        margin: 16,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    btnInfo: {
        marginHorizontal: 16,
        color: '#000'
    },
    line: {
        backgroundColor: '#EEE',
        borderBottomWidth: 0.25,
        marginLeft: 16,
    }
})

export default styles;