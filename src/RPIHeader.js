import React from 'react';

import IconSettings from '@salesforce/design-system-react/components/icon-settings';
import GlobalNavigationBar from '@salesforce/design-system-react/components/global-navigation-bar'; 
import GlobalNavigationBarRegion from '@salesforce/design-system-react/components/global-navigation-bar/region';
import GlobalNavigationBarDropdown from '@salesforce/design-system-react/components/global-navigation-bar/dropdown';
import GlobalNavigationBarLink from '@salesforce/design-system-react/components/global-navigation-bar/link';

class RPIHeader extends React.Component {

	constructor(props) {
		super(props);
	
		this.state = {
			homeActive: props.activeTab === "home",
			displaysActive: props.activeTab === "display",
			settingsActive: props.activeTab === "settings",
		}
	}
	render() {
		//TODO: make this dynanic from API when it exists
		const dropdownCollection = [
			{
				label: 'display01',
				value: '1',
				iconCategory: 'utility',
				iconName: 'table',
				href: '/display?display=display01',
			},
			{
				label: 'display02',
				value: '2',
				iconCategory: 'utility',
				iconName: 'kanban',
				href: '/display?display=display02',
			},
			{
				label: 'display03',
				value: '3',
				iconCategory: 'utility',
				iconName: 'side_list',
				href: '/display?display=display03',
			},
		];

		return (
			<IconSettings iconPath="/assets/icons">
				<GlobalNavigationBar>
					<GlobalNavigationBarRegion region="secondary" navigation>
						<GlobalNavigationBarLink label="Home" id="home-link" href="/" active={this.state.homeActive} />
						<GlobalNavigationBarDropdown
							assistiveText={{ icon: 'Open menu item submenu' }}
							id="primaryDropdown"
							label="Manage Displays"
							options={dropdownCollection}
							active={this.state.displaysActive}
						/>
						<GlobalNavigationBarLink label="Server Settings" href="/settings" active={this.state.settingsActive}/>
					</GlobalNavigationBarRegion>
				</GlobalNavigationBar>
			</IconSettings>
		);
	}
}

export default RPIHeader;
