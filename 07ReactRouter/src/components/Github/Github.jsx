
import { useLoaderData } from 'react-router-dom'
const Github = () => {
    const data = useLoaderData()
    // const [data, setdata] = useState([])
    // useEffect(() => {
    //   fetch('https://api.github.com/users/Aman8593').then(res => res.json())
    //   .then(data => {
    //     console.log(data);
    //     setdata(data);
    //   })
    // }, [])
    
  return (
    <div className='bg-slate-600 px-7 py-5 text-white font-bold text-3xl'>Github followers:{data.followers}
        <img src={data.avatar_url} alt="avtar" width={300} />
    </div>
  )
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Aman8593')
    return response.json();
}