import { createSelectorHook } from "react-redux"

type RootState = GameState;

export const useSelector = createSelectorHook<RootState>();