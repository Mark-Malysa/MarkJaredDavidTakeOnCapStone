import React from 'react';
import { createPopper } from '@popperjs/core';
import './popperStyles.css'

const MyPopper = (props) => {
    const parkingMap = document.querySelector('#parkingMap');
    const tooltip = document.querySelector('#tooltip');

    return (
        createPopper(parkingMap, tooltip, {
            placement: 'top',
            modifiers: [
              {
                name: 'offset',
                options: {
                  offset: [100, 10],
                },
              },
            ],
          })
     )
}
 
export default MyPopper;