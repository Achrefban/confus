import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class Contact extends Component {

 render() {
        return(
            <View>
            <Card
                title='Contact Information'>
                <Text
                    style={{margin: 10}}>
                        121, Clear Water Bay Road~{"\n"}
                        Clear Water Bay, Kowloon~{"\n"}
                        HONG KONG~{"\n"}
                        Tel: +852 1234 5678~{"\n"}
                        Fax: +852 8765 4321~{"\n"}
                        Email:confusion@food.net             
                 </Text>
            </Card>
            </View>
        );
    }
    
}

export default Contact;