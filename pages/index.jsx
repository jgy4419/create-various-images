import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Section1 from '../compontns/Main/mainSection1';
import Section2 from '../compontns/Main/mainSection2';
import Section3 from '../compontns/Main/mainSection3';
import { useState, useEffect } from 'react';

export default function Home() {
  // const [user, { mutate }] = useCurrentUser();
  // const [errorMsg, setErrorMsg] = useState("");

  // const handleSubmit(e){
  //   e.preventDefault();
  //   const body = {
  //     name: e.currentTarget.name.value;
  //     password: e.currentTarget.password.value;
  //   }
  //   const res = await fetch("/api/users", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(body);
  //   })
  //   if (res.status === 200) {
  //     const userObj = await res.json();
  //     mutate()
  //   }
  // }
  // useEffect(async () => {
  //   const response = await fetch('http://localhost:3000/api/graphql', {
  //     method: 'POST',
  //     headers: {
  //       'Content-type': 'application/json'
  //     },
  //     body: JSON.stringify({ query: '{ users { name } }' })
  //   });
  //   const json = await response.json();
  //   console.log(json);
  // }, [])

  return (
    <div>
      <Section1 />
      {/* <form onSubmit={handleSubmit}>
        <input name="name" type="text">이름</input>
        <input name="password" type="password">비번</input>
        <button type="submit">데이터 보내주</button>
      </form> */}
      <Section2 />
      <Section3 />
    </div>
  )
}