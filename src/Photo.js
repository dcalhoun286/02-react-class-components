import React from 'react';

class Photo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <img width="350" height="350" src={this.props.src} />
        );
    };
        
}
export { Photo }; 