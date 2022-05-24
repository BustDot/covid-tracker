import React, { useState, useEffect } from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, ScrollView, View } from 'react-native';
import { Button, Card, ListItem, List, StyleService, Divider, Icon, Input, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { styles } from '../Home';
import { getImageSourceProperties } from 'react-native/Libraries/Image/ImageSource';

const BackIcon = (props) => (
  <Icon {...props} name='arrow-back' />
);

const DATA = new Array(8).fill({
    title: 'Item',
    description: 'Description for Item',
});


export const Detail = ({ navigation, route }) => {
  const {item} = route.params;
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
  const [inputComment, setInputComment] = useState();
  const [comments, setComments] = useState();
//   const [imagePath, setImagePath] = useState();
  var imagePath;
  const user = [];
  useEffect(() => {
    fetchData();
    
    }, []); 

  async function fetchData() {
    let getData = await fetch('http://101.35.20.193:8088/comment/all/?needId='+item.needId);
    let resComment = await getData.json();
    setComments(resComment);
    // for(var comment of resComment) {
    //     let getUser = await fetch('http://101.35.20.193:8088/user/id/'+comment.userId);
    //     let resUser = await getUser.json();
    //     user.push(resUser)
    // }
    for(var comment of resComment) {
        comment.createdTime = comment.createdTime.slice(0, 10) +' '+comment.createdTime.slice(11, 16);
    }
    console.log(resComment)
    // console.log("user")
    // console.log(user)
  }  

  const navigateBack = () => {
    console.log(route.params);
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
  );
  
  const renderItemHeader = (headerProps, info) => (
    <View {...headerProps}>
      <Text category='h6'>{info.user.userName}</Text>
      <Text category='p2' appearance='hint'>{info.createdTime}</Text>
    </View>
  );

  const renderItemFooter = (item) => {
    // console.log(index);
    // console.log(parseInt(index));
    // console.log(user.at(parseInt(index)));
    // console.log(user.at(parseInt(index)).userName);
      return (
        <Text>
          {item.user.userName}
        </Text>
      );
  };
    


  const addComment = (inputComment) => {
    if(inputComment!=undefined) {
        console.log(inputComment);
        fetch('http://101.35.20.193:8088/comment/add?commentText='+inputComment+'&userId='+'1528761029134766081'+'&needId='+item.needId, {
        method: 'PUT',
        })
        .then(response => {
            console.log(response);
        })
    }
  };
   
  const renderItemAccessory = (inputComment) => {
    return (
      <Button size='small' onPress={() => addComment(inputComment)}>Submit</Button>
    )
  };
  const renderItem = ({item, index}) => (
    //   console.log(item);
    <Card
    //   style={styles.item}
      status='basic'
      header={headerProps => renderItemHeader(headerProps, item)}
    //   footer={() => renderItemFooter(item)}>
      >
      <Text>{item.commentText}</Text>
    </Card>
    );

  return (
    <Layout style={{flex:1}}>
        <SafeAreaView>
        <TopNavigation title='Need Detail' alignment='center' accessoryLeft={BackAction}/>
        <Divider/>
            <ScrollView>
            {/* <Text style={style.titleLabel} category='h4'>{item.title}</Text> */}
            <Text style={style.titleLabel} category='h2'>Title</Text>
                <Text style={style.descriptionLabel} category='h4'>{item.category}</Text>
                <Text style={style.contentLabel} category='s1'>{item.description}</Text>
                <ImageBackground style={style.image} source={imagePath}/>
                <View style={style.authoringContainer}>
                    <Text category='p2' appearance='hint'>{item.tel}</Text>
                    <Text category='p2' appearance='hint'>{item.timeLimit}</Text>
                </View>
                <Text style={style.commentText} category='h4'>Comments</Text>
                <Input
                    textStyle={{minHeight: 150}}
                    style={style.commentInput}
                    placeholder='Write your comment'
                    value={inputComment}
                    onChangeText={setInputComment}
                    accessoryRight={() => renderItemAccessory(inputComment)}
                />
                <Divider/>
            <List  
            
                style={{marginLeft: 5, marginRight:5}}
                data={comments}
                ItemSeparatorComponent={Divider}
                renderItem={renderItem}
            />
            </ScrollView>
        </SafeAreaView>
    </Layout>
    
  );
};

const style = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'background-basic-color-2',
      paddingBottom: 8,
    },
    list: {
      flex: 1,
    },
    header: {
      marginBottom: 8,
    },
    image: {
      height: 240,
      marginTop: 20,
      marginBottom: 40,
    },
    titleLabel: {
      marginHorizontal: 24,
      marginVertical: 8,
    },
    descriptionLabel: {
      fontSize: 20,
      marginHorizontal: 24,
      marginTop: 8,
    },
    contentLabel: {
      margin: 24,
    },
    authoringContainer: {
      flexDirection: 'row',
      marginHorizontal: 24,
    },
    commentText: {
      marginTop: 10,
      marginHorizontal: 24,
    },
    dateLabel: {
      marginHorizontal: 8,
    },
    commentInputLabel: {
      fontSize: 16,
      marginBottom: 8,
      color: 'text-basic-color',
    },
    commentInput: {
      marginHorizontal: 24,
      marginTop: 10,
      marginBottom: 20,
    },
  });
  