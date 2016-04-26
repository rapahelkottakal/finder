import React from 'react';
import { render } from 'react-dom';

import Finder from './components/finder.js';

import data from './data';

render(<Finder data={data} />, document.getElementById('finder'));