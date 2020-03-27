import React from 'react';
import RPIHeader from './RPIHeader'
import ManageDisplay from './ManageDisplay';

class Display extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <RPIHeader activeTab="display"></RPIHeader>
                <ManageDisplay></ManageDisplay>
            </div>
        )
    }
}

export default Display;
