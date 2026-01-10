// Import Bootstrap JavaScript components
import Tab from 'bootstrap/js/dist/tab';
import Dropdown from 'bootstrap/js/dist/dropdown';

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

// Import Swiper and modules for script.js
import Swiper from 'swiper';
import { Pagination, Autoplay } from 'swiper/modules';

// Make Swiper available globally for script.js
window.Swiper = Swiper;
window.SwiperModules = { Pagination, Autoplay };

// Import SCSS
import '../scss/styles.scss';

// Import JavaScript
import './script.js';

