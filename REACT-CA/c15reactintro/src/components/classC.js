import React, {Component} from 'react';

export default class classC extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to the best team {this.props.name}a.k.a {this.props.hero}</h1>
            </div>
        );
    }
}