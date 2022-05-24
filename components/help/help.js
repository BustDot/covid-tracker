import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Icon, TopNavigation, TopNavigationAction, Layout, Divider, List, ListItem } from '@ui-kitten/components';

export default function Help({ navigation }) {
  const [data, setData] = useState();
  useEffect(() => {
      fetchData()
  }, []);

  async function fetchData() {
      let getData = await fetch('http://101.35.20.193:8088/need/all');
      let res = await getData.json();
      setData(res);
      console.log(res)
  }

  const navigateSubmit = () => {
    navigation.navigate('Submit');
  };

  const navigateDetail =(item) => {
    console.log(item)
    navigation.navigate('Detail', {item});
  }

  const EditIcon = (props) => (
    <Icon onPress={navigateSubmit} {...props} name='edit'/>
  );

  const renderRightActions = () => (
    <React.Fragment>
      <TopNavigationAction icon={EditIcon}/>
    </React.Fragment>
  );

  const renderItemAccessory = (item) => {
    return (
      <Button size='small' onPress={() => navigateDetail(item)}>DETAIL</Button>
    )
  };

  const renderItem = ({item}) => (
    <ListItem
      title={item.category}
      description={item.description}
      accessoryRight={() => renderItemAccessory(item)}
    />
  );

  return (
    <Layout style={styles.container} level='2'>
      <TopNavigation
        alignment='center'
        title='Help'
        accessoryRight={renderRightActions}
      />
      <Divider/>
      <List
        data={data}
        ItemSeparatorComponent={Divider}
        renderItem={renderItem}
        style={{marginLeft: 5, marginRight:5}}
      />
    </Layout>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
