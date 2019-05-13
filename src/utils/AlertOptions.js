import React from 'react';


export default {
    title: 'Title',
    message: 'Message',
    buttons: [
       {
            label: 'Yes',
            onClick: () => alert('Click Yes')
        },
        {
            label: 'No',
            onClick: () => alert('Click No')
        }
    ],
    /*childrenElement: () => <div />,
    customUI: ({ onClose }) => <div>Custom UI</div>,*/
    closeOnEscape: false,
    closeOnClickOutside: true,
    willUnmount: () => {},
    onClickOutside: () => {},
    onKeypressEscape: () => {}
};