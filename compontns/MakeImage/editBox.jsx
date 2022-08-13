import React, { useState, useEffect } from 'react';

const EditBox = ({ setTextColor, setFontSize }) => {
    let [fontSizeSelect, setFontSizeSelect] = useState('');
    let [colorSelect, setColorSelect] = useState('')

    let fontSizeList = ['글자 크기를 지정해주세요.', '26px', '35px', '50px', '60px', '70px'];
    let colorList = ['글자색을 지정해주세요.', 'white', 'black', 'yellow', 'green', 'blue'];

    const changeStyle = () => {
        setTextColor(document.querySelector('.colorContain').value);
        setFontSize(document.querySelector('.fontSizeContain').value);
    }

    return (
        <>
            <div className="editContain mt-3">
                <select onChange={changeStyle} className="colorContain h-10">
                    {
                        colorList.map((color, index) => {
                            return (
                                <option key={index}>{ color }</option>
                            )
                        })
                    }
                </select>  
                <select onChange={changeStyle} className="fontSizeContain h-10 mx-10">
                    {
                        fontSizeList.map((size, index) => {
                            return (
                                <option key={index}>{ size }</option>
                            )
                        })
                    }
                </select>  
            </div>
        </>
    );
};

export default EditBox;