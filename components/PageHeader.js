import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native';

const PageHeader = (props) => {
    return (
        <>
            <StatusBar barStyle='light-content' />
            <View style={styles.header}>
                <Text style={styles.title}>
                    {props.title}
                </Text>
            </View>
        </>
    )
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 100,
        backgroundColor: '#f39c12',    
    },
    title: {   
        marginTop: 60,
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    }
});

export default PageHeader