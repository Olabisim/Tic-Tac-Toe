
import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit' 
import PlayersSlice from './PlayersSlice'
import { createWrapper } from 'next-redux-wrapper'

const makeStore = () => configureStore({
    reducer: {
        Players: PlayersSlice
    },
    devTools: true
})


export const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// export type AppStore = ReturnType<typeof makeStore>;
// export type AppState = ReturnType<AppStore['getState']>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//     ReturnType,
//     AppState,
//     unknown,
//     Action
// >;

// export const wrapper = createWrapper<AppStore>(makeStore)