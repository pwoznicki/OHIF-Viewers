import React from 'react';
export default function getCustomizationModule() {
  return [
    {
      name: 'customRoutes',
      value: {
        id: 'customRoutes',
        routes: [
          {
            path: '/custom',
            children: () => <h1>Hello Custom Route</h1>,
          },
        ],
      },
    },
    {
      name: 'default',
      value: [
        {
          id: 'ohif.overlayItem',
          uiType: 'uiType',
          content: function (props) {
            const { instance, label } = props;
            const value = this.attribute
              ? instance[this.attribute]
              : this.contentF(props);
            if (!value) return null;
            return (
              <span>
                ${label} ${value}
              </span>
            );
          },
        },
      ],
    },
  ];
}
