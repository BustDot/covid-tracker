import React from 'react';
import { StyleSheet, DeviceEventEmitter } from 'react-native';
import { Icon, Input, Layout, Select, SelectItem, IndexPath, TopNavigation, TopNavigationAction, Divider, Datepicker } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';

const data = [
    'Medicine',
    'Nursery',
    'Service',
    'Food',
    'Electronic products',
    'Pet supplies',
    'others',
];

const useInputState = (initialValue = '') => {
  const [value, setValue] = React.useState(initialValue);
  return { value, onChangeText: setValue };
};

export const Submit = ({ navigation }) => {
  const BackIcon = (props) => (
        <Icon {...props} onPress={() => navigation.goBack()} name='arrow-back'/>
  );

  const renderBackAction = () => (
    <React.Fragment>
        <TopNavigationAction icon={BackIcon}/>
    </React.Fragment>
  );

  const SubmitIcon = (props) => (
    <Icon {...props} onPress={() => Submission()} name='paper-plane-outline'/>
);

  const renderSubmitAction = () => (
    <React.Fragment>
        <TopNavigationAction icon={SubmitIcon}/>
    </React.Fragment>
    );

    const CalendarIcon = (props) => (
      <Icon {...props} name='calendar'/>
    );

  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
  const displayValue = data[selectedIndex.row];
  const renderOption = (title) => (
    <SelectItem title={title}/>
  );

  const titleInputState = useInputState();
  const multilineInputState = useInputState();

  const [date, setDate] = React.useState(new Date());

  const Submission = () => {
    fetch('http://101.35.20.193:8088/need/add', {
    method: 'PUT',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        title: titleInputState.value,
        description: multilineInputState.value,
        category: displayValue,
        tel: "123321",
        timeLimit: date
    })
    })
    .then(response => {
      navigation.goBack();
      DeviceEventEmitter.emit("EventType");
      })
  }
  
  return (
    <Layout style={styles.container}>
        <SafeAreaView>
            <TopNavigation
            alignment='center'
            title='Submit'
            accessoryLeft={renderBackAction}
            accessoryRight={renderSubmitAction}
            />
            <Divider/>
            <Layout style={[styles.rowContainer, {marginTop: 10}]} level='1'>
                <Input
                style={[styles.input, {flex: 1.5}]}
                placeholder='Title'
                {...titleInputState}
                />
                <Select
                    style={styles.select}
                    placeholder='Category'
                    value={displayValue}
                    selectedIndex={selectedIndex}
                    onSelect={index => setSelectedIndex(index)}>
                    {data.map(renderOption)}
                </Select>
            </Layout>
            <Input
                multiline={true}
                textStyle={{ minHeight: 420 }}
                style={{margin:2, textAlignVertical: 'top'}}
                placeholder={'Describe your needs here,' + String.fromCharCode(10) + 'like what you need,' + String.fromCharCode(10) + 'your address,'  + String.fromCharCode(10) + 'and your contact information.'}
                {...multilineInputState}
            />
            <Datepicker
              style={{margin: 2}}
              label='Expire date'
              placeholder='Pick Date'
              date={date}
              onSelect={nextDate => setDate(nextDate)}
              accessoryRight={CalendarIcon}
            />
        </SafeAreaView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    flex: 1,
    margin: 2,
  },
  select: {
    flex: 1,
    margin: 2,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  controlContainer: {
    borderRadius: 4,
    margin: 2,
    padding: 6,
    backgroundColor: '#3366FF',
  },
});