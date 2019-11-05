import React, {Component} from 'react';
import {SectionList, StyleSheet, Text, View} from 'react-native';

export default class SectionListBasics extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.title}>It's a great day for coffee!</Text>
        <SectionList
          sections={[
            {title: 'REWARD POINTS', data: ['300 PTS']},
            {
              title: '01-NOV',
              data: [
                'Jackson',
                'James',
                'Jillian',
                'Jimmy',
                'Joel',
                'John',
                'Julie',
              ],
            },
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => (
            <Text style={styles.sectionHeader}>{section.title}</Text>
          )}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    margin: 20,
  },
  root: {
    flex: 1,
    backgroundColor: '#324a59',
  },
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 40,
    marginLeft: 10,
  },
  sectionHeader: {
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5,
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#21394a',
    color: 'white',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 50,
    color: 'white',
    textTransform: 'uppercase',
    borderBottomColor: '#21394a',
    borderBottomWidth: 1,
  },
});
