import React, { Component } from 'react';
import Editor from 'for-editor'
import Style from './style'
export class index extends Component {

    render() {
        return (
            <Style>
                <Editor value={this.props.value} preview={this.props.preview} />
            </Style>
        );
    }
}

export default index;
