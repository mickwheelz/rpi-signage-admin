import React from 'react';
import Card from '@salesforce/design-system-react/components/card';
import Icon from '@salesforce/design-system-react/components/icon';
import Input from '@salesforce/design-system-react/components/input'; 

class ManageDisplay extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            display : {
                mode: "web",
                webURL: "http://www.google.com",
                webAutoRefresh:0,
                slideshowURL: "/home/pi/pics",
                slideshowURLType:"local",
                hostname: "pidisplay1",
                slideTimeout: "5",
                managementServer:"http://192.168.199.134:8080/mgmt"
            },
            form: {
                cardHeading: 'Manage Display -',
                hideWebURL : true,
                hideWebAutoRefresh: true,
                hideSlideshowURLType: true,
                hideSlideshowURL: true,
                hideSlideTimeout: true
            }
        }
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {

        let state = this.state;
        state.display[e.target.id] = e.target.value;

        if(state.display.mode === "web") {    
            state.form = {
                cardHeading: 'Manage Display - ' + state.display.hostname,
                hideWebURL : false,
                hideWebAutoRefresh: false,
                hideSlideshowURLType: true,
                hideSlideshowURL: true,
                hideSlideTimeout: true
            }
        }
        if(state.display.mode === "slideshow") {
            state.form = {
                cardHeading: 'Manage Display - ' + state.display.hostname,
                hideWebURL : true,
                hideWebAutoRefresh: true,
                hideSlideshowURLType: false,
                hideSlideshowURL: false,
                hideSlideTimeout: false
            }
        }
        if(state.display.mode === "desktop") {
            state.form = {
                cardHeading: 'Manage Display - ' + state.display.hostname,
                hideWebURL : true,
                hideWebAutoRefresh: true,
                hideSlideshowURLType: true,
                hideSlideshowURL: true,
                hideSlideTimeout: true
            }
        }
        this.setState(state);
    }

    render() {
        return (
            <div class="slds-p-around_small">
                <Card id="ExampleCard" heading={this.state.form.cardHeading}
                      icon={<Icon category="standard" name="document" size="small" />}>
                        <div class="slds-p-around_medium">

                        <div className="slds-col_padded slds-p-bottom_small">
                            <Input id="hostname" label="Device Name" placeholder="display1" onChange={this.onChange}/>
                        </div>

                        <div className="slds-col_padded slds-p-bottom_small">
                            <label class="slds-form-element__label" for="mode">Mode</label>

                            <select class="slds-select" id="mode" onChange={this.onChange}>
                                <option value="">Please select</option>
                                <option value="web">Web</option>
                                <option value="slideshow">Slideshow</option>
                                <option value="desktop">Desktop</option>
                            </select>                        
                        </div>
                        
                        <div className="slds-col_padded slds-p-bottom_small" hidden={this.state.form.hideWebURL}>
                            <Input id="webURL" label="Web URL" placeholder="http://www.google.com" onChange={this.onChange}/>
                        </div>

                        <div className="slds-col_padded slds-p-bottom_small" hidden={this.state.form.hideWebAutoRefresh}>
                            <Input id="webAutoRefresh" label="Web Auto Refresh Timeout (seconds)" placeholder="www.google.com" onChange={this.onChange}/>
                        </div>

                        <div className="slds-col_padded slds-p-bottom_small" hidden={this.state.form.hideSlideshowURLType}>
                            <label class="slds-form-element__label" for="slideshowURLType">Slideshow URL Type</label>

                            <select class="slds-select" id="slideshowURLType" onChange={this.onChange}>
                                <option value="">Please select</option>
                                <option value="local">Local</option>
                                <option value="network">Network</option>
                            </select>                        
                        </div>

                        <div className="slds-col_padded slds-p-bottom_small" hidden={this.state.form.hideSlideshowURL}>
                            <Input id="slideshowURL" label="Slideshow URL" placeholder="/path/to/image/folder" onChange={this.onChange}/>
                        </div>

                        <div className="slds-col_padded slds-p-bottom_small" hidden={this.state.form.hideSlideTimeout}>
                            <Input id="slideTimeout" label="Slide timeout (seconds)" placeholder="5" onChange={this.onChange}/>
                        </div>

                        <div className="slds-col_padded slds-p-bottom_small">
                            <Input id="managementServer" label="Management Server URL" placeholder="http://192.168.1.1/mgmt" onChange={this.onChange}/>
                        </div>
                        
                    </div>
                </Card>
            </div>
        )
    }
}

export default ManageDisplay;
