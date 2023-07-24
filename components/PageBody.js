import React from 'react'
import { StyleSheet, View } from 'react-native';

const PageBody = (props) => {
    return (
        <View style={styles.body}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        padding: 20
    },
});
export default PageBody