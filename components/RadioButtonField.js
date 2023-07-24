import React from 'react'
import { StyleSheet, Text } from 'react-native';
import RadioForm from 'react-native-simple-radio-button'

const RadioButtonField = (props) => {
    return (
        <>
            <Text style={styles.label}>{props.label}</Text>
            <RadioForm style={styles.radioButton}
                radio_props={props.datasource}
                initial={props.value}
                animation={true}
                buttonColor='gainsboro'
                selectedButtonColor='#f39c12'
                formHorizontal={true}
                labelStyle={{fontSize: 17, paddingRight: 30}}
                buttonSize={15}
                onPress={props.onClickButton}
            />
        </>
    )
}

const styles = StyleSheet.create({
    radioButton: {
        marginBottom: 20,
    },
    label: {
        paddingBottom: 10,
        fontSize: 17,
    }
});

export default RadioButtonField