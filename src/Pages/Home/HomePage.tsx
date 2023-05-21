import { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { postType } from '../../redux/reducers/postsReducer'
import { AppStateType } from '../../redux/store'
import { CardComponent } from '../../Components/Card/Card'
import './Home.css'
import { GET_POSTS } from '../../redux/actions'
import { Loader } from '../../Components/Loader/Loader'

export const HomePage = () => {
  const post = useSelector((state: AppStateType) => state.post)
  const dispatch = useDispatch()

  console.log(post)

  useEffect(() => {
    dispatch({ type: GET_POSTS })
  }, [dispatch])

  return (
    <>
      <Container>
        <div className='cardContainer'>
          {post.loading ? (
            <Loader />
          ) : (
            post.posts.map((e: postType) => (
              <CardComponent key={e.id} post={e} />
            ))
          )}
        </div>
      </Container>
    </>
  )
}