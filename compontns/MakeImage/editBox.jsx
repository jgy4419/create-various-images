import React, { useState, useEffect } from 'react';

const EditBox = ({ setTextColor, setFontSize, setTextStyle }) => {
    let [fontSizeSelect, setFontSizeSelect] = useState('');
    let [colorSelect, setColorSelect] = useState('')

    let fontSizeList = ['글자 크기를 지정해주세요.', '26px', '35px', '50px', '60px', '70px'];
    let colorList = ['글자색을 지정해주세요.', 'white', 'black', 'yellow', 'green', 'blue'];
    let fontStyle = ['글꼴을 선택해주세요.', 'nanumBold', 'normal', 'italic', 'oblique', 'inherit'];

    const changeStyle = () => {
        setTextColor(document.querySelector('.colorContain').value);
        setFontSize(document.querySelector('.fontSizeContain').value);
        setTextStyle(document.querySelector('.fontStyleContain').value);
    }

    return (
        <>
            <div className="editContain mt-3">
                <select onChange={changeStyle} className="colorContain h-10 px-2">
                    {
                        colorList.map((color, index) => {
                            return (
                                <option key={index}>{ color }</option>
                            )
                        })
                    }
                </select>  
                <select onChange={changeStyle} className="fontSizeContain h-10 px-2">
                    {
                        fontSizeList.map((size, index) => {
                            return (
                                <option key={index}>{ size }</option>
                            )
                        })
                    }
                </select>  
                <select onChange={changeStyle} className="fontStyleContain h-10 px-2">
                    {
                        fontStyle.map((style, index) => {
                            return (
                                <option key={index}>{ style }</option>
                            )
                        })
                    }
                </select>  
            </div>
        </>
    );
};

export default EditBox;