import {
  LOAD_COMMENTS,
  LOAD_POSTS,
  PostsActions,
  SET_COMMENTS,
  SET_POSTS,
} from '../actions'

export type postType = {
  id: number
  author: authorType
  content: string
  heading: string
  loadComments: boolean
  comments: Array<commentsType>
}

export type commentsType = {
  id: number
  author: authorType
  content: string
}

export type authorType = {
  id: number
  name: string
  email: string
}

type InitialStatePostsType = typeof initialState

const initialState = {
  posts: [] as Array<postType>,
  loading: false,
}

export const postsReducer = (
  state: InitialStatePostsType = initialState,
  action: PostsActions
) => {
  switch (action.type) {
    case LOAD_POSTS: {
      return {
        ...state,
        loading: true,
      }
    }
    case SET_POSTS: {
      return {
        ...state,
        posts: action.peyload,
        loading: false,
      }
    }
    case LOAD_COMMENTS: {
      const newPosts = state.posts.map(e =>
        e.id === action.id ? { ...e, loadComments: true } : e
      )
      console.log(action.id)
      return { ...state, posts: newPosts }
    }
    case SET_COMMENTS: {
      const newPosts = state.posts.map(e =>
        e.id === action.peyload.id
          ? { ...e, comments: action.peyload.data, loadComments: false }
          : e
      )
      return {
        ...state,
        posts: newPosts,
      }
    }
    default:
      return state
  }
}