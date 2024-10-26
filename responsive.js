import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
const [shortDimension, longDimension] =
  width < height ? [width, height] : [height, width];
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;
const scale = size => (shortDimension / guidelineBaseWidth) * size;
const horizontalScale = size => (longDimension / guidelineBaseWidth) * size;
const verticalScale = size => (longDimension / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;

export {horizontalScale, verticalScale, moderateScale, width, height};
