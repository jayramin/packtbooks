import React, { useEffect, useState } from "react";
// import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, useForm } from "@inertiajs/inertia-react";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import TextArea from "@/Components/TextArea";
export default function AddNewBooks(props) {
    
    const [commonData, setCommonData] = useState({});
    const [filesData, setFilesData] = useState("");
    const { data, setData, post, processing, errors, reset } = useForm({
        title: "",
        description: "",
    });
    
    // let [myDataAuthors,myDataGenre,myDataPubliehser] = ("","","");
    useEffect(() => {
        fetchData();
    }, []);
    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };
    const fetchData = async () => {
        const api = await fetch(`http://localhost:8000/api/allauthorsapi`);
        const apiPublisher = await fetch(`http://localhost:8000/api/allpublisherapi`);
        const apiGenre = await fetch(`http://localhost:8000/api/allgenreapi`);
        setCommonData({
            author: await api.json(),
            publisher: await apiPublisher.json(),
            genre: await apiGenre.json(),
        });
    };
    const onFileChange = event => {
        setFilesData({ image: event.target.files[0] });
      };
      
      // On file upload (click the upload button)
    const onFileUpload = () => {
      
        // Create an object of formData
        const formData = new FormData();
      
        console.log(filesData);
        // Update the formData object
        formData.append(
            "image",
            filesData);
        console.log("formData",formData);
      
        // Details of the uploaded file
      
        // Request made to the backend api
        // Send formData object
        axios.post("api/imageupload", formData);
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
                        <div className="col-md-6">
                            <div className="row mt-2">
                                <div className="col">
                                    <InputLabel forInput="title" value="title" />
                                    <TextInput type="text" name="title" value={data.title} className="mt-1 block w-full" autoComplete="title" isFocused={true} handleChange={onHandleChange} required />

                                    <InputError message={errors.title} className="mt-2" />
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col">
                                <InputLabel forInput="description" value="description" />
                                <TextArea name="description" className="mt-1 block w-full" autoComplete="description" isFocused={true} handleChange={onHandleChange} required >{data.description} </TextArea>
                                <InputError message={errors.description} className="mt-2" />
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col">
                                    <InputLabel forInput="isbn" value="isbn" />
                                    <TextInput type="tel" name="isbn" value={data.isbn} className="mt-1 block w-full" autoComplete="isbn" isFocused={true} handleChange={onHandleChange} required />

                                    <InputError message={errors.isbn} className="mt-2" />
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col">
                                    <InputLabel forInput="imgage" value="Image" />
                                    <input type="file" onChange={onFileChange} />
                                    <button onClick={onFileUpload}>
                                    Upload!
                                    </button>       
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col">
                                    <InputLabel forInput="publisher" value="Publisher" />
                                    <select className="form-control" name="publisher" id="publisher"> 
                                    {commonData?.publisher ? commonData?.publisher?.map((publish) => (
                                          <option key={publish?.id}>{publish?.publisher_name}</option>
                                      )) : <option>No Publisher</option>}
                                    </select>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col">
                                    <InputLabel forInput="author" value="Author" />
                                    <select className="form-control" name="author" id="author"> 
                                    {commonData?.author ? commonData?.author?.map((author) => (
                                          <option key={author?.id}>{author?.author_name}</option>
                                      )) : <option>No Author</option>}
                                    </select>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col">
                                    <InputLabel forInput="genre" value="Genre" />
                                    <select className="form-control" name="genre" id="genre"> 
                                        {commonData?.genre ? commonData?.genre?.map((genre) => (
                                          <option key={genre?.id}>{genre?.title}</option>
                                      )) : <option>No Genre</option>}
                                    </select>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col">
                                    <PrimaryButton  className=""  processing={processing} >
                                        Add new
                                    </PrimaryButton>
                                </div>
                            </div>
                        </div>
                        {/* {commonData.author ? JSON.stringify(commonData.author) :"false" } */}
                       
                        {/* {commonData?.publisher ? JSON.stringify(commonData?.publisher):"false"} */}
                        
                        

                        
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
