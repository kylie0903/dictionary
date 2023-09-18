import React,{ useContext } from 'react';
import { DicContext } from '../App';
import useInput from '../hook/useInput';

const DicWrite = () => {
        const [{word, content, category}, onChange , reset] = useInput({
            word:'',
            content :'',
            category : ''
        })
    const {onCreate} = useContext(DicContext);
    const onCreateBTN=()=>{
        const cate = category === undefined ? 'html' : category;
        console.log(cate)
        onCreate(word, content, cate)
        reset()
    }

    return ( 
        <div className="dicWrite">
            <div>
                <input type='text' placeholder="단어" name="word" value={word} onChange={onChange}/>
            </div>
            <div>
                <textarea placeholder="설명글" name="content" value={content} onChange={onChange} />
            </div>
            <div>
                <select name="category" value={category} onChange={onChange}>
                    <option value={'html'}>html</option>
                    <option value={'css'}>css</option>
                    <option value={'js'}>JavaScript</option>
                    <option value={'node'}>node</option>
                    <option value={'react'}>react</option>
                </select>
            </div>
            <div>
                <button onClick={onCreateBTN}>저장</button>
            </div>
        </div>
     );
}
 
export default React.memo(DicWrite);