import { createSelectorHook } from "react-redux"

import {RootState} from './reducer/reducer'

export const useSelector = createSelectorHook<RootState>();