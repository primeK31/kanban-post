import Head from 'next/head'

function Heads() {
  return (
    <div>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <header className="bg-black rounded-lg shadow m-3 dark:bg-gray-800 border-b-2">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">

                <a href="/" className="flex items-center">
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">KanbanPost</span>
                </a>

                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                    <a href="/" className="hover:text-white me-5 md:me-6">Home</a>
                    </li>
                    <li>
                        <a href="/posts" className="hover:text-white me-5 md:me-6">Posts</a>
                    </li>
                    <li>
                        <a href="/about" className="hover:text-white me-5 md:me-6">About</a>
                    </li>
                </ul>

            </div>
        </header>
    </div>
    )
}

export default Heads;