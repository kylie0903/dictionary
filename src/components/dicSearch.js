import { useState,useContext } from "react";
import {DicContext} from "../App";

const DicSearch = () => {
    const [searchInput, setserachInput] = useState();
    const {onSearch} = useContext(DicContext);
    const inputTxt = (e)=>{
        setserachInput(e.target.value);
    }
    const searchFunc=()=>{
        onSearch(searchInput);
    }
    return ( 
        <div className="dicsearch">
            <div>
                <input type='text' placeholder="검색어입력" value={searchInput} onChange={inputTxt}/>
            </div>
            <div>
                <button onClick={searchFunc}>검색</button>
            </div>
        </div>
     );
}
 
export default DicSearch;