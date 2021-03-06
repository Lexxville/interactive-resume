'use strict';

import scroll from 'other/scroll';
import * as Constants from './Constants';

export default ($backgroundElm) => {
  $backgroundElm.animate({
    top: scroll.getScrollCompletion() * Constants.SCROLL_MAX_TOP,
    left: scroll.getScrollCompletion() * Constants.SCROLL_MAX_LEFT
  }, {
    duration: Constants.SCROLL_DURATION,
    queue: false,
    easing: 'swing'
  });
};
