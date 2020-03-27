import React from 'react';
import RPIHeader from './RPIHeader'

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <RPIHeader activeTab="home"></RPIHeader>

                   home page

            </div>
        )
    }
}

export default Home;
