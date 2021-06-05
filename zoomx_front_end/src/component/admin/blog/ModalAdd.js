import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import { doGet, doPost } from '../../../lib/DataSource';
import { Editor } from '@tinymce/tinymce-react';
import { tinyconfig } from '../../../TinyConfig';
export default function ModalAdd(props) {
   
    const [blog, setBlog] = useState({})
    const [fileImage, setFileImage] = useState([]);
    const [categoryBlog, setCategoryBlog] = useState();
    useEffect(() => {
        getCategory()
    }, [])
 
    const getCategory = async () => {
        const path = "/categoryblog";
        const headers = {
            Accept: "*/*"
        }
        try {
            var resp = await doGet(path, headers);
            if (resp.status === 200) {
                setCategoryBlog(resp.data)

            }
        } catch (e) {
            console.log(e)
        }
    }

    let handleBlog = (e) => {
        const { name, value } = e.target
        setBlog({
            ...blog,
            [name]: value
        })
    }
    let handleFileImage = (e) => {
        let image = [];
        image.push(e.target.files);
        let listImage = []
        for (let i = 0; i < image[0].length; i++) {
            listImage.push(URL.createObjectURL(image[0][i]))
        }
        setFileImage(listImage)
    }
    const addBlog = async () => {
        props.handleLoading(true)
        const path = "/blog";
        const headers = {
            "Content-Type": "multipart/form-data"
        }
        const data = new FormData();
        data.append("title", blog?.title);
        data.append("date", blog?.date);
        data.append("contentStart", blog?.contentStart);
        data.append("contentMain", blog?.contentMain);
        data.append("contentBegin", blog?.contentBegin);
        data.append("categoryId",blog?.categoryId)

        let listPj = Array.from(blog.imageBlog)
        for (let i = 0; i < listPj.length; i++) {
            data.append("imageBlog", listPj[i]);
        }

        try {
            let res = await doPost(path, headers, data)
            if (res.status === 200) {
                setBlog(null)
                props.handleLoading(false)
                props.getSearch()
            }

        } catch (error) {
            props.handleLoading(false)
            console.log(error)
        }
    }
    return (
        <>
            <Modal
                {...props}
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
            >
                <div className="wrapper__modal">
                <div>
                        <label className="label-txt">Tieu de: </label> <input className="input-txt"
                            name="title"
                            type="text"
                            onChange={handleBlog}

                        />
                    </div>
                    <div>
                        <label className="label-txt">Ngày viet: </label> <input className="input-txt"
                            name="date"
                            type="date"
                            onChange={handleBlog}

                        />
                    </div>
                    <div>
                        <label>Ảnh dự án:</label> <input id="file-input" type="file"
                            name="imageInfor"
                            onChange={(e) => {
                                setBlog({
                                    ...blog,
                                    imageBlog: e.target.files
                                })
                                handleFileImage(e)

                            }}
                            multiple
                        />
                    </div>
                    <div style={{ display: 'flex' }}>
                        {fileImage?.map((item,index) => {
                            return (
                                <div style={{ margin: 10 }} key={index}>
                                    <img id="target" src={item} style={{ width: 300, height: 200, objectFit: 'cover' }} alt="" />
                                </div>
                            )
                        })}
                    </div>
                    <div>
                        <label className="label-txt">Chọn danh muc bai viet: </label>
                        <select name="typeInvestment" id="cars" onChange={(e) => {
                            setBlog({
                                ...blog,
                                categoryId: e.target.value
                            })
                        }}>
                            <option value="0">Chon</option>

                            {categoryBlog?.map((item, idx) => {
                                return (
                                    <option key={idx} value={item._id}>{item.name}</option>
                                )
                            })}
                        </select>

                    </div>
                    
                    <div>
                        <label className="label-txt">Mo bai: </label>
                        <Editor apiKey="g8rgmljyc6ryhlggucq6jeqipl6tn5rnqym45lkfm235599i"
                            init={tinyconfig}

                            onEditorChange={(event) => {
                                setBlog({
                                    ...blog,
                                    contentStart: event
                                })
                            }}
                            

                        />
                    </div>
                    <div>
                        <label className="label-txt">Than bai: </label>
                        <Editor apiKey="g8rgmljyc6ryhlggucq6jeqipl6tn5rnqym45lkfm235599i"
                            init={tinyconfig}

                            onEditorChange={(event) => {
                                setBlog({
                                    ...blog,
                                    contentMain: event
                                })
                            }}

                        />
                    </div>
                    <div>
                        <label className="label-txt">Ket bai: </label>
                        <Editor apiKey="g8rgmljyc6ryhlggucq6jeqipl6tn5rnqym45lkfm235599i"
                            init={tinyconfig}

                            onEditorChange={(event) => {
                                setBlog({
                                    ...blog,
                                    contentBegin: event
                                })
                            }}

                        />
                    </div>

                    <div className="btn--bottom">
                        <div className="wrapper__btn">
                            <button className="back-btn" onClick={() => {
                                props.onHide()
                                setFileImage(null)
                            }}>Quay lại</button>
                            <button
                                onClick={() => {
                                    addBlog()
                                   setFileImage(null)
                                    props.onHide()
                                }}

                            >Xác nhận</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}