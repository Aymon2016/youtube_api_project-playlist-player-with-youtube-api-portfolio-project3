import { useEffect, useState } from "react"
import getPlaylist from "../api"
import storage from "../utilis/utilis"

const storageKey='storageKey'

const INIT_STATE={
        playlists:{},
        recentPlaylists:[],
        favorites:[],
}
const usePlaylists = ()=>{

    const [state,setState]=useState(INIT_STATE)

    const [errors,setErrors]=useState('')
    const [loading,setLoading]=useState(false)

    useEffect( ()=>{
        const state=storage.get(storageKey)

        if(state){
            setState({...state})
        }
    },[])

    useEffect( ()=>{

        if(state!==INIT_STATE){
            storage.save(storageKey,state)
        }
    },[state])

    const getPlaylistById = async(playlistId,force=false)=>{

        
        if(state.playlists[playlistId] && !force){
            return
        }
        
        setLoading(true)
        try {
            
            
             const playlist= await getPlaylist(playlistId)
             
             setErrors('')
             setState( (prev)=>({
                ...prev,
                playlists:{
                    ...prev.playlists,
                    [playlistId]:playlist,
                }
             }))
        } catch (e) {   
            setErrors(e.response ?.data?.error?.message||'something went wrong')
        } finally {
            setLoading(false)
        } 

        

    }

    const addToFavorites = (playlistId)=>{
        setState( (prev)=>({
            ...prev,
            favarites:[...prev,playlistId]
        }))
    }
    const addToRecent = (playlistId)=>{
        setState( (prev)=>({
            ...prev,
            recentPlaylists:[...prev,playlistId]
        }))
    }
    const getPlaylistsByIds = (ids = []) => {
		return ids.map((id) => state.playlists[id]);
	}

    return {
		playlists: state.playlists,
		favorites: getPlaylistsByIds(state.favorites),
		recentPlaylists: getPlaylistsByIds(state.recentPlaylists),
		getPlaylistById,
		addToRecent,
		addToFavorites,
        errors,
        loading
	};


}
export default usePlaylists