import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Svg, { Circle, Line, Text as SvgText } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

const SetTimeScreen = ({ route }:any) => {
    const navigation = useNavigation();
    const { addTime } = route.params;
    const [selectedDay, setSelectedDay] = useState('Sunday');
    const [description, setDescription] = useState('');
    const [sleepHours, setSleepHours] = useState(8);
    const [sleepMinutes, setSleepMinutes] = useState(0);
    const [wakeHours, setWakeHours] = useState(6);
    const [wakeMinutes, setWakeMinutes] = useState(0);

    const saveTime = () => {
        const sleepTime = `${sleepHours.toString().padStart(2, '0')}:${sleepMinutes.toString().padStart(2, '0')}`;
        const wakeTime = `${wakeHours.toString().padStart(2, '0')}:${wakeMinutes.toString().padStart(2, '0')}`;
        
        addTime(sleepTime, wakeTime, description, selectedDay, true);

        alert('Time saved successfully!');
        navigation.goBack();
    };

    const renderAnalogClock = (hours: any, minutes: any) => {
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
                    fontSize="8"
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
                <Svg height="100" width="100" viewBox="0 0 100 100">
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

            <View style={styles.timeSection}>
                <View style={styles.timePickerContainer}>
                    <Text style={styles.subtitle}>Sleep Time</Text>
                    {renderAnalogClock(sleepHours, sleepMinutes)}
                    <View style={styles.pickerContainer}>
                        <View style={styles.timePickerRow}>
                            <Picker selectedValue={sleepHours} style={styles.picker} onValueChange={(itemValue) => setSleepHours(itemValue)}>
                                {[...Array(24)].map((_, index) => (
                                    <Picker.Item key={index} label={String(index).padStart(2, '0')} value={index} />
                                ))}
                            </Picker>
                            <Text>:</Text>
                            <Picker selectedValue={sleepMinutes} style={styles.picker} onValueChange={(itemValue) => setSleepMinutes(itemValue)}>
                                {[...Array(60)].map((_, index) => (
                                    <Picker.Item key={index} label={String(index).padStart(2, '0')} value={index} />
                                ))}
                            </Picker>
                        </View>
                    </View>
                </View>

                <View style={styles.timePickerContainer}>
                    <Text style={styles.subtitle}>Wake Time</Text>
                    {renderAnalogClock(wakeHours, wakeMinutes)}
                    <View style={styles.pickerContainer}>
                        <View style={styles.timePickerRow}>
                            <Picker selectedValue={wakeHours} style={styles.picker} onValueChange={(itemValue) => setWakeHours(itemValue)}>
                                {[...Array(24)].map((_, index) => (
                                    <Picker.Item key={index} label={String(index).padStart(2, '0')} value={index} />
                                ))}
                            </Picker>
                            <Text>:</Text>
                            <Picker selectedValue={wakeMinutes} style={styles.picker} onValueChange={(itemValue) => setWakeMinutes(itemValue)}>
                                {[...Array(60)].map((_, index) => (
                                    <Picker.Item key={index} label={String(index).padStart(2, '0')} value={index} />
                                ))}
                            </Picker>
                        </View>
                    </View>
                </View>
            </View>

            <Picker selectedValue={selectedDay} style={styles.input} onValueChange={setSelectedDay}>
                <Picker.Item label="Sunday" value="Sunday" />
                <Picker.Item label="Monday" value="Monday" />
                <Picker.Item label="Tuesday" value="Tuesday" />
                <Picker.Item label="Wednesday" value="Wednesday" />
                <Picker.Item label="Thursday" value="Thursday" />
                <Picker.Item label="Friday" value="Friday" />
                <Picker.Item label="Saturday" value="Saturday" />
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
        marginVertical: 10,
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
    },
    clockContainer: {
        alignItems: 'center',
        marginVertical: 10,
    },
    timeSection: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: 10,
    },
    timePickerContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    pickerContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    timePickerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 5,
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
        width: 50,
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
        fontWeight: 'bold',
    },
});

export default SetTimeScreen;