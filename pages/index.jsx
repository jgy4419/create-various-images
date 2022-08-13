import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Section1 from '../compontns/Main/mainSection1';
import Section2 from '../compontns/Main/mainSection2';
import Section3 from '../compontns/Main/mainSection3';
import { useState, useEffect } from 'react';


export default function Home({ characters}) {
  return (
    <>
      <div className="mainContain">
        <Section1 />
        <Section2 />
        <Section3 />
      </div>
      <style jsx>{`
      
      `}</style>
    </>
  )
}