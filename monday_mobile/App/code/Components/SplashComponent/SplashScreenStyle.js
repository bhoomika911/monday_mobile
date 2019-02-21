import {
  StyleSheet,
  Platform,
} from 'react-native';
import Colors from '../../../Constants/Colors';

export default StyleSheet.create({

  mainContainer: {
    flex: 1,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  backgroundImg : {
    width : window.width,
    height : window.height
  },

});
