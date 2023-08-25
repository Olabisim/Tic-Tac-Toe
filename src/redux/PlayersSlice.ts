import { playersInterface } from "@/intefaces";
import { createSlice } from "@reduxjs/toolkit";


let initialState:playersInterface = {
    playerNames:  {
        firstPlayersName: '',
        secondPlayersName: '',
    },
    popupStatus: true

}

const PlayersSlice = createSlice({
    name: "PlayersSlice",
    initialState,
    reducers: {
        setPlayerNames(state, {payload}) {
            // {firstName, lastName}{firstName: data.firstName, lastName:data.lastName}
            console.log(payload)
            console.log("payload from setPlayerNames action")
            state.playerNames.firstPlayersName = payload.firstName;
            state.playerNames.secondPlayersName = payload.lastName;
        },
        changePopupStatus(state, {payload}) {
            state.popupStatus = payload
        }
    }
})

export const { setPlayerNames, changePopupStatus } = PlayersSlice.actions;

export default PlayersSlice.reducer;