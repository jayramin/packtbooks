import React, { useEffect, useState } from "react";
// import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/inertia-react";
import { Elasticsearch, Results, SearchBox, Facet } from "react-elasticsearch";
import { MDBListGroup, MDBListGroupItem, MDBIcon } from "mdbreact";
import { Link } from "@inertiajs/inertia-react";
import Pagination from "react-js-pagination";
import { countBy } from "lodash";
export default function AddNewBooks(props) {
    // const [booksStateData, setBooksStateData] = useState("");
    const [booksStateData, setBooksStateData] = useState({
        books: "",
    });
    const [commonData, setCommonData] = useState({
        authors: "",
        publisher: "",
        genre: "",
    });
    const [loader, setLoader] = useState(false);
    let [myDataAuthors,myDataGenre,myDataPubliehser] = ["","",""];
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        await axios.get(`http://localhost:8000/api/allauthors`).then((response) => {
            console.log(response.data);
            myDataAuthors = Object.entries(response.data).map(
                ([anythingreferetokey, val], i) => {
                    return  (<option key={i}>{val.author_name}</option>);
                }
            );
            setCommonData(...commonData,{"authors":myDataAuthors});
            // setLoader(true);
        });
        // await axios.get(`http://localhost:8000/api/allpublisher`).then((response) => {
        //     myDataPubliehser = Object.entries(response.data).map(
        //         ([anythingreferetokey, val], i) => {
        //             return (<option key={i}>{val.publisher_name}</option>);
        //         }
        //     );
        //     setCommonData(...commonData,{"publisher":myDataPubliehser});
        //     // setLoader(true);
        // });
        // await axios.get(`http://localhost:8000/api/allgenre`).then((response) => {
        //     myDataGenre = Object.entries(response.data).map(
        //         ([anythingreferetokey, val], i) => {
        //             return (<option key={i}>{val.title}</option>);
        //         }
        //     );
        //     setCommonData(...commonData,{"genre":myDataGenre});
        // });
        setLoader(true);

        // const authorApi = await fetch(`http://localhost:8000/api/allauthors`);
        // const publisherApi = await fetch(`http://localhost:8000/api/allpublisher`);
        // const genreApi = await fetch(`http://localhost:8000/api/allgenre`);
        // console.log(authorApi.json());
        // setCommonData({
        //     authors: await authorApi.json(),
        //     publisher: await publisherApi.json(),
        //     genre: await genreApi.json(),
        // });
    };
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
                        New Book
                        {JSON.stringify(commonData.authors)}
                        <select name="publisher" id="publisher">
                            {commonData.authors ? commonData.authors :<option>No Author</option>}
                        </select>
                        { loader?<>
                        
                        </> :<>No data</> }
                        
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
