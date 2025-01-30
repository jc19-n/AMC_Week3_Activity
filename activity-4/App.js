import React from 'react';
import { StyleSheet, TextInput, View, Image } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const TextInputExample = () => {
  const [name, onChangeTextName] = React.useState('NAME: ');
  const [age, onChangeAge] = React.useState('Age: ');
  const [address, onChangeAddress] = React.useState('Address: ');
  const [school, onChangeschool] = React.useState('School: ');
  const [course, onChangeCourse] = React.useState('Course: ');
  const [email, onChangeEmail] = React.useState('Email: ');
  const [contact, onChangeContact] = React.useState('Contact: ');
  const [value, onChangeText] = React.useState('About Me');


  const images = {
    name: 'https://th.bing.com/th?id=OIP.GqGVPkLpUlSo5SmeDogUdwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2;',
    age: 'https://th.bing.com/th/id/OIP.NA2sASZR4fX323OVdZS6oQHaHa?w=200&h=185&c=7&r=0&o=5&pid=1.7;',
    address: 'https://th.bing.com/th?id=OIP.rtUDswLgO9MR4vy573CvUgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2;',
    school: 'https://th.bing.com/th?id=OIP.Y7UkWGS_nKdPkt7sVCjX_gHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2;',
    course: 'https://th.bing.com/th?id=OIP.IkKiIC-46HF7HEbNRtIt2gHaHc&w=249&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2;',
    email: 'https://th.bing.com/th?id=OIP.vY0zRUECiCxHGY91BiLuPAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2;',
    contact: 'https://th.bing.com/th?id=OIP.d0TEpGeBbzPA1jGzqflyHQHaHS&w=251&h=248&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2;',
    aboutme: 'https://th.bing.com/th?id=OIP.bKQ1rODG8I_gfIuPSuXObgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2;',
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={styles.inputRow}>
          <Image source={{ uri: images.name }} style={styles.icon} />
          <TextInput
            style={styles.input}
            onChangeText={onChangeTextName}
            value={name}
            placeholder="Name: "
          />
        </View>
        <View style={styles.inputRow}>
          <Image source={{ uri: images.age }} style={styles.icon} />
          <TextInput
            style={styles.input}
            onChangeText={onChangeAge}
            value={age}
            placeholder="AGE: "
            keyboardType="numeric"
          />
        </View>

       
        <View style={styles.inputRow}>
          <Image source={{ uri: images.address }} style={styles.icon} />
          <TextInput
            style={styles.input}
            onChangeText={onChangeAddress}
            value={address}
            placeholder="Address: "
          />
        </View>

     
        <View style={styles.inputRow}>
          <Image source={{ uri: images.school }} style={styles.icon} />
          <TextInput
            style={styles.input}
            onChangeText={onChangeschool}
            value={school}
            placeholder="School: "
          />
        </View>

     
        <View style={styles.inputRow}>
          <Image source={{ uri: images.course }} style={styles.icon} />
          <TextInput
            style={styles.input}
            onChangeText={onChangeCourse}
            value={course}
            placeholder="Course: "
          />
        </View>

   
        <View style={styles.inputRow}>
          <Image source={{ uri: images.email }} style={styles.icon} />
          <TextInput
            style={styles.input}
            onChangeText={onChangeEmail}
            value={email}
            placeholder="Email: "
          />
        </View>

        <View style={styles.inputRow}>
          <Image source={{ uri: images.contact }} style={styles.icon} />
          <TextInput
            style={styles.input}
            onChangeText={onChangeContact}
            value={contact}
            placeholder="Contact: "
          />
        </View>


        <View style={styles.inputRow}>
          <Image source={{ uri: images.aboutme }} style={styles.icon} />
          <TextInput
            editable
            multiline
            numberOfLines={4}
            maxLength={500}
            onChangeText={text => onChangeText(text)}
            value={value}
            style={styles.textInput}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginLeft: 12,
    borderWidth: 1,
    padding: 10,
    flex: 1,
  },
  textInput: {
    padding: 10,
    margin: 12,
    borderWidth: 1,
    flex: 1,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  icon: {
    width: 35,
    height: 35,
  },
});

export default TextInputExample;