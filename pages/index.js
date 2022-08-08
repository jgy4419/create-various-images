import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Section1 from '../compontns/Main/mainSection1';
import Section2 from '../compontns/Main/mainSection2';

export default function Home() {
  return (
    <div>
      <Section1 />
      <Section2 />
    </div>
  )
}
