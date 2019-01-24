import React from 'react';
import {render} from 'react-dom';
import './index.css';
import Calendar from './views/container/calendar.js';
import 'react-dates/initialize';

render(<Calendar/>, document.getElementById('root'));

