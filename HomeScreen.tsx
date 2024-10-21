import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import { ProgressCircle } from 'react-native-svg-charts';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

type RootStackParamList = {
  Home: undefined;
  SetTime: { addTime: (newTime: string, description: string, selectedDay: string) => void };
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const [times, setTimes] = useState([
    { id: '1', time: '08:00', description: 'for Normal days', selectedDay: 'Sunday', enabled: true },
    { id: '2', time: '09:00', description: 'for Week days', selectedDay: 'Monday', enabled: false },
  ]);

  const addTime = (newTime: string, description: string, selectedDay: string) => {
    const id = (times.length + 1).toString();
    setTimes([...times, { id, time: newTime, description, selectedDay, enabled: true }]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.goalContainer}>
        <Text style={styles.goalText}>Goal: 8 hours per Day</Text>
        <Text style={styles.goalSubText}>in 1 week</Text>
        <ProgressCircle
          style={styles.progressCircle}
          progress={0.8}
          progressColor={'#00BCD4'}
          backgroundColor="#D3F9FD"
        />
        <Text style={styles.percentageText}>80%</Text>
        <Text style={styles.healthStatusText}>Good Health</Text>
      </View>

      <FlatList
        data={times}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Icon name="alarm-outline" size={30} color="#808080" />
            <View style={styles.timeContainer}>
              <Text style={styles.timeText}>{item.time}</Text>
              <Text style={styles.descriptionText}>{item.description}</Text>
              <Text style={styles.dayText}>{item.selectedDay}</Text>
            </View>
            <Switch
              value={item.enabled}
              onValueChange={() => {
                setTimes((prevTimes) =>
                  prevTimes.map((time) => (time.id === item.id ? { ...time, enabled: !time.enabled } : time))
                );
              }}
            />
          </View>
        )}
        keyExtractor={(item) => item.id}
      />

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('SetTime', { addTime })}
      >
        <Icon name="add" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F0FF',
  },
  goalContainer: {
    backgroundColor: '#4C8CD4',
    padding: 20,
    alignItems: 'center',

  },
  goalText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  goalSubText: {
    color: '#fff',
    fontSize: 14,
  },
  progressCircle: {
    height: 100,
    width: 100,
    marginVertical: 10,
  },
  percentageText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  healthStatusText: {
    color: '#fff',
    fontSize: 18,
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#A3D8FF',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
  },
  timeContainer: {
    flex: 1,
    marginLeft: 15,
  },
  timeText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  descriptionText: {
    fontSize: 14,
    color: '#555',
  },
  dayText: {
    fontSize: 12,
    color: '#555',
  },
  addButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: '#00BCD4',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
});
export default HomeScreen;
