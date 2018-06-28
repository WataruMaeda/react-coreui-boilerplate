import React, { Component } from 'react';
import {
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppSidebarNav,
} from '@coreui/react';

// sidebar nav config
import navigation from '../../common/navigation';

class LeftSlideMenu extends Component {
  render() {
    const { menuProps } = this.props;
    return (
        <AppSidebar fixed display="lg">
            <AppSidebarHeader />
            <AppSidebarForm />
            <AppSidebarNav navConfig={navigation} {...menuProps} />
            <AppSidebarFooter />
            <AppSidebarMinimizer />
        </AppSidebar>
    );
  }
}

export default LeftSlideMenu;
