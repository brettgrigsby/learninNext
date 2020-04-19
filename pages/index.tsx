import useSWR from 'swr'
import { fetcher } from '../utils'

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
    <div>
      <h1>Hey There. Here are all the profiles I know about:</h1>
      {profiles()}
    </div>
  )
}

export default Home;
