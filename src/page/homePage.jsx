import { Stack } from "@mui/system";
import PlaylistsCard from "../component/playlistitemcard/card";


const HomePage = ({ playlistArray }) => {

    return (
        <div>
            {playlistArray.length > 0 && (
                <Stack direction={'row'} spacing={2}>
                    {playlistArray.map((item) => (

                        <PlaylistsCard
                            key={item.playlistId}
                            playlistThumnails={item.thumbnails}
                            playlistTitle={item.playlistTitle}
                            channelTitle={item.channelTitle}
                            playlistId={item.playlistId}
                        />

                    ))}
                </Stack>
            )}
        </div>
    )
}

export default HomePage