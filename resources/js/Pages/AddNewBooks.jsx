import React, { useEffect, useState } from "react";
// import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, useForm } from "@inertiajs/inertia-react";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import TextArea from "@/Components/TextArea";
import Dropzone from "react-dropzone-uploader";
export default function AddNewBooks(props) {
    
    const [commonData, setCommonData] = useState({});
    const [filesData, setFilesData] = useState("");
    const { data, setData, post, processing, errors, reset } = useForm({
        title: "",
        description: "",
        image: "",
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
  
      const getUploadParams = ({ meta }) => { return { url: 'https://httpbin.org/post' } }
  
      // called every time a file's `status` changes
      const handleChangeStatus = ({ meta, file }, status) => { setFilesData(file); }
      
      // receives array of files that are done uploading when submit button is clicked
      const handleSubmit = (event) => {
        // event.preventDefault()
        // event.stopPropagation();
        // event.processQueue();
        // this.processQueue();
        // myDropzone.processQueue();
        const data = new FormData()
        // console.log(filesData);
        // data.append('file', filesData)
        // console.log(data);
        const formData = new FormData();
        formData.append('image',filesData)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        axios.post("http://localhost:8000/api/imageupload",formData,config).then(res => { // then print response status
            console.warn(res);
            setData("image",res.data);
        })
       
    }
    const submit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log(data);
        post(route('register'));
        const baseURL = "http://localhost:8000/api/addnewbook";
        axios.post(baseURL, data).then((response) => {
            console.log(response.data);
            // setPost(response.data);
            // let myData = Object.entries(response.data).map(
            //     ([anythingreferetokey, val], i) => {
            //         return (
            //             <tr key={i}>
            //                 <td>{i + 1}</td> <td>{val.title}</td>{" "}
            //                 <td>{val.description}</td>{" "}
            //             </tr>
            //         );
            //     }
            // );
            // setSometData(myData);
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
                        <div className="col-md-6">
                        <>
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
                                <div className="col-4">
                                <Dropzone
                                    getUploadParams={getUploadParams}
                                    onChangeStatus={handleChangeStatus}
                                    onSubmit={handleSubmit}
                                    accept="image/*,audio/*,video/*"
                                    />
                                    {/* <InputLabel forInput="imgage" value="Image" />
                                    <input type="file" onChange={onFileChange} />
                                    <button onClick={onFileUpload}>
                                    Upload!
                                    </button>        */}
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col">
                                    <InputLabel forInput="publisher_id" value="Publisher" />
                                    <select onChange={onHandleChange} className="form-control" name="publisher_id" id="publisher_id"> 
                                    {commonData?.publisher ? commonData?.publisher?.map((publish) => (
                                          <option value={publish?.id} key={publish?.id}>{publish?.publisher_name}</option>
                                      )) : <option>No Publisher</option>}
                                    </select>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col">
                                    <InputLabel forInput="author_id" value="Author" />
                                    <select onChange={onHandleChange} className="form-control" name="author_id" id="author_id"> 
                                    {commonData?.author ? commonData?.author?.map((author) => (
                                          <option value={author?.id} key={author?.id}>{author?.author_name}</option>
                                      )) : <option>No Author</option>}
                                    </select>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col">
                                    <InputLabel forInput="genre_id" value="Genre" />
                                    <select onChange={onHandleChange} className="form-control" name="genre_id" id="genre_id"> 
                                        {commonData?.genre ? commonData?.genre?.map((genre) => (
                                          <option value={genre?.id} key={genre?.id}>{genre?.title}</option>
                                      )) : <option>No Genre</option>}
                                    </select>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col">
                                    <button onClick={submit}>Save</button>
                                    {/* <PrimaryButton  className="" onClick  processing={processing} >
                                        Add new
                                    </PrimaryButton> */}
                                </div>
                            </div>
                            </>
                        </div>
                        {/* {commonData.author ? JSON.stringify(commonData.author) :"false" } */}
                       
                        {/* {commonData?.publisher ? JSON.stringify(commonData?.publisher):"false"} */}
                        
                        

                        
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
