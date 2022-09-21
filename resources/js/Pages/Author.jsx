import React, { useEffect, useState } from "react";
// import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, useForm } from "@inertiajs/inertia-react";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import TextArea from "@/Components/TextArea";
import axios from "axios";
import Pagination from "react-js-pagination";

export default function Author(props) {
    const [authordata, setAuthorData] = useState({
        users: "",
    });
    let myData = "";
    const { data, setData, post, processing, errors, reset } = useForm({
        title: "",
        description: "",
    });
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async (pageNumber = 1) => {
        const api = await fetch(`http://localhost:8000/api/allauthors?page=${pageNumber}`);
        setAuthorData({
            author: await api.json(),
        });
    };

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();
        console.log(data);
        // post(route('register'));
        const baseURL = "http://localhost:8000/api/addnewauthors";
        axios.post(baseURL, data).then((response) => {
            console.log(response.data);
            // setPost(response.data);
            myData = Object.entries(response.data).map(
                ([anythingreferetokey, val], i) => {
                    return (
                        <tr key={i}>
                            <td>{i + 1}</td> <td>{val.title}</td>{" "}
                            <td>{val.description}</td>{" "}
                        </tr>
                    );
                }
            );
            setSometData(myData);
            // setLoader(true);
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
                        <div className="row my-3">
                            <div className="col">
                                <h2>Add New Author</h2>
                            </div>
                        </div>
                        <form onSubmit={submit}>
                            <div className="row">
                                <div className="col-4">
                                    <div>
                                        <InputLabel forInput="author_name" value="Author Name" />
                                        <TextInput type="text" name="author_name" value={data.author_name} className="mt-1 block w-full" autoComplete="author_name" isFocused={true} handleChange={onHandleChange} required />

                                        <InputError message={errors.author_name} className="mt-2" />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div>
                                        <InputLabel forInput="author_description" value="author_description" />
                                        <TextArea name="author_description" className="mt-1 block w-full" autoComplete="author_description" isFocused={true} handleChange={onHandleChange} required >{data.author_description} </TextArea>
                                        <InputError message={errors.author_description} className="mt-2" />
                                    </div>
                                </div>
                                <div className="col-4 mt-auto">
                                    <div>
                                        <PrimaryButton  className="ml-4"  processing={processing} >
                                            Add new
                                        </PrimaryButton>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="row my-3">
                            <div className="col-2">
                                <h2>Author List</h2>
                            </div>
                        </div>
                        <table className="table table-bordered table-striped table-hover">
                            <thead className="bg-dark text-light">
                                <tr>
                                    <th>sr No</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            {/* <tbody>{genredata}</tbody> */}
                            <tbody>
                                {authordata?.author?.data
                                    ? authordata?.author?.data?.map((user) => (
                                          <tr key={user?.id}>
                                              <td>{user?.id}</td>
                                              <td>{user?.author_name}</td>
                                              <td>{user?.author_description}</td>
                                          </tr>
                                      ))
                                    : "Loading..."}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan={3}>
                                    {/* {JSON.stringify(authordata?.author) } */}
                                        <Pagination
                                            activePage={
                                                authordata?.author?.current_page
                                                    ? authordata?.author
                                                          ?.current_page
                                                    : 0
                                            }
                                            itemsCountPerPage={
                                                authordata?.author?.per_page
                                                    ? authordata?.author?.per_page
                                                    : 0
                                            }
                                            totalItemsCount={
                                                authordata?.author?.total
                                                    ? authordata?.author?.total
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
                        </table>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
