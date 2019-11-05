import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomSlider from '../../components/CustomSlider';
import CustomCarousel from '../../components/CustomCarousel';
import Dash from 'react-native-dash';
import {ENTRIES1} from '../../components/CustomCarousel/entries';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#324a59',
    justifyContent: 'space-evenly',
  },
  menu: {
    flex: 1,
  },
  title: {
    fontSize: 35,
    color: 'white',
    marginLeft: 20,
    marginTop: 30,
    fontWeight: 'bold',
  },
  icon: {
    marginLeft: 20,
    marginTop: 20,
  },
  sliderContainer: {
    height: 150,
    minWidth: 150,
    marginLeft: 15,
    marginTop: 100,
  },
  priceLine: {
    flexDirection: 'row',
    alignContent: 'center',
    marginTop: 15,
  },
  label: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
    minWidth: 70,
  },
  coffeeIcon: {
    marginTop: 3,
    marginRight: 5,
  },
  dash: {
    flex: 1,
    paddingTop: 10,
    marginLeft: 5,
    marginRight: 5,
  },
  carouselContainer: {
    flex: 1,
  },
});

class OrderScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPanel: 1,
    };
  }

  handlePanelChange = index => {
    this.setState({currentPanel: index});
  };

  render() {
    return (
      <View style={styles.root}>
        <StatusBar backgroundColor="#324a59" barStyle="light-content" />
        <Text style={styles.title}>
          TODAY {'\n'}
          COFFEE
        </Text>
        <View style={styles.sliderContainer}>
          <CustomSlider
            color="white"
            leftLabel="LIGHT"
            rightLabel="STRONG"
            minValue={1}
            maxValue={10}
            currValue={ENTRIES1[this.state.currentPanel].strength}
          />
          <CustomSlider
            color="white"
            leftLabel="ACID"
            rightLabel="BITTER"
            minValue={1}
            maxValue={10}
            currValue={ENTRIES1[this.state.currentPanel].acidity}
          />
          <View style={styles.priceLine}>
            <Icon
              name="coffee"
              size={15}
              color={'white'}
              style={styles.coffeeIcon}
            />
            <Text style={styles.label}>X1 </Text>
            <Dash
              style={styles.dash}
              dashColor="white"
              dashLength={2}
              dashGap={6}
            />
            <Text style={styles.label}>
              {`$${ENTRIES1[this.state.currentPanel].price.toFixed(1)}`}
            </Text>
          </View>
        </View>
        <View style={styles.carouselContainer}>
          <CustomCarousel handlePanelChange={this.handlePanelChange} />
        </View>
      </View>
    );
  }
}

export default OrderScreen;
