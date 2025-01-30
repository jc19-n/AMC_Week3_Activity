import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const TextInputExample = () => {
  const [name, onChangeName] = React.useState('');
  const [age, onChangeAge] = React.useState('');
  const [address, onChangeAddress] = React.useState('');
  const [school, onChangeSchool] = React.useState('');
  const [course, onChangeCourse] = React.useState('');
  const [email, onChangeEmail] = React.useState('');
  const [contactno, onChangeContactNo] = React.useState('');
  const [value, onChangeText] = React.useState('Useless Multiline Placeholder');

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeName}
          value={name}
          placeholder="Name:"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeAge}
          value={age}
          placeholder="Age:"
          keyboardType="numeric"
        />
                <TextInput
          style={styles.input}
          onChangeText={onChangeAddress}
          value={address}
          placeholder="Address:"

        />
                        <TextInput
          style={styles.input}
          onChangeText={onChangeSchool}
          value={school}
          placeholder="School:"

        />
                                <TextInput
          style={styles.input}
          onChangeText={onChangeCourse}
          value={course}
          placeholder="Course:"

        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
          placeholder="Email:"

        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeContactNo}
          value={contactno}
          placeholder="Contact No.:"

        />
                <TextInput
          editable
          multiline
          numberOfLines={4}
          maxLength={500}
          onChangeText={text => onChangeText(text)}
          value={value}
          style={styles.textInput}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  textInput: {
    margin: 12,
    padding: 10,
    borderWidth: 1,
  },
});

export default TextInputExample;