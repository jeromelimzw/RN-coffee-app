import {StyleSheet, Dimensions} from 'react-native';

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

export const colors = {
  black: '#1a1917',
  gray: '#888888',
  background1: '#B721FF',
  background2: '#21D4FD',
};

const slideHeight = viewportHeight * 0.36;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

const entryBorderRadius = 25;

export default StyleSheet.create({
  slideInnerContainer: {
    width: itemWidth,
    height: slideHeight,
    paddingHorizontal: itemHorizontalMargin,
    paddingBottom: 18,
  },
  shadow: {
    position: 'absolute',
    top: 0,
    left: itemHorizontalMargin,
    right: itemHorizontalMargin,
    bottom: 18,
    shadowColor: colors.black,
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 10},
    shadowRadius: 10,
    borderRadius: entryBorderRadius,
  },
  imageContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: entryBorderRadius,
  },
  titleText: {
    color: '#324a59',
    fontSize: 30,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  subText: {
    color: '#324a59',
    fontSize: 15,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  dash: {
    width: 0.5 * slideWidth,
    alignSelf: 'center',
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
    borderRadius: entryBorderRadius,
  },
  // image's border radius is buggy on iOS; let's hack it!
  radiusMask: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: entryBorderRadius,
  },
  textContainer: {
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'rgba(255,255,255,0.8)',
    width: slideWidth,
    height: 0.4 * slideHeight,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  textContainerEven: {
    backgroundColor: colors.black,
  },
});
