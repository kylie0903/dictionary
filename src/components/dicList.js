import DicItem from "./dicItem";
import {DicStateContext} from "../App";
import { useContext,useState } from "react";
const sortList =[
    {value : 'All' , name : '전체'},
    {value : 'html' , name : 'html'},
    {value : 'css' , name : 'css'},
    {value : 'js' , name : 'javaScript'},
    {value : 'react' , name : 'react'},
    {value : 'node' , name : 'node'}
]
const SortSelect = ({value, onChange, sortList})=>{
    return(
        <select value={value} onChange={(e)=>onChange(e.target.value)}>
            {
                sortList.map((sort)=>(
                    <option value={sort.value}>{sort.name}</option>
                ))
            }
        </select>
    )
}

const DicList = () => {
    const datas = useContext(DicStateContext);
    const [sort , setSort] = useState('All');

    const getSortList = ()=>{
        const sortcallBack =(item)=>{
            if(sort === "html"){
                return item.category === 'html'
            } else if(sort === "css"){
                return item.category === 'css'
            } else if(sort === "js"){
                return item.category === 'js'
            } else if(sort === "node"){
                return item.category === 'node'
            } else{
                return item.category === 'react'
            }
        }
        const copyList = JSON.parse(JSON.stringify(datas));
        const sortList = sort ==='All' ? copyList : copyList.filter((item)=>sortcallBack(item))
        return sortList;
    }
    return (
        <div className="dicList">
            <h2> 리스트 </h2>
            <SortSelect value={sort} onChange={setSort} sortList={sortList} />
            <div>
                <ul>
                   { getSortList().map((data)=>
                    <DicItem key={data.id} {...data} />
                   )}
                    <li>list</li>

                </ul>
            </div>
        </div>
    );
}

export default DicList;