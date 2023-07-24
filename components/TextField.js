import { useState } from 'react';
import { StyleSheet, Text, TextInput } from 'react-native';

const TextField = (props) => {
    const [isFocus, setIsFocus] = useState(false);
    const handleFocus = () => setIsFocus(true);
    const handleBlur = () => setIsFocus(false);

    return (
        <>
            <Text style={styles.label}>{props.label}</Text>
            <TextInput
                style={[styles.input, isFocus && styles.inputFocused]}
                value={props.value}
                placeholder={props.placeholder}
                keyboardType={props.type ?? 'default'}
                onChangeText={props.onChangeValue}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
        </>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        width: '100%',
        padding: 10,
        marginBottom: 20,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'gainsboro',
        fontSize: 17,
    },
    inputFocused: {
        borderWidth: 1,
        borderColor: '#f39c12'
    },  
    label: {
        paddingBottom: 10,
        fontSize: 17,
    }
});

export default TextField