import React, { useState, useEffect } from 'react';
import WritingInput from '../../compontns/MakeImage/writingInput';
import FileUpload from '../../compontns/MakeImage/fileUpload';

const MakeImage = () => {
    return (
        <>
            <div className="makeImageContain w-screen">
                <div className="inner">
                    <WritingInput/>
                    <FileUpload/>
                </div>
            </div>
        </>
    );
};

export default MakeImage;