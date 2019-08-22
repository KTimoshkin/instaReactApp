import React, {Component} from 'react';
import User from './User';

export default class Post extends Component{
    render() {
        return(
            <div className="post">
                <User
                    src="https://www.apple.com/leadership/tim-cook/meta/og.png?201902051735"
                    alt="Tim Cook"
                    name="Tim Cook"
                    min>
                </User>
                <img src={this.props.src} alt={this.props.alt}/>
                <div className="post__name">
                    some acount
                </div>
                <div className="post__descr">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis doloribus excepturi illo inventore iusto molestiae, numquam omnis possimus quas quasi qui quidem ratione sapiente similique temporibus, tenetur ullam voluptatem voluptates!
                </div>
            </div>
        );
    }
}