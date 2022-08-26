import React, { useEffect, useState, useRef } from 'react';
import Head from 'next/head';
import img from '../../public/image/macbookImg.png'
import EditBox from './editBox';
import { inFile } from '../../lib/shareData';

// https://lts0606.tistory.com/485
// https://jm0121.tistory.com/3 text 여러개 추가하는거 참고
// https://wormwlrm.github.io/kwakcheolyong/ <- 이렇게 만들기
const WritingInput = ({ imgData }) => {
    let [innerText, setInnerText] = useState('');
    let [textColor, setTextColor] = useState('white');
    let [fontSize, setFontSize] = useState('35px');
    let [textStyle, setTextStyle] = useState('nanumBold');
    let [textBox, setTextBox] = useState([]);

    let textInput = useRef('');

    let canvas, ctx, image;
    let text;

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
        let height = 10;
        let texts = [];
        // enter('\n') 기준으로 문자열 나누기
        texts.push(text.text.split('\n'));
        image.onload = function () {
            let height = 230;
            ctx.drawImage(image, 0, 0, 500, 350);
            for (let i = 0; i < texts[0].length; i++){
                height += 40;
                ctx.fillText(texts[0][i], 250, height);   
                ctx.strokeText(texts[0][i], 250, height);
                ctx.font = `${fontSize} BM YEONSUNG OTF`;
                ctx.strokeStyle = 'black';
            }
            document.querySelector('.content').style.display = 'flex';
        }
        image.src = imgData;
        ctx.textAlign = "center";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = text.fillStyle;
        text.width = Number(ctx.measureText(text.text).width.toFixed(0));
    }

    // 이미지를 다운로드 할 수 있게 해준다.
    const downloadImg = (event) => {
        let downloadData = document.querySelector('.download');
        downloadData.href = canvas.toDataURL();   
    }

    // 자신이 만든 이미지를 공유.
    const shareImg = event => {
        alert('추가되었습니다!');
        let downloadData = document.querySelector('.download');
        event.preventDefault();
        inFile(canvas.toDataURL());   
    }

    // 색이나, 글자 크기 변경되면 text 사라짐.
    useEffect(() => {
        // console.log(textBox);
        setInnerText('');
    }, [textColor, fontSize]);

    useEffect(() => {
        canvas = document.getElementById('canvas');
        ctx = canvas.getContext('2d');

        const start = { x: 0, y: 0 }, offset = { x: canvas.offsetLeft, y: canvas.offsetTop },
            
        mouseDown = false, selection = false;
        canvas.addEventListener("mousedown", function (e) {
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

        text = {
            text: innerText,
            font: `${fontSize} nanumBold`,
            fillStyle: textColor,
            x: canvas.width,
            y: canvas.heigh + 20,
            width: 0,
            height: 100
        }

        drawText(text);
    }, [innerText, imgData]);

    // text 추가 컴포넌트
    const TextBox = () => {
        return (
            <div className="textInputBox">
                <div className="editBox flex">
                    <p className="my-5 mr-10 text-xl font-semibold">글을 입력해주세요!</p>
                    <textarea
                        ref={ textInput }
                        onChange={inText}
                        id="txtBox"
                        className="w-1/2 border-2 h-10 p-4 rounded-lg mb-10"
                        placeholder="이미지에 들어갈 글을 작성해주세요!"
                        type="text"
                    />
                </div>
            </div>
        )
    }

    return (
        <>
            <div className="inputContainer ">
                <div className="inner">
                    <div className="content flex hidden">
                        <canvas id="canvas" width="500%" height="350vh"
                            className="canvas mt-10 m-auto left-0 right-0 bg-transparent leading-10"></canvas>
                    </div>
                    <div className="textInputBox">
                        <div className="editBox flex">
                            <p className="my-5 mr-10 text-xl font-semibold">글을 입력해주세요!</p>
                        </div>
                        <textarea
                            ref={ textInput }
                            onChange={inText}
                            id="txtBox"
                            className="lg:w-1/2 md: w-full border-2 h-12   p-4 rounded-lg"
                            placeholder="이미지에 들어갈 글을 작성해주세요!"
                            type="text"
                        />  
                        <EditBox
                            setTextColor={setTextColor}
                            setFontSize={setFontSize}
                            setTextStyle={setTextStyle}
                        />
                    </div>
                    <button
                        className="w-40 h-10 bg-gray-300 text-white rounded-lg text-slate-800 font-bold mt-10">
                        <a onClick={downloadImg}
                            className="download" href="" download="my_image.png">이미지 다운로드</a>
                    </button>
                    <button
                        className="w-40 h-10 bg-gray-300 text-white rounded-lg text-slate-800 font-bold mx-5 mt-10">
                        <a onClick={shareImg}
                            className="download" href="" download="my_image.png">이미지 공유</a>
                    </button>
                </div>    
            </div>
        </>
    );
};

export default WritingInput;