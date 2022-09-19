import React from "react";
// import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/inertia-react";
import AdminCardSection1 from "@/Components/admin/sections/AdminCardSection1";
import TableSection from "@/Components/admin/sections/TableSection";
import { MDBRow } from "mdbreact";
import ModalSection from "@/Components/admin/sections/ModalSection";
import AdminCardSection2 from "@/Components/admin/sections/AdminCardSection2";

export default function Dashboard(props) {
    return (
        <AdminLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <AdminCardSection1 />
            <TableSection />
            <AdminCardSection2 />
            {/* <MDBRow className="mb-4">
                <ModalSection />
            </MDBRow> */}
            <div className="py-12">
                <div className=" mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            new data!
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
