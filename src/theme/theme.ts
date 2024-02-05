import { extendTheme, ThemingProps, HTMLChakraProps } from '@chakra-ui/react';

import { globalStyles } from './styles';
import { linkStyles } from './components/link';
import { badgeStyles } from './components/badge';
import { inputStyles } from './components/input';
import { CardComponent } from './components/Card';
import { buttonStyles } from './components/button';
import { sliderStyles } from './components/slider';
import { switchStyles } from './components/switch';
import { progressStyles } from './components/progress';
import { textareaStyles } from './components/textarea';

export default extendTheme(
  globalStyles,
  badgeStyles, // badge styles
  buttonStyles,
  linkStyles, // link styles
  progressStyles, // progress styles
  sliderStyles, // slider styles
  inputStyles, // input styles
  textareaStyles, // textarea styles
  switchStyles, // switch styles,
  CardComponent
);

export interface CustomCardProps extends HTMLChakraProps<'div'>, ThemingProps {}
