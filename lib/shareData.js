// json 파일 만들어서 공유한 데이터 추가시켜주기.
import axios from 'axios';
import img from '../lib/imgData.json'

export function inFile(shareImg) {
    // console.log('', img);
    console.log(shareImg); // 이미지 데이터 삽입
    axios.post('http://localhost:3001/shareImg', {
        // id: '',
        img: shareImg
    })
    // axios.get('http://localhost:3001/shareImg').then(res => {
    //     console.log(res);
    // }).catch(err => {
    //     console.log(err);
    // })
}

export async function getShareImgData() {
    let res = await axios.get('http://localhost:3001/shareImg');
    return res;
}