import React, { useEffect, useState } from "react";
// import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/inertia-react";
import { Elasticsearch, Results, SearchBox, Facet } from "react-elasticsearch";

export default function Publisher(props) {
    const [somedata, setSometData] = useState("State Inti Val");
    const [loader, setLoader] = useState(false);
    let myData = "";
    useEffect(async () => {
        await fetch("http://localhost:8000/api/allproducts")
            .then((res) => res.json())
            .then((responseData) => {
                console.log(responseData);
                myData = Object.entries(responseData).map(
                    ([anythingreferetokey, val], i) => {
                        return <li key={i}>{val.title}</li>;
                    }
                );
                setSometData(myData);
                setLoader(true);
                console.log(myData);
            });
    }, []);
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

            <div className="mx-auto ">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 bg-white border-b border-gray-200">
                        Publisher Data
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
