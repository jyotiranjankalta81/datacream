import { GAME_PLAYED } from "../constants/constant"

export const gamePlayed=(data)=>{
    console.log("data",data)
    return{
        type: GAME_PLAYED,
        data: data
    }
}