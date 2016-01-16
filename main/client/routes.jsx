import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';
import { Layout, WelcomeComponent} from './app.jsx';

FlowRouter.route('/', {
  action() {
    mount(Layout, {
      content: () => (<WelcomeComponent name='Aykut' />)
    });
  }
});
