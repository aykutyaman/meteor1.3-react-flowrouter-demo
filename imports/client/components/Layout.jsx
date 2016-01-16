import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

import ThemeManager from 'material-ui/lib/styles/theme-manager';
import LightRawTheme from 'material-ui/lib/styles/raw-themes/light-raw-theme';

export const Layout = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getMuiTheme(LightRawTheme)
    };
  },
  render() {
    return (
      <div>
	<header>
	  This is header
	</header>
	<main>
	  {this.props.content()}
	</main>
      </div>
    )
  }
});
