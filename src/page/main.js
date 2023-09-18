import DicList from "../components/dicList";
import DicSerch from "../components/dicSearch";

const Main = () => {
    return (
        <div className="main">
            <h1>Main</h1>
            <DicSerch />
            <DicList />
        </div>
    );
}

export default Main;