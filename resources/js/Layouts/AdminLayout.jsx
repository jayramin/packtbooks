import React, { useState } from 'react';
// import ApplicationLogo from '@/Components/ApplicationLogo';
// import Dropdown from '@/Components/Dropdown';
// import NavLink from '@/Components/NavLink';
// import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
// import ResponsiveNavLink from '@/Pages/admin/DashboardPage';
import AdminCardSection1 from '@/Components/admin/sections/AdminCardSection1';
import AdminCardSection2 from '@/Components/admin/sections/AdminCardSection2';
import TableSection from '@/Components/admin/sections/TableSection';
import BreadcrumSection from '@/Components/admin/sections/BreadcrumSection';
import SideNavigation from '@/Layouts/sideNavigation';
import TopNavigation from '@/Layouts/topNavigation';
import Footer from '@/Layouts/Footer';
// import '@/css/index.css';
import { Link } from '@inertiajs/inertia-react';
import { MDBRow } from 'mdbreact';

export default function AdminLayout({ auth, header, children }) {
    // const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="flexible-content">
        <TopNavigation />
        <SideNavigation />

        <main id="content" className="p-5">
          <BreadcrumSection />
          <AdminCardSection1 />
          {/* <ChartSection1 /> */}
          <TableSection />
          {/* <ChartSection2 /> */}
          <MDBRow className="mb-4">
            {/* <MapSection /> */}
            {/* <ModalSection /> */}
          </MDBRow>
          <AdminCardSection2 />
        </main>
        <Footer />
      </div>
    );
}
