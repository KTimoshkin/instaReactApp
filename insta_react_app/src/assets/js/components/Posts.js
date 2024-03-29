import React, {Component} from 'react';
import User from './User';
import ErrorMessage from './ErrorMessage';
import InstaService from '../services/instaService';

export default class Posts extends Component {
    InstaService = new InstaService();
    state = {
        posts: [],
        error: false
    }

    componentDidMount() {
        this.updatePosts();
    }

    updatePosts(){
        this.InstaService.getAllPosts()
            .then(this.onPostLoaded)
            .catch(this.onError)
    }

    onPostLoaded = (posts) => {
        this.setState({
            posts: posts,
            error: false
        });
    }

    onError = (err) => {
        this.setState({
            error: true
        });
    }

    renderItems(arr) {
        return arr.map((item) => {
            const {name, altname, photo, src, alt, descr, id} = item;

            return(
                <div key={id} className="post">
                    <User
                        src={photo}
                        alt={altname}
                        name={name}
                        min>
                    </User>
                    <img src={src} alt={alt}/>
                    <div className="post__name">
                        {name}
                    </div>
                    <div className="post__descr">
                        {descr}
                    </div>
                </div>
            );
        });
    }

    render() {
        const {error, posts} = this.state;
        if (error) {
            return <ErrorMessage></ErrorMessage>
        }

        const items = this.renderItems(posts);
        
        return(
            <div className="left">
                {items}
            </div>
        );
    }
}