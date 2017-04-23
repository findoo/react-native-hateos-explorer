import React from 'react';
import {
    ScrollView,
    View,
    Text,
    FlatList
} from 'react-native';

import HypermediaLinkRow from './HypermediaLinkRow'; 

export default class HypermediaView extends React.Component {

    render() {
        if(!this.props.data)  {
            return <Text>Data is loading</Text>;
        }

        var links = this.props.data._links ? this.props.data._links : [];
        return (
            <View>
                <FlatList
                    data={Object.keys(links)}
                    renderItem={({ item }) =>
                        <HypermediaLinkRow
                            href={links[item].href}
                            text={item}
                            navigation={this.props.navigation} />}
                    keyExtractor={(item) => item} />
                <ScrollView>
                    <Text>{JSON.stringify(this.props.data)}</Text>
                </ScrollView>
            </View>
        );
    }
}