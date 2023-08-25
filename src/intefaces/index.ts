
export type Player = 'X' | 'O' | "Draw" | null


export interface playersInterface {
    playerNames : {
        firstPlayersName: string,
        secondPlayersName: string,
    },
    popupStatus?: boolean
}
