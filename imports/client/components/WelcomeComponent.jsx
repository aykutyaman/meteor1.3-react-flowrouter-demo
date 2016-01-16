import React from 'react';
import DatePicker from 'material-ui/lib/date-picker/date-picker';


export const WelcomeComponent = ({name}) => (
  <div>
    Hello, {name}
    <DatePicker
	    hintText="Portrait Dialog" />
  </div>
);
