import { bindActionCreators } from '@reduxjs/toolkit'
import { githubActions } from '../store/slices/github.sllice'
import { RootState } from '../store/store'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'


// useSelector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

// useDispatch 
const actions = {
    ...githubActions
}

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actions, dispatch)
}