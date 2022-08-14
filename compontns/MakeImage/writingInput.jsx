import React, { useEffect, useState, useRef } from 'react';
import Head from 'next/head';
import img from '../../public/image/macbookImg.png'
import EditBox from './editBox';

// https://lts0606.tistory.com/485
// https://jm0121.tistory.com/3 text 여러개 추가하는거 참고
const WritingInput = ({ imgData }) => {
    let [innerText, setInnerText] = useState('');
    let [textColor, setTextColor] = useState('black');
    let [fontSize, setFontSize] = useState('26px');
    let [textStyle, setTextStyle] = useState('nanumBold');
    let [textBox, setTextBox] = useState([]);

    let textInput = useRef('');

    let canvas, ctx, image;

    const addText = event => {
        if (textInput.current.value === '') {
            alert('이전 text를 입력하고 추가해주세요.');
            return;
        }
        setTextBox(textBox.concat(<TextBox/>))
    }
    const TextBox = () => {
        return (
            <div className="textInputBox">
                <div className="editBox flex">
                    <p className="my-5 mr-10 text-xl font-semibold">글을 입력해주세요!</p>
                    <EditBox
                        setTextColor={setTextColor}
                        setFontSize={setFontSize}
                        setTextStyle={setTextStyle}
                    />
                </div>
                <input
                    ref={ textInput }
                    onChange={inText}
                    id="txtBox"
                    className="w-1/2 border-2 h-10 p-4 rounded-lg mb-10"
                    placeholder="이미지에 들어갈 글을 작성해주세요!"
                    type="text"
                />  
            </div>
        )
    }

    const inText = (text) => {
        setInnerText(text.target.value);
    }
    
    const textSelection = function (x, y, text) {
        const tx = text.x, ty = text.y, tWidth = text.width;
        const tHeight = text.height;
        return (x >= tx - tWidth / 2 && x <= tx + tWidth / 2 && y >= ty - tHeight && y <= ty);
    }

    const drawText = function (text) {
        image = new Image();
        image.onload = function () {
            ctx.drawImage(image, 0, 0, 300, 250);
            ctx.fillText(text.text, text.x, text.y);
            ctx.font = text.font;
        }
        image.src = imgData;
        ctx.textAlign = "center";
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = text.fillStyle;
        text.width = Number(ctx.measureText(text.text).width.toFixed(0));
    }

    const downloadImg = (event) => {
        let downloadData = document.querySelector('.download');
        downloadData.href = canvas.toDataURL();
        
    }

    // 색이나, 글자 크기 변경되면 text 사라짐.
    useEffect(() => {
        console.log(textBox);
        setInnerText('');
    }, [textColor, fontSize]);

    useEffect(() => {
        canvas = document.getElementById('canvas');
        ctx = canvas.getContext('2d');

        const start = { x: 0, y: 0 }, offset = { x: canvas.offsetLeft, y: canvas.offsetTop },
            
        mouseDown = false, selection = false;
        canvas.addEventListener("mousedown", function(e){
            e.preventDefault();
            e.stopPropagation();
            const winScrollTop = window.scrollY;
            start.x = parseInt(e.clientX - offset.x);
            start.y = parseInt(e.clientY - offset.y + winScrollTop);
            if(textSelection(start.x, start.y, text)){
                selection = true;
            }
            mouseDown = true;
        });

        canvas.addEventListener("mousemove", function(e){
            e.preventDefault();
            if(mouseDown && selection){
                const winScrollTop = window.scrollY,
                      mouseX = parseInt(e.clientX - offset.x),
                      mouseY = parseInt(e.clientY - offset.y + winScrollTop);
                const dx = mouseX - start.x, dy = mouseY - start.y;
                    
                start.x = mouseX;
                start.y = mouseY;
                
                text.x += Number(dx.toFixed(0));
                text.y += Number(dy.toFixed(0));
                drawText(text);
            }
        });

        canvas.addEventListener("mouseup", function(e){
            mouseDown = false;
            selection = false; 
        });

        const text = {
            text: innerText,
            font: `${fontSize} nanumBold`,
            fillStyle: textColor,
            x: canvas.width,
            y: canvas.height/2,
            width: 0,
            height: 26
        }

        drawText(text);
    }, [innerText, imgData]);
    return (
        <>
            <div className="inputContainer ">
                <div className="inner">
                    {/* textBox 부분 */}
                    { textBox } 
                    <button className="absolute rounded-xl bg-gray-300 w-32 h-10 text-white font-bold ml-5 right-80"
                    onClick={ addText }>텍스트 추가</button>
                    <div className="content flex">
                        <canvas id="canvas" height="300" width="300px" 
                            className="canvas m-auto left-0 right-0 bg-transparent"></canvas>
                                                <canvas id="canvas" height="300" width="300px" 
                            className="canvas m-auto left-0 right-0 bg-transparent"></canvas>
                    </div>
                    <button
                        className="w-40 h-10 bg-gray-300 text-white rounded-lg text-slate-800 font-bold">
                        <a onClick={downloadImg}
                            className="download" href="" download="my_image.png">이미지 다운로드</a>
                    </button>
                </div>    
            </div>
        </>
    );
};

export default WritingInput;