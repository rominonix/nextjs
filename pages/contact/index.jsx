import Link from 'next/link'
import MainLayout from '../../components/layouts/MainLayout'


export default function ContactPage(props) {
  return (
    <MainLayout>
      <h1>Contact page</h1>
      <h1 className={'title'}>
        Go to <Link href='/'>Home</Link>
      </h1>
      <h1 className={'title'}>
        Go to <Link href='/about'>About</Link>
      </h1>

      <p className={'description'}>
        Get started by editing{' '}
        <code className={'code'}>pages/contact.jsx</code>
      </p>
    </MainLayout>


  )
}