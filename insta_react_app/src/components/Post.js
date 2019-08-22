import React, {Component} from 'react';

export default class Post extends Component{
    render() {
        return(
            <div className="post">

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