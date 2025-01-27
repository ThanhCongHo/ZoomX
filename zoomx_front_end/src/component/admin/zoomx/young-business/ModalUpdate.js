import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import { doPut } from '../../../../lib/DataSource';

export default function ModalUpdate(props) {
    let pj = [];
    props.data?.imageYoung.map(item => {
        pj.push(item.url)
        return pj;
    })
    const [fileImageYoung, setFileImageYoung] = useState(pj);
    const [young_business, setYoungBusiness] = useState(props.data);
    let handleYoungBusiness = (e) => {
        const { name, value } = e.target
        setYoungBusiness({
            ...young_business,
            [name]: value
        })
    }
    let handleFileImageYoung = (e) => {
        let image = [];
        image.push(e.target.files);
        let listImage = []
        for (let i = 0; i < image[0].length; i++) {
            listImage.push(URL.createObjectURL(image[0][i]))
        }
        setFileImageYoung(listImage)
    }
    const updateYoungBusiness = async () => {
        props.handleLoading(true)
        const path = `/youngbusiness/${young_business._id}`;
        const headers = {
            "Content-Type": "multipart/form-data"
        }
        const data = new FormData();
        data.append("title", young_business?.title);
        data.append("content", young_business?.content)
        let listPj = Array.from(young_business.imageYoung)
        for (let i = 0; i < listPj.length; i++) {
            data.append("imageYoung", listPj[i]);
        }
        try {
            let res = await doPut(path, headers, data)
            if(res.status === 200){
                props.handleLoading(false)
                props.getYoungBusiness()
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
                        <label className="label-txt">Tiêu đề: </label> <input className="input-txt"
                            name="title" onChange={handleYoungBusiness}
                            type="text"
                            value={young_business?.title}
                        />
                    </div>
                    <div>
                        <label className="label-txt">Nội dung: </label> <textarea className="input-txt"
                            name="content" onChange={handleYoungBusiness}
                            type="text"
                            value={young_business?.content}
                        />
                    </div>
                    <div>
                        <label>Ảnh :</label> <input id="file-input" type="file"
                            name="imageYoung"
                            onChange={(e) => {
                                setYoungBusiness({
                                    ...young_business,
                                    imageYoung: e.target.files
                                })
                                handleFileImageYoung(e)
                            }}
                            multiple
                        />
                    </div>
                    <div style={{ display: 'flex' }}>
                        {fileImageYoung?.map((item,idx) => {
                            return (
                                <div key={idx} style={{ margin: 10 }}>
                                    <img id="target" src={item} style={{ width: 300, height: 200, objectFit: 'cover' }} alt="" />
                                </div>
                            )
                        })}
                    </div>
                    <div className="btn--bottom">
                        <div className="wrapper__btn">
                            <button className="back-btn" onClick={props.onHide}>Quay lại</button>
                            <button onClick={() => {
                                updateYoungBusiness()
                                setFileImageYoung(null)
                                props.onHide()
                            }}>Xác nhận</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}