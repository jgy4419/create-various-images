import React, { useState } from 'react';

const EditBox = () => {
    let [colorSelect, setColorSelect] = useState('')
    let colorList = ['글자색을 지정해주세요.', 'white', 'black', 'yellow', 'green', 'blue'];
    let [fontSizeSelect, setFontSizeSelect] = useState('');
    let fontSizeList = ['글자 크기를 지정해주세요.', '26px', '35px', '50px', '60px', '70px']
    return (
        <>
            <div className="editContain mt-3">
                <select className="colorContain h-10">
                    {
                        colorList.map((color, index) => {
                            return (
                                <option key={index}>{ color }</option>
                            )
                        })
                    }
                    {/* <option selected>글자색을 지정해주세요.</option>
                    <option>white</option>
                    <option>black</option>
                    <option>yellow</option>
                    <option>green</option>
                    <option>blue</option> */}
                </select>  
                <select className="fontSizeContain h-10">
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