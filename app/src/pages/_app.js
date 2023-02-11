import '@/styles/globals.css'
import {PT_Sans_Narrow } from '@next/font/google'
import Layout from '@/components/Layout'
import Head from 'next/head'


export default function App({ Component, pageProps }) {

  return (
    
  <Layout>
    <Component {...pageProps} />
  </Layout>
  
   
 
)}
