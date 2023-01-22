import React from 'react';
import { createRoot } from 'react-dom/client';
import Home from './containers/Home';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<Home />);
