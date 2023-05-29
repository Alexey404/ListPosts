import {
  ERROR_AUTOR,
  LOAD_AUTOR,
  ProfileAction,
  SET_AUTOR,
} from '../action/profileAction'
import { authorType } from './postsReducer'

type InitialStatePostsType = typeof initialState

const initialState = {
  author: {} as authorType,
  isLoading: false,
  isError: false,
}

export const profileReducer = (
  state: InitialStatePostsType = initialState,
  action: ProfileAction
) => {
  switch (action.type) {
    case LOAD_AUTOR: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      }
    }
    case ERROR_AUTOR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      }
    }
    case SET_AUTOR: {
      return {
        ...state,
        author: action.peyload,
        isLoading: false,
      }
    }

    default:
      return state
  }
}