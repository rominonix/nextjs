import { GetServerSideProps } from 'next'

import axios from 'axios'
import Link from 'next/link'
import { useEffect } from 'react'
import MainLayout from '../components/layouts/MainLayout'

export default function HomePage() {

  // useEffect(()=>{
  //   data
  // }, [])
  return (
    <MainLayout>
      <h1>Home page</h1>
      <h1 className={'title'}>
        Go to <Link href='/about'>About</Link>
      </h1>

      <input type="text" />
      <input type="text" />
      <button>loggin</button>
      <p className={'description'}>
        Get started by editing{' '}
        <code className={'code'}>pages/index.jsx</code>
      </p>
      <div></div>
    </MainLayout>
  )
}



