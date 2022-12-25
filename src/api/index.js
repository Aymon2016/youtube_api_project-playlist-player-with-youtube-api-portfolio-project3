import axios from 'axios';

const key=import.meta.env.VITE_KEY;

const getPlaylistItem = async(playlistId,pageToken='',result=[])=>{

    
    const URL = `https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2Csnippet%2Cstatus&maxResults=50&playlistId=${playlistId}&key=${key}&pageToken=${pageToken}`

    const {data}= await axios.get(URL);
    result = [...result, ...data.items]
    if(data.nextPageToken){
        result = getPlaylistItem(playlistId,data.nextPageToken,result)
    }
    return result
}

const getPlaylist = async (playlistId)=>{

    const URL =`https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2Cid&id=${playlistId}&key=${key}`
 
    const {data}= await axios.get(URL).then(data=>(data))
  
    
    
    let playlistItems = await getPlaylistItem(playlistId);
    
    const {
        channelId,
        title:playlistTitle,
        description:playlistDescription,
        thumbnails,
        channelTitle
    }= data?.items[0]?.snippet

        playlistItems=playlistItems.map( (item)=>{
            const {
				title,
				description,
				thumbnails: { medium },
			} = item.snippet;
            return{
                title,
                description,
                thumbnail:medium,
                contentDetails:item.contentDetails,
            }
        })

        return{
            playlistId,
            playlistTitle,
            playlistDescription,
            channelId,
            channelTitle,
            playlistItems,
            thumbnails:thumbnails.default
        }
}
export default getPlaylist