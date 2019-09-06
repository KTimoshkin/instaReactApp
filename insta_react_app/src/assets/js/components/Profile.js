import React from 'react';
import User from './User';
import Palette from './Palette';

const Profile = () => {
    return(
        <div className="container profile">
            <User
                src="https://3dnews.ru/assets/external/illustrations/2018/02/01/964971/theres-one-simple-reason-nintendo-is-bringing-super-mario-to-the-iphone-first.jpg"
                alt="Konstantin Timoshkin"
                name="Konstantin Timoshkin">
            </User>
            <Palette></Palette>
        </div>
    );
}

export default Profile;