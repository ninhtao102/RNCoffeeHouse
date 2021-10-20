import { Dimensions, StyleSheet } from "react-native";

const { HEIGHT, WIDTH } = Dimensions.get('window');

const styles = StyleSheet.create({
    locationImages: {
        width: WIDTH,
        height: 320,
        resizeMode: 'cover',
    },
    name: {
        fontSize: 12,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    store: {
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold'
    }
})

export default styles;