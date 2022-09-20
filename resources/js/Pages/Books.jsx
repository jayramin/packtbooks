import React, { useEffect, useState } from "react";
// import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/inertia-react";
import { Elasticsearch, Results, SearchBox, Facet } from "react-elasticsearch";
import { MDBListGroup, MDBListGroupItem, MDBIcon } from "mdbreact";
import { Link } from "@inertiajs/inertia-react";
import Pagination from "react-js-pagination";
import { countBy } from "lodash";
export default function Books(props) {
    // const [booksStateData, setBooksStateData] = useState("");
    const [booksStateData, setBooksStateData] = useState({
        books: "",
    });
    const [loader, setLoader] = useState(false);
    let myData = "";
    // useEffect(async () => {
    //     await fetch("http://localhost:8000/api/allproducts")
    //         .then((res) => res.json())
    //         .then((responseData) => {
    //             console.log(responseData);
    //             myData = Object.entries(responseData).map(
    //                 ([anythingreferetokey, val], i) => {
    //                     return (
    //                         <tr key={i}>
    //                             <td>{i + 1}</td> <td>{val.title}</td>{" "}
    //                             <td>{val.description}</td>{" "}
    //                             <td>{val.author_name}</td>{" "}
    //                             <td>{val.publisher}</td> <td>{val.genre}</td>{" "}
    //                         </tr>
    //                     );
    //                 }
    //             );
    //             setSometData(myData);
    //             setLoader(true);
    //             console.log(myData);
    //         });
    // }, []);
    // useEffect(() => {
    //     fetchData();
    // }, []);
    // const fetchData = async (pageNumber = 1) => {
    //     const api = await fetch(`/api/allproducts?page=${pageNumber}`);
    //     setBooksStateData({
    //         books: await api.json(),
    //     });
    // };

    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async (pageNumber = 1) => {
        const api = await fetch(`http://localhost:8000/api/allproducts?page=${pageNumber}`);
        setBooksStateData({
            books: await api.json(),
        });
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
                        {/* <Elasticsearch url="http://localhost:8000/api/allproducts">
                            <SearchBox id="mainSearch" fields={["title"]} />
                            <Results
                                id="results"
                                items={(data) => {
                                    console.log(data);
                                    // Map on result hits and display whatever you want.
                                    return data.map((item) => (
                                        <MyCardItem
                                            key={item._id}
                                            source={item._source}
                                        />
                                    ));
                                }}
                            />
                        </Elasticsearch> */}
                        <div className="row mb-3">
                            <div className="col-2">
                                <h2>Book List</h2>
                            </div>
                            <div className="col-2 ms-auto">
                                <Link
                                    href="/addnewbook"
                                    className="btn btn-sm btn-primary ms-auto d-block"
                                >
                                    <MDBIcon icon="plus" className="mr-3" /> Add
                                    New
                                </Link>
                            </div>
                        </div>
                        {/* {JSON.stringify(booksStateData)} */}
                        <table className="table table-bordered table-striped table-hover">
                            <thead className="bg-dark text-light">
                                <tr>
                                    <th>sr No</th>
                                    <th>Title</th>
                                    <th>Author</th>
                                    <th>Genre</th>
                                    <th>Publisher</th>
                                    <th>Description</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            {/* <tbody>{genredata}</tbody> */}

                            {booksStateData?.books?.data ? (
                                <>
                                    <tbody>
                                        {booksStateData?.books?.data?.map(
                                            (dataSource) => (
                                                <tr key={dataSource?.id}>
                                                    <td>{dataSource?.id}</td>
                                                    <td>{dataSource?.title}</td>
                                                    <td>
                                                        {
                                                            dataSource?.author_name
                                                        }
                                                    </td>
                                                    <td>{dataSource?.genre}</td>
                                                    <td>
                                                        {dataSource?.publisher}
                                                    </td>
                                                    <td>
                                                        {
                                                            dataSource?.description
                                                        }
                                                    </td>
                                                    <td> </td>
                                                </tr>
                                            )
                                        )}
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td colSpan={6}>
                                                {/* {(booksStateData?.books?.data.length)} */}
                                                {/* {JSON.stringify(booksStateData?.books)} */}
                                                <Pagination
                                                    activePage={
                                                        booksStateData?.books
                                                            ?.data?.current_page
                                                            ? booksStateData
                                                                  ?.books?.data
                                                                  ?.current_page
                                                            : 0
                                                    }
                                                    itemsCountPerPage={10}
                                                    totalItemsCount={100}
                                                    onChange={(pageNumber) => {
                                                        fetchData(pageNumber);
                                                    }}
                                                    pageRangeDisplayed={8}
                                                    itemClass="page-item"
                                                    linkClass="page-link"
                                                    firstPageText="First Page"
                                                    lastPageText="Last Lage"
                                                />
                                                {/* <Pagination
                                            activePage={
                                                booksStateData?.books?.data?.current_page
                                                    ? booksStateData?.books?.data?.current_page
                                                    : 0
                                            }
                                            itemsCountPerPage={
                                                booksStateData?.books?.data?.per_page
                                                    ? booksStateData?.books?.data?.per_page
                                                    : 0
                                            }
                                            totalItemsCount={
                                                booksStateData?.books?.data?.total
                                                    ? booksStateData?.books?.data?.total
                                                    : 0
                                            }
                                            onChange={(pageNumber) => {
                                                fetchData(pageNumber);
                                            }}
                                            pageRangeDisplayed={8}
                                            itemClass="page-item"
                                            linkClass="page-link"
                                            firstPageText="First Page"
                                            lastPageText="Last Lage"
                                        /> */}
                                            </td>
                                        </tr>
                                    </tfoot>
                                </>
                            ) : (
                                "Loading..."
                            )}
                        </table>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
