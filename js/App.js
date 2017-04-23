import React from 'react';
import {
    StackNavigator,
    NavigationActions
} from 'react-navigation';

import ResourceViewer from './ResourceViewer';

export const App =
    StackNavigator(
        { ViewScreen: { screen: ResourceViewer } },
        { initialRouteName: 'ViewScreen' });