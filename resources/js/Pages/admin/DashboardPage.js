import React from 'react';
import { MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle, MDBRow } from 'mdbreact';
import AdminLayout from '@/Layouts/AdminLayout';
// import AdminCardSection1 from './sections/AdminCardSection1';
// import AdminCardSection2 from './sections/AdminCardSection2';
// import TableSection from './sections/TableSection';
// import BreadcrumSection from './sections/BreadcrumSection';
// import SideNavigation from '../sideNavigation';
// import TopNavigation from '../topNavigation';
// import Footer from '../Footer';
// import ChartSection1 from './sections/ChartSection1';
// import ChartSection2 from './sections/ChartSection2';
// import MapSection from './sections/MapSection';
// import ModalSection from './sections/ModalSection';
import '../../index.css';
const DashboardPage = () => {
  return (
    <>
      <div className="flexible-content">
        <AdminLayout/>
      </div>
    </>
  )
}

export default DashboardPage;