import Head from 'next/head'
import Message from "../components/message";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Creatives minds" />
      </Head>

        <div className="ny-12 text-lg font-medium mt-20">
             <h2>See what people are saying</h2>
            <div className="flex justify-evenly gap-2">
                <Message/>
                <Message/>
            </div>

        </div>
    </div>
  )
}
