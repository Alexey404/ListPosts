import { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { CardComponent } from '../../Components/Card/Card'
import { Loader } from '../../Components/Loader/Loader'
import { GET_POSTS } from '../../redux/action/postAction'
import { AppStateType } from '../../redux/store'
import './Home.css'
import { postType } from '../../redux/newRedusers/postsReducer'

export const HomePage = () => {
  const postState = useSelector((state: AppStateType) => state.posts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: GET_POSTS })
  }, [dispatch])

  return (
    <>
      <Container>
        <div className='card-сontainer'>
          {postState.isLoading ? (
            <Loader />
          ) : (
            postState.posts?.map((post: postType) => (
              <CardComponent key={post.id} post={post} />
            ))
          )}
        </div>
      </Container>
    </>
  )
}
