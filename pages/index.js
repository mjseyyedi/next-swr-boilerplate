import Head from 'next/head'

import Button from 'components/Button'

export default function Home({homeData}) {

  console.log('!!!!!!!!!!!', homeData)
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Button/>
    </div>
  )
}


export async function getServerSideProps() {

  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/mobile/v3/user/new-home?lat=35.693&long=51.397&addressId=7312858&sourceOS=Android&isStandAlone=0&modern_render=true&client=PSA&optionalClient=PSA&deviceType=PSA&appVersion=5.1.1&optionalVersion=5.1.1&UDID=5f8490a8-ff0f-4d5b-90e1-d4835b648d59`)

  const homeData = await res.json();

  return {
    props: {
      homeData
    }
  }
}
