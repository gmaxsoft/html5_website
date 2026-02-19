// Import Bootstrap JavaScript components
import Tab from 'bootstrap/js/dist/tab';
import Dropdown from 'bootstrap/js/dist/dropdown';
import Parallax from '@maxsoft/super-parallax';

// Make Bootstrap available globally for data attributes
window.bootstrap = {
    Tab,
    Dropdown
};

// Import Font Awesome CSS
import '@fortawesome/fontawesome-free/css/all.min.css';

// Import Swiper CSS
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// Import Swiper and modules for script.js
import Swiper from 'swiper';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';

// Make Swiper available globally for script.js
window.Swiper = Swiper;
window.SwiperModules = { Pagination, Autoplay, EffectFade };

// Make SimpleParallax available globally for script.js
//window.SimpleParallax = SimpleParallax;

// Import SCSS
import '../scss/styles.scss';

// Import JavaScript
import './script.js';

