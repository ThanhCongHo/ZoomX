import { Editor } from '@tinymce/tinymce-react';
import React, { useEffect, useState } from 'react';
import { doGet, doPost } from '../../../lib/DataSource';
import { tinyconfig } from '../../../TinyConfig';
import { tinyconfigBlog } from '../../../TinyConfigBlog';
import { useHistory } from 'react-router-dom';
import Loading from '../../image/Loading';
export default function ProjectAdd() {
    const [fileCover, setFileCover] = useState();
    const [project, setProject] = useState({})
    const [fileInfor, setFileInfor] = useState();
    const [investment, setInvestment] = useState();
    const [loading, setLoading] = useState(false);
    let history = useHistory();
    useEffect(() => {
        getInvestment()
    }, [])
    const getInvestment = async () => {
        const path = "/investment-all";
        const headers = {
            Accept: "*/*"
        }
        try {
            var resp = await doGet(path, headers);
            if (resp.status === 200) {
                setInvestment(resp.data)
            }
        } catch (e) {
            console.log(e)
        }
    }
    let handleProject = (e) => {
        const { name, value } = e.target
        setProject({
            ...project,
            [name]: value
        })
    }
    const addProject = async () => {
        setLoading(true)
        const path = "/project";
        const headers = {
            "Content-Type": "multipart/form-data"
        }
        const data = new FormData();
        data.append("projectName", project?.projectName);
        data.append("typeInvestment", project?.typeInvestment);
        data.append("address", project?.address);
        data.append("acreage", project?.acreage);
        data.append("totalInvestment", project?.totalInvestment);
        data.append("categoryInvestment", project?.categoryInvestment);
        data.append("description", project?.description);
        data.append("imageCover", project?.imageCover);
        data.append("imageInfor", project?.imageInfor);
        data.append("dateStart", project?.dateStart);
        data.append("dateFinish", project?.dateFinish);
        try {
            let res = await doPost(path, headers, data)
            if (res.status === 200) {
                setLoading(false)
                alert("Bạn đã thêm dự án thành công!")
                history.push({
                    pathname: "/admin",
                    state: "project"
                })

            }
        } catch (error) {
            setLoading(false)
            console.log(error)
            alert("Thất bại, vui lòng kiểm tra lại thông tin!")
        }
    }
    return (
        <>
            {!loading ?
                <div className="wrapper__modal">
                    <div>
                        <label className="label-txt">Tên dự án: </label> <input className="input-txt"
                            name="projectName"
                            type="text"
                            onChange={handleProject}
                        />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 20, marginBottom: 20 }}>
                        <div>
                            <div>
                                <label>Ảnh Cover:</label> <input id="file-input" type="file"
                                    name="imageCover"
                                    onChange={(e) => {
                                        setProject({
                                            ...project,
                                            imageCover: e.target.files[0]
                                        })
                                        setFileCover(URL.createObjectURL(e.target.files[0]))
                                    }}
                                />
                            </div>
                            {fileCover ? <div>
                                <img id="target" src={fileCover} style={{ width: 700, height: 200, objectFit: 'cover' }} alt="" />
                            </div> : <></>}
                        </div>
                        <div>
                            <div>
                                <label>Ảnh Infor:</label> <input id="file-input" type="file"
                                    name="imageInfor"
                                    onChange={(e) => {
                                        setProject({
                                            ...project,
                                            imageInfor: e.target.files[0]
                                        })
                                        setFileInfor(URL.createObjectURL(e.target.files[0]))
                                    }}
                                />
                            </div>
                            {fileInfor ? <div>
                                <img id="target" src={fileInfor} style={{ width: 300, height: 200, objectFit: 'cover' }} alt="" />
                            </div> : <></>}
                        </div>
                    </div>
                    <div>
                        <label className="label-txt">Chọn lĩnh vực đầu tư: </label>
                        <select name="typeInvestment" id="cars" onChange={(e) => {
                            setProject({
                                ...project,
                                typeInvestment: e.target.value
                            })
                        }}>
                            <option value="0">Chọn lĩnh vực đầu tư</option>

                            {investment?.map((item, idx) => {
                                return (
                                    <option key={idx} value={item._id}>{item.investmentName}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div>
                        <label className="label-txt">Địa chỉ: </label> <input className="input-txt"
                            name="address"
                            type="text"
                            onChange={handleProject}
                        />
                    </div>
                    <div>
                        <label className="label-txt">Ngày khởi công: </label> <input className="input-txt"
                            name="dateStart"
                            type="date"
                            onChange={handleProject}
                        />
                    </div>
                    <div>
                        <label className="label-txt">Ngày dự đoán hoàn thành: </label> <input className="input-txt"
                            name="dateFinish"
                            type="date"
                            onChange={handleProject}
                        />
                    </div>
                    <div>
                        <label className="label-txt">Diện tích: </label> <input className="input-txt"
                            name="acreage"
                            type="text"
                            onChange={handleProject}
                        />
                    </div>
                    <div>
                        <label className="label-txt">Tổng vốn đầu tư: </label> <input className="input-txt"
                            name="totalInvestment"
                            type="text"
                            onChange={handleProject}
                        />
                    </div>
                    <div>
                        <label className="label-txt">Hạng mục đầu tư: </label>
                        <Editor apiKey="g8rgmljyc6ryhlggucq6jeqipl6tn5rnqym45lkfm235599i"
                            init={tinyconfig}
                            onEditorChange={(event) => {
                                setProject({
                                    ...project,
                                    categoryInvestment: event
                                })
                            }}

                        />
                    </div>
                    <div>
                        <label className="label-txt">Mô tả: </label>
                        <input id="my-file" type="file" name="my-file" style={{ display: "none" }} onChange="" />
                        <Editor apiKey="g8rgmljyc6ryhlggucq6jeqipl6tn5rnqym45lkfm235599i"
                            init={tinyconfigBlog}
                            onEditorChange={(event) => {
                                setProject({
                                    ...project,
                                    description: event
                                })
                            }}
                        />
                    </div>

                    <div className="btn--bottom">
                        <div className="wrapper__btn">
                            <button className="back-btn" onClick={() => {
                                setFileCover(null)
                                setFileInfor(null)
                                history.push({
                                    pathname: "/admin",
                                    state: "project"
                                })
                            }}>Quay lại</button>
                            <button
                                onClick={() => {
                                    addProject()
                                }}
                            >Xác nhận</button>
                        </div>
                    </div>
                </div>
                :
                <Loading />
            }
        </>
    )
}