import Link from 'next/link'
import MainLayout from '../components/layouts/MainLayout'

export default function HomePage() {
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
        HOLI BOLI SLACK Is working From Develop{' '}
        <code className={'code'}>pages/index.jsx</code>
      </p>
    </MainLayout>
  )
}
