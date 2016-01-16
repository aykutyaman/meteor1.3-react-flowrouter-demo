import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import { Layout } from '../../imports/client/components/Layout.jsx';
import { WelcomeComponent } from '../../imports/client/components/WelcomeComponent.jsx';

FlowRouter.route('/', {
  action() {
    mount(Layout, {
      content: () => (<WelcomeComponent name='Aykut' />)
    });
  }
});
