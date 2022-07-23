import { TypedUseSelectorHook,useSelector,useDispatch} from "react-redux"
import type {RootState,AppDispatch} from "./index"
export const useAppSelect:TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = ()=> useDispatch<AppDispatch>()