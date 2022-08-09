import React from 'react';

const WritingInput = () => {
    return (
        <>
            <div className="inputContainer ">
                <div className="inner">
                    <p className="my-5 text-xl font-semibold">글을 입력해주세요!</p>
                    <input
                        className="w-1/2 border-2 h-10 p-4 rounded-lg mb-10"
                        placeholder="이미지에 들어갈 글을 작성해주세요!"
                        type="text"
                    />  
                </div>    
            </div>  
        </>
    );
};

export default WritingInput;