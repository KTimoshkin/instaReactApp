import React, {Component} from 'react';
import User from './User';
import ErrorMessage from './ErrorMessage';
import InstaService from '../services/instaService';

export default class Users extends Component {
    InstaService = new InstaService();
    state = {
        users: [],
        error: false
    }

    componentDidMount() {
        this.updateUsers();
    }

    updateUsers(){
        this.InstaService.getAllUsers()
            .then(this.onUserLoaded)
            .catch(this.onError)
    }

    onUserLoaded = (users) => {
        this.setState({
            users: users,
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
            const {name, altname, photo, id} = item;

            return(
                <User
                    key={id}
                    src={photo}
                    alt={altname}
                    name={name}
                    min>
                </User>
            );
        });
    }

    render() {
        const {error, users} = this.state;
        if (error) {
            return <ErrorMessage></ErrorMessage>
        }

        const items = this.renderItems(users);

        return(
            <div className="right">
                <div className="users__block">
                    {items}
                </div>
            </div>
        );
    }
}

/*
export default function Users() {
    return(
        <div className="right">
            <User
                src="https://www.apple.com/leadership/tim-cook/meta/og.png?201902051735"
                alt="Tim Cook"
                name="Tim Cook">
            </User>

            <div className="users__block">
                <User
                    src="https://www.apple.com/leadership/tim-cook/meta/og.png?201902051735"
                    alt="Tim Cook"
                    name="Tim Cook"
                    min>
                </User>
            </div>
        </div>
    );
}*/
