import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Icon, TopNavigation, TopNavigationAction, Layout, Divider, List, ListItem } from '@ui-kitten/components';


const EditIcon = (props) => (
  <Icon {...props} name='edit'/>
);

export default function Help() {
  const [data, setData] = useState();
  useEffect(() => {
      fetchData()
  }, []);

  async function fetchData() {
      let getData = await fetch('http://101.35.20.193:8088/need/all');
      let res = await getData.json();
      setData(res);
  }

  const renderRightActions = () => (
    <React.Fragment>
      <TopNavigationAction icon={EditIcon}/>
    </React.Fragment>
  );

  const renderItem = ({item}) => (
    <ListItem
      title={item.category}
      description={item.description}
    />
  );

  return (
    <Layout style={styles.container}>
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
