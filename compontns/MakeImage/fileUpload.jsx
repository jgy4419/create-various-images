import React, { useState, useCallback, useEffect, useRef } from 'react';
import { useDropzone } from 'react-dropzone';
import Image from 'next/image';

const FileUpload = props => {
    // text를 입력하면 -> onChange 함수 실행
    let [innerText, setInnerText] = useState('TEST');

    const onDrop = useCallback(acceptedFiled => {
        uploadImg(acceptedFiled[0]);
        props.setImgData(() => acceptedFiled[0]);
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
    function uploadImg(file) {
        const reader = new FileReader();
        reader.onload = e => {
            let writeImage = document.querySelector('.writeImage');
            // writeImage.style.display = 'block';
            writeImage.src = e.target.result;
            props.setImgData(e.target.result);
        }
        reader.readAsDataURL(file);
    }
    return (
        <>
            <div className="uplodeContain">
                <div className="inner">
                    <div className="relative uplode left-0 right-0 mb-10">
                        <img className="writeImage hidden w-1/2 m-auto rounded-lg mb-10" src='' alt="이미지" />
                        {/* <p className="absolute top-0">{ innerText }</p> */}
                    </div>
                    <div {...getRootProps()}
                        className="bg-gray-100 border-8 w-full h-36 border-dashed border-blue-100">
                        <input {...getInputProps()} />
                        {
                            isDragActive ? 
                            <p className="text-center pt-12 lg:text-xl md:text-base font-semibold">이미지가 드래그 되었습니다!</p> :
                            <p className="text-center pt-12 lg: lg:text-xl md:text-base font-semibold">여기를 클릭하거나, 이미지 파일을 드래그 해주세요!</p>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default FileUpload;