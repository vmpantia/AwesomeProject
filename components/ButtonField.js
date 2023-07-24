import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const ButtonField = (props) => {
    return (
        <TouchableOpacity onPress={props.onClickButton}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{props.value}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#f39c12',
        borderRadius: 8,
        paddingVertical: 15,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'center',
        fontSize: 16,
    }
});
export default ButtonField