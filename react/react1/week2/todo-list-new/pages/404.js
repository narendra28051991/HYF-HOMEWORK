import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Title from '@/components/Title'

const NotFound = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
        router.push('/')
    }, 3000)
  }, [])

  return (
    <>
        <Title title='404' />
        <div className="text-light text-center">
            <h1>Ooops...</h1>
            <h2>That page cannot be found :(</h2>
            <p>Going back to the <Link className="text-light" href="/">Homepage</Link> in 3 seconds...</p>
        </div>
    </>
  );
}
 
export default NotFound;