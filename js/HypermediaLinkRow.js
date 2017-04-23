import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    FlatList,
    TouchableOpacity
} from 'react-native';
import { NavigationActions } from 'react-navigation';

import ResourceViewer from './ResourceViewer';
import { testData } from './testData';

export default class HypermediaLinkRow extends React.Component {

    render() {
        return (
            <View style={styles.row}>
                <TouchableOpacity onPress={() => {
                    this.props.navigation.dispatch(NavigationActions.navigate(
                        {
                            routeName: 'ViewScreen',
                            params: {
                                event: testData[this.props.href],
                            }
                        }
                    ));
                }}>
                    <Text style={styles.text}>{this.props.text}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    row: {
        flex: 1,
        backgroundColor: 'white',
        height: 50,
        justifyContent: 'center',
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    text: {
        color: 'black',
        marginLeft: 10
    }
});