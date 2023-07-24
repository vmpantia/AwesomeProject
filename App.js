import React, { useState } from 'react';
import { Alert, Button, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';
import TextField from './components/TextField';
import PageHeader from './components/PageHeader';
import PageBody from './components/PageBody';
import ButtonField from './components/ButtonField';

export default function App() {
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    middleName: '',
    lastName: ''
  });

  const onPressLearnMore = () => {
    Alert.alert('Alert Title', userInfo.firstName, [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  }

  const onValueChange = (field, value) => {
    setUserInfo(data => {
      return {...data, [field]: value}
    });
  }
  return (
    <View style={styles.container}>
      <PageHeader title='User Information' />
      <PageBody>
        <TextField label='First Name' value={userInfo.firstName}  placeholder='Enter your First Name' onChangeValue={(value) => onValueChange('firstName', value)} />
        <TextField label='Middle Name' value={userInfo.middleName} placeholder='Enter your Middle Name' onChangeValue={(value) => onValueChange('middleName', value)} />
        <TextField label='Last Name' value={userInfo.lastName} placeholder='Enter your Last Name' onChangeValue={(value) => onValueChange('lastName', value)} />
        <ButtonField value='Save' onClickButton={onPressLearnMore} />
      </PageBody>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
