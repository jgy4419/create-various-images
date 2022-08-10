import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import img from '../../public/image/macbookImg.png'

// https://lts0606.tistory.com/485
const WritingInput = () => {
    let [innerText, setInnerText] = useState('Test');
    let canvas;
    let ctx;

    const inText = (text) => {
        setInnerText(text.target.value);
    }
    
    const textSelection = function (x, y, text) {
        const tx = text.x, ty = text.y, tWidth = text.width;
        const tHeight = text.height;
        return (x >= tx - tWidth/2 && x <= tx + tWidth/2 && y >= ty - tHeight && y <= ty);
    }
    // test 배경 이미지 https://blog.kakaocdn.net/dn/XlVZH/btqIH50as13/LwCnDkeRzRz9kETtUMaHyk/img.jpg
    // let img = '';
    const drawText = function (text) {
        let image = new Image();
        image.onload = function () {
            ctx.fillStyle = "white";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = text.fillStyle;
            ctx.font = text.font;
            ctx.textAlign = "center";
            ctx.fillText(text.text, text.x, text.y);
            text.width = Number(ctx.measureText(text.text).width.toFixed(0));
            ctx.drawImage(image, 0, 0);
        }
        image.src = 'https://blog.kakaocdn.net/dn/XlVZH/btqIH50as13/LwCnDkeRzRz9kETtUMaHyk/img.jpg'
    }

    useEffect(() => {
        // if(!img) return
        canvas = document.getElementById('canvas');
        ctx = canvas.getContext('2d');
        img.onload = function () {
            ctx.drawImage(img, 0, 0);
        }
        const start = {x: 0, y: 0}, offset = {x: canvas.offsetLeft, y: canvas.offsetTop},
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
            font: "26px nanumBold",
            fillStyle: "#333",
            x: canvas.width,
            y: canvas.height/2,
            width: 0,
            height: 26
        }
        drawText(text);
    }, [innerText]);
    return (
        <>
            <div className="inputContainer ">
                <div className="inner">
                    <p className="my-5 text-xl font-semibold">글을 입력해주세요!</p>
                    <input
                        onChange={inText}
                        id="txtBox"
                        className="w-1/2 border-2 h-10 p-4 rounded-lg mb-10"
                        placeholder="이미지에 들어갈 글을 작성해주세요!"
                        type="text"
                    />  
                </div>    
                <canvas id="canvas" height="300" width="800px" 
                className="canvas absolute z-10 bg-transparent"></canvas>
            </div>  
            <style jsx>{`
                .canvas{
                    font-size: 20px;
                    background-color: #333
                }
            `}</style>
        </>
    );
};

export default WritingInput;