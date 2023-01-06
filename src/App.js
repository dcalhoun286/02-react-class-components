import React from 'react';
import { Photo } from './Photo';

const IMAGE_URL = "https://picsum.photos/350";
const API_URL = "https://catfact.ninja/fact";

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            catFact: 'test fact'
        };
    }

    componentDidMount() {
        fetch(API_URL)
            .then(res => res.json())
            .then(data => this.setState({catFact: data.fact}))
    }

    render(){
        return (
            <>
                <h1>{this.state.catFact}</h1>
                <Photo src={IMAGE_URL} />
            </>
        )
    }

}

export { App };
