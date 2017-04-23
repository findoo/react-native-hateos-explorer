import React from 'react';
import { View } from 'react-native';

import HypermediaView from './HypermediaView';
import { testData } from './testData';

export default class ResourceViewer extends React.Component {

    static navigationOptions = {
        title: 'API Navigator',
    };

    render() {
        var data = this.props.navigation.state.params
            ? this.props.navigation.state.params.event
            : testData['http://localhost/apiRoot/'];

        return (
            <View>
                <HypermediaView
                    data={data}
                    navigation={this.props.navigation} />
            </View>);
    }
}