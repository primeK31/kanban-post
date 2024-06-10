import Head from 'next/head'
import Heads from '../components/header'
import Foots from '../components/footer'


export default function AboutPage() {
  return (
    <div>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
      <Heads></Heads>
      <div className="bg-black rounded-lg dark:bg-gray-800 w-full md:w-auto mx-10 p-10">
            <h1 className='m-10 text-2xl'>Powered by Brotherhood of Internet Stores, Okoshko Production and Kanban Inc.</h1>
        </div>
      <Foots></Foots>
    </div>
  )
}