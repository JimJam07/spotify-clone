export const initialState={
    user:null,
    playlists:[],
    playing:false,
    item:null,
    //token:'BQBXnPU8jgxF6thRSaaiZUZKBrIJw8Uwu-aX3QP7Z4zpE-zb4KZ8BTHjwRPFg4Sz2w7dVGAYiO7SxMu5TXlaJD8ean2cx-KLR5NM8SX6_eIrXzi3U86Fc-S4y7R_btMpxwuttj9U2wkm7KF-S-T2EQIKM9Xn3XfAcK3hNchdqf4pb2O_',
    //discoverWeekly:null,
    // change token during production to null
};

const reducer = (state,action)=>{

    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            }
        case 'SET_PLAYLIST':
            return{
                ...state,
                playlists:action.playlists
            }
        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state,
                discoverWeekly:action.discoverWeekly
            }
        case 'SET_RECENTLY_PLAYED':
            return{
                ...state,
                recentTracks:action.recentTracks

            }
    default:
        return state;
    }
}
export default reducer;