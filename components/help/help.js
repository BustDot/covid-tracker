import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Button, Icon, TopNavigation, TopNavigationAction, Layout, Divider, List, ListItem } from '@ui-kitten/components';
import  {DeviceEventEmitter} from 'react-native';
import ImageOverlay from 'react-native-image-overlay';
import '../user';

const StarIcon = (props) => (
  <Icon {...props} name='message-square-outline'/>
);

export default function Help({ navigation }) {
  const [data, setData] = useState();
  useEffect(() => {
      fetchData();
     DeviceEventEmitter.addListener("EventType", ()=>{
        fetchData();
    });
  }, []);

  async function fetchData() {
      let getData = await fetch('http://101.35.20.193:8088/need/all');
      let res = await getData.json();
      setData(res);
  }

  const navigateSubmit = () => {
    if (global.isLogin===true)
      navigation.navigate('Submit');
    else
      navigation.navigate('SignIn');
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

const renderItem = ({item}) => {
    var imagePath;
    if(item.category =='Medicine') {
      let rand = parseInt(item.needId/100)%10;
      if(rand == 0)   imagePath = require('./extra/Medicine0.jpg');
      if(rand == 1)   imagePath = require('./extra/Medicine1.jpg');
      if(rand == 2)   imagePath = require('./extra/Medicine2.jpg');
      if(rand == 3)   imagePath = require('./extra/Medicine3.jpg');
      if(rand == 4)   imagePath = require('./extra/Medicine4.jpg');
      if(rand == 5)   imagePath = require('./extra/Medicine5.jpg');
      if(rand == 6)   imagePath = require('./extra/Medicine6.jpg');
      if(rand == 7)   imagePath = require('./extra/Medicine7.jpg');
      if(rand == 8)   imagePath = require('./extra/Medicine8.jpg');
      if(rand == 9)   imagePath = require('./extra/Medicine9.jpg');
    } else if(item.category == 'Nursery') {
      let rand = parseInt(item.needId/100)%10;
      if(rand == 0)   imagePath = require('./extra/Nursery0.jpg');
      if(rand == 1)   imagePath = require('./extra/Nursery1.jpg');
      if(rand == 2)   imagePath = require('./extra/Nursery2.jpg');
      if(rand == 3)   imagePath = require('./extra/Nursery3.jpg');
      if(rand == 4)   imagePath = require('./extra/Nursery4.jpg');
      if(rand == 5)   imagePath = require('./extra/Nursery5.jpg');
      if(rand == 6)   imagePath = require('./extra/Nursery6.jpg');
      if(rand == 7)   imagePath = require('./extra/Nursery7.jpg');
      if(rand == 8)   imagePath = require('./extra/Nursery8.jpg');
      if(rand == 9)   imagePath = require('./extra/Nursery9.jpg');
    } else if(item.category == 'Service') {
      let rand = parseInt(item.needId/100)%10;
      if(rand == 0)   imagePath = require('./extra/Service0.jpg');
      if(rand == 1)   imagePath = require('./extra/Service1.jpg');
      if(rand == 2)   imagePath = require('./extra/Service2.jpg');
      if(rand == 3)   imagePath = require('./extra/Service3.jpg');
      if(rand == 4)   imagePath = require('./extra/Service4.jpg');
      if(rand == 5)   imagePath = require('./extra/Service5.jpg');
      if(rand == 6)   imagePath = require('./extra/Service6.jpg');
      if(rand == 7)   imagePath = require('./extra/Service7.jpg');
      if(rand == 8)   imagePath = require('./extra/Service8.jpg');
      if(rand == 9)   imagePath = require('./extra/Service9.jpg');
    } else if(item.category == 'Food') {
      let rand = parseInt(item.needId/100)%10;
      if(rand == 0)   imagePath = require('./extra/Food0.jpg');
      if(rand == 1)   imagePath = require('./extra/Food1.jpg');
      if(rand == 2)   imagePath = require('./extra/Food2.jpg');
      if(rand == 3)   imagePath = require('./extra/Food3.jpg');
      if(rand == 4)   imagePath = require('./extra/Food4.jpg');
      if(rand == 5)   imagePath = require('./extra/Food5.jpg');
      if(rand == 6)   imagePath = require('./extra/Food6.jpg');
      if(rand == 7)   imagePath = require('./extra/Food7.jpg');
      if(rand == 8)   imagePath = require('./extra/Food8.jpg');
      if(rand == 9)   imagePath = require('./extra/Food9.jpg');
    } else if(item.category == 'Electronic products') {
      let rand = parseInt(item.needId/100)%10;
      if(rand == 0)   imagePath = require('./extra/ep0.jpg');
      if(rand == 1)   imagePath = require('./extra/ep1.jpg');
      if(rand == 2)   imagePath = require('./extra/ep2.jpg');
      if(rand == 3)   imagePath = require('./extra/ep3.jpg');
      if(rand == 4)   imagePath = require('./extra/ep4.jpg');
      if(rand == 5)   imagePath = require('./extra/ep5.jpg');
      if(rand == 6)   imagePath = require('./extra/ep6.jpg');
      if(rand == 7)   imagePath = require('./extra/ep7.jpg');
      if(rand == 8)   imagePath = require('./extra/ep8.jpg');
      if(rand == 9)   imagePath = require('./extra/ep9.jpg');
    }else if(item.category == 'Pet supplies') {
      let rand = parseInt(item.needId/100)%10;
      if(rand == 0)   imagePath = require('./extra/Pet0.jpg');
      if(rand == 1)   imagePath = require('./extra/Pet1.jpg');
      if(rand == 2)   imagePath = require('./extra/Pet2.jpg');
      if(rand == 3)   imagePath = require('./extra/Pet3.jpg');
      if(rand == 4)   imagePath = require('./extra/Pet4.jpg');
      if(rand == 5)   imagePath = require('./extra/Pet5.jpg');
      if(rand == 6)   imagePath = require('./extra/Pet6.jpg');
      if(rand == 7)   imagePath = require('./extra/Pet7.jpg');
      if(rand == 8)   imagePath = require('./extra/Pet8.jpg');
      if(rand == 9)   imagePath = require('./extra/Pet9.jpg');
    } else if(item.category == 'others') {
      let rand = parseInt(item.needId/100)%10;
      if(rand == 0)   imagePath = require('./extra/Others0.jpg');
      if(rand == 1)   imagePath = require('./extra/Others1.jpg');
      if(rand == 2)   imagePath = require('./extra/Others2.jpg');
      if(rand == 3)   imagePath = require('./extra/Others3.jpg');
      if(rand == 4)   imagePath = require('./extra/Others4.jpg');
      if(rand == 5)   imagePath = require('./extra/Others5.jpg');
      if(rand == 6)   imagePath = require('./extra/Others6.jpg');
      if(rand == 7)   imagePath = require('./extra/Others7.jpg');
      if(rand == 8)   imagePath = require('./extra/Others8.jpg');
      if(rand == 9)   imagePath = require('./extra/Others9.jpg');
    }
    return ( 
      <ImageOverlay
        style={{marginTop:10}}
        source={imagePath}

        contentPosition='top'
        // description={item.description}
        // accessoryRight={() => renderItemAccessory(item)}
        onPress={() => navigateDetail(item)}>
        <Text style={{fontWeight: 'bold', fontSize: 30, textAlign:'left'}}>{item.title}</Text>
        <Text>{item.description}</Text>
        <Button size='giant'style={{marginTop: 180, marginLeft:300}} onPress={() => navigateDetail(item)} appearance='ghost' accessoryLeft={StarIcon}></Button>
      </ImageOverlay>)
   };

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
