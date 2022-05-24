import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Button, Card, ListItem, List, StyleService, Divider, Icon, Input, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { styles } from '../Home';

const BackIcon = (props) => (
  <Icon {...props} name='arrow-back' />
);

const DATA = new Array(8).fill({
    title: 'Item',
    description: 'Description for Item',
});


export const Detail = ({ navigation, route }) => {
  const {item} = route.params;
  const [inputComment, setInputComment] = useState();
  const [comments, setComments] = useState();
  const user = [];
  useEffect(() => {
    fetchData()
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
      <Text category='h6'>
        {info.title}
      </Text>
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
      footer={() => renderItemFooter(item)}>
      <Text>{index+1}</Text>
      <Text>{item.commentText}</Text>
      <Text>{item.createdTime}</Text>
    </Card>
    );

  return (
    <Layout style={{flex:1}}>
    <SafeAreaView>
      <TopNavigation title='Need Detail' alignment='center' accessoryLeft={BackAction}/>
      <Divider/>
      
        <Text style={style.titleLabel} category='h4'>{item.title}</Text>
        <Text style={style.descriptionLabel}>{item.category}</Text>
        <Text style={style.contentLabel} category='s1'>{item.description}</Text>
        {/* <ImageBackground style={styles.image} source={data.image}/> */}
        
        <View style={style.authoringContainer}>
            <Text category='p2' appearance='hint'>{item.tel}</Text>
            <Text category='p2' appearance='hint'>{item.timeLimit}</Text>
        </View>
        <Input
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
    },
    titleLabel: {
      marginHorizontal: 24,
      marginVertical: 16,
    },
    descriptionLabel: {
      margin: 24,
    },
    contentLabel: {
      margin: 24,
    },
    authoringContainer: {
      flexDirection: 'row',
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
      marginTop: 24,
      marginBottom: 20,
    },
  });
  