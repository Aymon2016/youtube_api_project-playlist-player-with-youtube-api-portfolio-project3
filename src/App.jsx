import { Route, Routes } from "react-router-dom";

import MenuAppBar from "../src/component/appbar";
import usePlaylists from "./hooks";
import HomePage from "./page/homePage";
import PageNotFound from "./page/pageNotFound";
import PlayerPage from "./page/playerPage";

const App = () => {

    const { getPlaylistById, playlists } = usePlaylists()
    const submitid = (id) => {
        getPlaylistById(id)

    }
    const playlistArray = Object.values(playlists)


    return (
        <div>
            <MenuAppBar submitid={submitid} />
            <Routes>
                <Route path="/" element={<HomePage playlistArray={playlistArray} />} />
                <Route path="/player/:playlistId" element={<PlayerPage playlists={playlists} />} />
                <Route path="*" element={<PageNotFound />} />

            </Routes>
        </div>
    )
}
export default App;