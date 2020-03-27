import React from 'react';
import RPIHeader from './RPIHeader'

class Settings extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div>
                <RPIHeader activeTab="settings"></RPIHeader>

                   settings

            </div>
        )
    }
}

export default Settings;
