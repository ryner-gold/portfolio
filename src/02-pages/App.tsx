import './App.css'
import {LoadingBar} from "../04-features/loading-bar/ui/loading-bar.tsx";
import {CowboyAvatar} from "../04-features/cowboy-avatar/ui/cowboy-avatar.tsx";

function App() {

    return (
        <div className="app-container">
            <CowboyAvatar/>
            <LoadingBar/>
        </div>
    )
}

export default App
