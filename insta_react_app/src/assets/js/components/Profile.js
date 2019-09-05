import React from 'react';
import User from './User';
import Palette from './Palette';

const Profile = () => {
    return(
        <div className="container profile">
            <User
                src="https://www.apple.com/leadership/tim-cook/meta/og.png?201902051735"
                alt="Konstantin Timoshkin"
                name="Konstantin Timoshkin">
            </User>
            <Palette></Palette>
        </div>
    );
}

export default Profile;