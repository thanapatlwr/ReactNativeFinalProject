import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Svg, { Circle, Line, Text as SvgText } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

const SetTimeScreen = ({ route }:any) => {
  const navigation = useNavigation();
  const { addTime } = route.params; // Get the addTime function from route params
  const [selectedDay, setSelectedDay] = useState('Sunday');
  const [description, setDescription] = useState('');
  const [hours, setHours] = useState(8);
  const [minutes, setMinutes] = useState(0);

  const saveTime = () => {
    const newTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    addTime(newTime, description, selectedDay); // Call the addTime function
    alert('Time saved successfully!');
    navigation.goBack(); // Navigate back to HomeScreen
  };

  const renderAnalogClock = () => {
    const hourRotation = (hours % 12) * 30 + (minutes / 2);
    const minuteRotation = minutes * 6;
    const clockNumbers = [...Array(12)].map((_, index) => {
      const angle = (index * 30) * (Math.PI / 180);
      const x = 50 + 40 * Math.sin(angle);
      const y = 50 - 40 * Math.cos(angle);
      return (
        <SvgText
          key={index}
          x={x}
          y={y}
          fontSize="10"
          fill="black"
          textAnchor="middle"
          alignmentBaseline="middle"
        >
          {index === 0 ? 12 : index}
        </SvgText>
      );
    });

    return (
      <View style={styles.clockContainer}>
        <Svg height="200" width="200" viewBox="0 0 100 100">
          <Circle cx="50" cy="50" r="48" stroke="black" strokeWidth="2" fill="none" />
          <Line x1="50" y1="50" x2="50" y2="15" stroke="black" strokeWidth="2" transform={`rotate(${minuteRotation}, 50, 50)`} />
          <Line x1="50" y1="50" x2="50" y2="25" stroke="black" strokeWidth="3" transform={`rotate(${hourRotation}, 50, 50)`} />
          {clockNumbers}
        </Svg>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Set Time</Text>
      <View style={styles.timePickerContainer}>
        <Picker selectedValue={hours} style={styles.picker} onValueChange={(itemValue) => setHours(itemValue)}>
          {[...Array(24)].map((_, index) => (
            <Picker.Item key={index} label={String(index).padStart(2, '0')} value={index} />
          ))}
        </Picker>
        <Text>:</Text>
        <Picker selectedValue={minutes} style={styles.picker} onValueChange={(itemValue) => setMinutes(itemValue)}>
          {[...Array(60)].map((_, index) => (
            <Picker.Item key={index} label={String(index).padStart(2, '0')} value={index} />
          ))}
        </Picker>
      </View>
      {renderAnalogClock()}
      <Picker selectedValue={selectedDay} style={styles.input} onValueChange={setSelectedDay}>
        <Picker.Item label="Sunday" value="Sunday" />
        <Picker.Item label="Monday" value="Monday" />
        <Picker.Item label="Tuesday" value="Tuesday" />
        <Picker.Item label="Wednesday" value="Wednesday" />
        <Picker.Item label="Thursday" value="Thursday" />
        <Picker.Item label="Friday" value="Friday" />
        <Picker.Item label="Saturday" value="Saturday" />
        {/* Other days... */}
      </Picker>
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <TouchableOpacity onPress={saveTime} style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#E0F0FF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  clockContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  timePickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginVertical: 20,
    backgroundColor: 'white',
  },
  picker: {
    height: 50,
    width: '45%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  saveButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 20,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default SetTimeScreen;