import { fadeAnimation, appearAnimation } from './animations';
import { markup, initMarkup } from './markup';
import {
  mobile,
  desktop,
  ios,
  android,
  minHeight,
  maxHeight,
  portraitOrientation,
  landscapeOrientation,
  longScreen,
  hover,
  autoHover,
  animate,
  square,
  centerPos,
  centerPosX,
  centerPosY,
  backgroundImageCover,
  backgroundImageContain,
  absoluteBackgroundPosition,
  fixedBackgroundPosition,
  autoCropText,
  hideScrollbar,
  inputStyles,
  placeholderStyles,
  sidePadding,
  contentWidth,
  adaptiveSidePadding,
  adaptiveContentWidth,
} from './mixins';
import { WindowSize, MarkupConfig } from './types/markup';
import { WindowType } from './types/window';

const mixins = {
  mobile,
  desktop,
  ios,
  android,
  minHeight,
  maxHeight,
  portraitOrientation,
  landscapeOrientation,
  longScreen,
  hover,
  autoHover,
  animate,
  square,
  centerPos,
  centerPosX,
  centerPosY,
  backgroundImageCover,
  backgroundImageContain,
  absoluteBackgroundPosition,
  fixedBackgroundPosition,
  autoCropText,
  hideScrollbar,
  inputStyles,
  placeholderStyles,
  sidePadding,
  contentWidth,
  adaptiveSidePadding,
  adaptiveContentWidth,
};

const animations = {
  fadeAnimation,
  appearAnimation,
};

export { markup, initMarkup, mixins, animations };

export { WindowSize, MarkupConfig, WindowType };
