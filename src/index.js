import './style.css';
import { Quote } from './Quote/index.js';

const appElm = document.querySelector('#app');
appElm.append(Quote(
    {
        text: 'Obstacles are what you see when you take your eyes off your goals.',
        author: 'Brian Tracy',
    }
), Quote(
    {
        text: 'Be not afraid of growing slowly, be afraid of standing still.',
        author: 'Chinese proverb',
    }
));