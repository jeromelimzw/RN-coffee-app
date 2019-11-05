import React, {Component} from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {ENTRIES1} from './entries';
import SliderEntry from './SliderEntry.js';
import {sliderWidth, itemWidth} from './SliderEntry.style.js';

const SLIDER_1_FIRST_ITEM = 1;

const colors = {
  black: '#1a1917',
  gray: '#888888',
  background1: '#B721FF',
  background2: '#21D4FD',
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 2,
    backgroundColor: 'transparent',
    borderColor: 'red',
  },
  scrollview: {
    flex: 1,
  },
  exampleContainer: {
    paddingVertical: 30,
  },
  exampleContainerDark: {
    backgroundColor: colors.black,
  },
  exampleContainerLight: {
    backgroundColor: 'white',
  },
  title: {
    paddingHorizontal: 30,
    backgroundColor: 'transparent',
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  titleDark: {
    color: colors.black,
  },
  subtitle: {
    marginTop: 5,
    paddingHorizontal: 30,
    backgroundColor: 'transparent',
    color: 'rgba(255, 255, 255, 0.75)',
    fontSize: 13,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  slider: {
    marginTop: 15,
    overflow: 'visible', // for custom animations
  },
  sliderContentContainer: {
    paddingVertical: 10, // for custom animation
  },
  paginationContainer: {
    paddingVertical: 8,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 8,
  },
});

export default class CustomCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
    };
  }

  renderItemWithParallax({item, index}) {
    return <SliderEntry data={item} even={(index + 1) % 2 === 0} />;
  }

  handlePanelChange = index => {
    this.setState(
      {slider1ActiveSlide: index},
      this.props.handlePanelChange(index),
    );
  };

  mainExample(number, title) {
    return (
      <View style={styles.exampleContainer}>
        <Carousel
          ref={c => (this._slider1Ref = c)}
          data={ENTRIES1}
          renderItem={this.renderItemWithParallax}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          firstItem={SLIDER_1_FIRST_ITEM}
          inactiveSlideScale={0.94}
          inactiveSlideOpacity={0.7}
          containerCustomStyle={styles.slider}
          contentContainerCustomStyle={styles.sliderContentContainer}
          onSnapToItem={index => this.handlePanelChange(index)}
          loop={true}
          loopClonesPerSide={5}
        />
      </View>
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>{this.mainExample()}</View>
      </SafeAreaView>
    );
  }
}
