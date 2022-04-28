
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';

const FirstPage = ({navigation}) => {
  const [userName, setUserName] = useState('Александр');

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={[styles.container, styles.padd]}>
        <Text style={styles.heading}>
          React Native Передает значение с одного экрана на другой с помощью React Navigation
        </Text>
        <Text style={styles.textStyle}>
          Введите ваше имя для передачи на другой экран
        </Text>
        {}
        <TextInput
          value={userName}
          onChangeText={(username) => setUserName(username)}
          placeholder={'Введите значение'}
          style={styles.inputStyle}
        />
        {}
        <Button
          title="Следующая страница"
          onPress={() =>
            navigation.navigate('SecondPage', {
              paramKey: userName,
            })
          }
        />
      </View>
      
    </SafeAreaView>
  );
};

export default FirstPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 10,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 10,
  },
  padd: {
    bottom: -100,

  },
  inputStyle: {
    width: '80%',
    height: 44,
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#fff',
  },
});
