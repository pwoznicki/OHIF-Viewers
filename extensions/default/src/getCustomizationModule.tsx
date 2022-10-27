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
  ];
}
