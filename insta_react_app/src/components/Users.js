import React from 'react';
import User from './User';

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
                <User
                    src="https://www.apple.com/leadership/tim-cook/meta/og.png?201902051735"
                    alt="Tim Cook"
                    name="Tim Cook"
                    min>
                </User>
            </div>
        </div>
    );
}