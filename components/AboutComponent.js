import React, { Component } from 'react';
import { View, Text, ScrollView,FlatList } from 'react-native';
import { Card,ListItem } from 'react-native-elements';
import {LEADERS } from '../shared/leaders';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { Loading } from './LoadingComponent';
import * as Animatable from 'react-native-animatable';


const mapStateToProps = state => {
    return {
      leaders: state.leaders
    }
  }

class About extends Component {

    


    render(){

        const renderLeaderItem = ({item, index}) => {

            return (
                <ListItem
                key={index}
                title={item.name}
                subtitle={item.description}
                hideChevron={true}
                leftAvatar={{source: {uri: baseUrl + item.image}}}
              />
            );
        };
        if (this.props.leaders.isLoading) {
            return(
                <ScrollView>
                    <History />
                    <Card
                        title='Corporate Leadership'>
                        <Loading />
                    </Card>
                </ScrollView>
            );
        }
        else if (this.props.leaders.errMess) {
            return(
                <ScrollView>
                    <History />
                    <Card
                        title='Corporate Leadership'>
                        <Text>{this.props.leaders.errMess}</Text>
                    </Card>
                </ScrollView>
            );
        }
        else {
            return(
                <ScrollView>
                    <Animatable.View animation="fadeInDown" duration={2000}>
                    <History />
                    <CorporateLeadership 
                        leaders={this.props.leaders.leaders} 
                        isLoading={this.props.leaders.isLoading}
                        errMess={this.props.leaders.errMess}
                    />
                </Animatable.View> 
                </ScrollView>
            );
        }
    }
}


export default connect(mapStateToProps)(About);