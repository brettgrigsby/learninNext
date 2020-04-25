import useSWR from 'swr'
import { fetcher } from '../utils'
import Head from 'next/head'
import Layout from '../components/Layout'

const Home = () => {
  const { data, error } = useSWR(`/api/profiles`, fetcher)
  console.log({ data })

  const profiles = () => {
    if (error) return (<h3>Error fetching profiles</h3>)
    if (!data) return (<h3>Loading...</h3>)

    return data.map(({ name, job }) => (
      <div>
        <h3>Name: {name}</h3>
        <h3>Job: {job}</h3>
      </div>
    ))
  }

  return(
    <>
      <Head>
        <title>Grace Blue Transition</title>
      </Head>
      <Layout>
        <div>
          <h1>Welcome to Grace Blue Transition</h1>
          {profiles()}
        </div>
      </Layout>
    </>
  )
}

export default Home;
