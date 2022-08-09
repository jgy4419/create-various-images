import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import Image from 'next/image';

const FileUpload = () => {
    // let [file, setFile] = useState('');
    const onDrop = useCallback(acceptedFiled => {
        uploadImg(acceptedFiled[0]);
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
    function uploadImg(file) {
        const reader = new FileReader();
        reader.onload = e => {
            let writeImage = document.querySelector('.writeImage');
            writeImage.style.display = 'block';
            writeImage.src = e.target.result;
        }
        reader.readAsDataURL(file);
    }
    return (
        <>
            <div className="uplodeContain">
                <div className="inner">
                    <img className="writeImage hidden w-1/2 m-auto rounded-lg mb-10" src='' alt="이미지" />
                    <div {...getRootProps()}
                        className="bg-gray-100 border-8 w-full h-36 border-dashed border-blue-100">
                        {/* <input className="imgLoad" type="file" accept=".jpg, .png"/> */}
                        <input {...getInputProps()} />
                        {
                            isDragActive ? 
                                <p className="text-center pt-12 text-xl font-semibold">Drag the files here!</p> :
                                <p className="text-center pt-12 text-xl font-semibold">Drag and drop some files here. or click to select files</p>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default FileUpload;