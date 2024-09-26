import { slideshow } from './modules/slideshow.js';
import { initWorkList } from './modules/work.js';

/* Main
############################################################################ */

document.addEventListener('DOMContentLoaded', function() {
  hljs.highlightAll();
  initWorkList();
  slideshow();
});