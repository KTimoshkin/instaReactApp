import React, {Component} from 'react';
import Post from './Post';

export default class Posts extends Component {
    render() {
        return(
            <div className="left">
                <Post src="https://cnet2.cbsistatic.com/img/-qvJVYfnJOTphXGOc2fzSNnwQPk=/1600x900/2018/06/07/78e06ce4-81e0-4b35-992f-6a2b3585b931/mojave-night.jpg" alt="mojave"></Post>
            </div>
        );
    }
}