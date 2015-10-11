/// <reference path="../typings/react/react.d.ts" />

import React = require('react');
import Hello = require('./component.tsx');

React.render(<Hello.Hello />, document.getElementById('app'));
