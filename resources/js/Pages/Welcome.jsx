import React, { useEffect, useState } from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import Pagination from "react-js-pagination";

export default function Welcome(props) {
    const [booksStateData, setBooksStateData] = useState({
        books: "",
    });
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async (pageNumber = 1) => {
        const api = await fetch(
            `http://localhost:8000/api/allproducts?page=${pageNumber}`
        );
        setBooksStateData({
            books: await api.json(),
        });
    };
    return (
        <>
            <Head title="Welcome" />
            <div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
                <div className="fixed top-0 right-0 px-6 py-4 sm:block">
                    {props.auth.user ? (
                        <Link
                            href={route("dashboard")}
                            className="text-sm text-gray-700 dark:text-gray-500 underline"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route("login")}
                                className="text-sm text-gray-700 dark:text-gray-500 underline"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route("register")}
                                className="ml-4 text-sm text-gray-700 dark:text-gray-500 underline"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>

                <div className="max-w-6xl mt-5 mx-auto sm:px-6 lg:px-8">
                    {booksStateData?.books?.data ? (
                        <>
                        <h2>Book List</h2>
                            <div className="row mt-5">
                                {booksStateData?.books?.data?.map(
                                    (dataSource) => (
                                        <>
                                        <div className="col-3">
                                            <div class="card">
                                                <img
                                                    src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp"
                                                    class="card-img-top"
                                                    alt="Fissure in Sandstone"
                                                />
                                                <div class="card-body">
                                                    <h5 class="card-title">
                                                        Card title
                                                    </h5>
                                                    <p class="card-text">
                                                        <b>Title :</b>  {dataSource?.title} <br />
                                                        <b>Author Name :</b>  {dataSource?.author_name} <br />
                                                        <b>Genre :</b>  {dataSource?.genre} <br />
                                                    </p>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                          
                                        </>
                                    )
                                )}
                            </div>
                            <tfoot>
                                <tr>
                                    <td colSpan={6}>
                                        {/* {(booksStateData?.books?.data.length)} */}
                                        {/* {JSON.stringify(booksStateData?.books)} */}
                                        {/* <Pagination
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
                                                /> */}
                                        <Pagination
                                            activePage={
                                                booksStateData?.books?.data
                                                    ?.current_page
                                                    ? booksStateData?.books
                                                          ?.data?.current_page
                                                    : 0
                                            }
                                            itemsCountPerPage={
                                                booksStateData?.books?.data
                                                    ?.per_page
                                                    ? booksStateData?.books
                                                          ?.data?.per_page
                                                    : 0
                                            }
                                            totalItemsCount={
                                                booksStateData?.books?.data
                                                    ?.total
                                                    ? booksStateData?.books
                                                          ?.data?.total
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
                                        />
                                    </td>
                                </tr>
                            </tfoot>
                        </>
                    ) : (
                        "Loading..."
                    )}
                </div>
            </div>
        </>
    );
}
