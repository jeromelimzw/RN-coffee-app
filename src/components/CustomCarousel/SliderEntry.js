import React, {Component} from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import {withNavigation} from 'react-navigation';
import styles from './SliderEntry.style';
import Dash from 'react-native-dash';

class SliderEntry extends Component {
  image = () => {
    const {
      data: {illustration},
    } = this.props;
    return <Image source={{uri: illustration}} style={styles.image} />;
  };

  render() {
    const {data} = this.props;
    const {origin, variety, roast} = data;

    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.slideInnerContainer}
        onPress={() => this.props.navigation.navigate('Customization', {data})}>
        <View style={styles.shadow} />
        <View style={styles.imageContainer}>
          {this.image()}
          <View style={styles.textContainer}>
            <Text style={styles.titleText}>{origin}</Text>
            <Text style={styles.subText}>{variety}</Text>

            <Dash
              style={styles.dash}
              dashColor="#324a59"
              dashLength={10}
              dashGap={20}
            />
            <Text style={styles.subText}>{roast}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default withNavigation(SliderEntry);
