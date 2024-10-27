import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import { ProgressCircle } from 'react-native-svg-charts';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
<<<<<<< HEAD
=======

>>>>>>> d2f1642850f7ded464d87873a172ead858137e8a
type RootStackParamList = {
  Home: undefined; 
  SetTime: { addTime: (sleepTime: any, wakeTime: any, description: any, selectedDay: any) => void; }; 
};
<<<<<<< HEAD
const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [times, setTimes] = useState([
    { id: '1', time1: '22:00', time2: '8:00', description: 'for Normal days', selectedDay: 'Sunday', enabled: true },
    { id: '2', time1: '01:00', time2: '11:00', description: 'for Week days', selectedDay: 'Monday', enabled: false },
  ]);
  const [progress, setProgress] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [statusText, setStatusText] = useState(''); 
=======

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [times, setTimes] = useState([
    { id: '1', time1: '08:00', time2: '15:00', description: 'for Normal days', selectedDay: 'Sunday', enabled: true },
    { id: '2', time1: '01:00', time2: '23:00', description: 'for Week days', selectedDay: 'Monday', enabled: false },
  ]);

  const [progress, setProgress] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [statusText, setStatusText] = useState(''); 

>>>>>>> d2f1642850f7ded464d87873a172ead858137e8a
  const calculateSleepData = () => {
    const totalMinutes = times.reduce((acc, item) => {
      const [sleepHours, sleepMinutes] = item.time1.split(':').map(Number);
      const [wakeHours, wakeMinutes] = item.time2.split(':').map(Number);
      
     
<<<<<<< HEAD
      const sleepTimeInMinutes = (sleepHours * 60 + sleepMinutes) - (wakeHours * 60 + wakeMinutes) ;
      if (sleepHours < wakeHours){
        const wakeTimeInMinutes = (wakeHours * 60 + wakeMinutes) - (sleepHours * 60 + sleepMinutes) ;
        return acc + (item.enabled ? wakeTimeInMinutes : 0);
      }else {
        return acc + (item.enabled ? sleepTimeInMinutes : 0);
      }
    }, 0);
    const targetMinutes = 56 * 60;
    const calculatedPercentage = (totalMinutes / targetMinutes) * 100; 
    setProgress(totalMinutes / targetMinutes); 
    setPercentage(Math.min(Math.round(calculatedPercentage), 100)); 
=======
      const sleepTimeInMinutes = (wakeHours * 60 + wakeMinutes) - (sleepHours * 60 + sleepMinutes);
      return acc + (item.enabled ? sleepTimeInMinutes : 0);
    }, 0);

    const targetMinutes = 56 * 60;
    const calculatedPercentage = (totalMinutes / targetMinutes) * 100; 

    setProgress(totalMinutes / targetMinutes); 
    setPercentage(Math.min(Math.round(calculatedPercentage), 100)); 

>>>>>>> d2f1642850f7ded464d87873a172ead858137e8a
    if (calculatedPercentage < 50) {
      setStatusText('Needs Improvement');
    } else if (calculatedPercentage < 75) {
      setStatusText('Satisfactory');
    } else {
      setStatusText('Excellent');
    }
  };
<<<<<<< HEAD
  
=======

  

>>>>>>> d2f1642850f7ded464d87873a172ead858137e8a
  const addTime = (sleepTime: any, wakeTime: any, description: any, selectedDay: any) => {
    const id = (times.length + 1).toString();
    setTimes([...times, { id, time1: sleepTime, time2: wakeTime, description, selectedDay, enabled: true }]);
  };
<<<<<<< HEAD
=======

>>>>>>> d2f1642850f7ded464d87873a172ead858137e8a
  const toggleSwitch = (id: string) => {
    setTimes((prevTimes) =>
      prevTimes.map((item) =>
        item.id === id ? { ...item, enabled: !item.enabled } : item
      )
    );
  };
<<<<<<< HEAD
=======

>>>>>>> d2f1642850f7ded464d87873a172ead858137e8a
  const deleteTime = (id: string) => {
    setTimes((prevTimes) => prevTimes.filter((item) => item.id !== id));
    alert('Delete Time successfully!');
  };
<<<<<<< HEAD
=======

>>>>>>> d2f1642850f7ded464d87873a172ead858137e8a
  const renderItem = ({ item }:any) => (
    <View style={styles.itemContainer}>
      <Icon name="alarm-outline" size={50} color="#808080" />
      <View style={styles.timeContainer}>
        <Text style={styles.timeText}>Sleep {item.time1}</Text>
        <Text style={styles.timeText}>Wakeup {item.time2}</Text>
        <Text style={styles.dayText}>{item.selectedDay}</Text>
        <Text style={styles.descriptionText}>{item.description}</Text>
      </View>
      <Switch
        value={item.enabled}
        onValueChange={() => toggleSwitch(item.id)}
      />
      <TouchableOpacity onPress={() => deleteTime(item.id)}>
        <Icon name="trash-outline" size={25} color="#FF6B6B" style={styles.deleteIcon} />
      </TouchableOpacity>
    </View>
  );
<<<<<<< HEAD
  useEffect(() => {
    calculateSleepData();
  }, [times]);
=======

  useEffect(() => {
    calculateSleepData();
  }, [times]);

>>>>>>> d2f1642850f7ded464d87873a172ead858137e8a
  return (
    <View style={styles.container}>
      <View style={styles.goalContainer}>
        <Text style={styles.goalText}>Goal: 8 hours per Day</Text>
        <Text style={styles.goalSubText}>in 1 week</Text>
        <ProgressCircle
          style={styles.progressCircle}
          progress={progress} 
          progressColor={'#00BCD4'}
          backgroundColor="#D3F9FD"
        />
        <Text style={styles.percentageText}>{percentage}%</Text>
        <Text style={styles.healthStatusText}>{statusText}</Text> 
      </View>
      <FlatList
        data={times}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
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
<<<<<<< HEAD
=======

>>>>>>> d2f1642850f7ded464d87873a172ead858137e8a
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
    fontSize: 14,
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
  deleteIcon: {
    marginLeft: 10,
  },
});
<<<<<<< HEAD
=======

>>>>>>> d2f1642850f7ded464d87873a172ead858137e8a
export default HomeScreen;