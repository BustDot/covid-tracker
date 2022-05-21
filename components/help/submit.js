import React from 'react';
import { StyleSheet } from 'react-native';
import { Icon, Input, Layout, Select, SelectItem, IndexPath, TopNavigation, TopNavigationAction, Divider } from '@ui-kitten/components';
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

  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
  const displayValue = data[selectedIndex.row];
  const renderOption = (title) => (
    <SelectItem title={title}/>
  );

  const titleInputState = useInputState();
  const multilineInputState = useInputState();

  const Submission = () => {
    //   console.log(titleInputState.value, displayValue);
    fetch('http://101.35.20.193:8088/need/add', {
    method: 'PUT',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        description: titleInputState.value,
        category: displayValue
    })
    })
    .then(response => {
        console.log(response);
      })
    // fetch('http://101.35.20.193:8088/need/add', {
    // method: 'PUT',
    // headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded'
    // },
    // body: `description=${titleInputState.value}&category=${displayValue}`
    // })
    
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