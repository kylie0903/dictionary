import { useState, useRef, useContext } from "react";
import { DicContext } from "../App";

const DicItem = ({ id, word, content, createDate, category }) => {
    const { onRemove, onEdit } = useContext(DicContext);
    const textEdit = useRef()
    const [isEdit, setIsEdit] = useState(false);
    const [editExplain, setEditExplain] = useState(content);
    const editFunc = () => {
        setIsEdit(!isEdit);
    }
    const changeFunc = (e) => {
        setEditExplain(e.target.value)
    }
    const removeFunc = () => {
        if (window.confirm(`${word}를 삭제 하시겠습니까?`)) {
            onRemove(id)
        }}
    const cancelFunc = () => {
        if (window.confirm('취소 하시겠습니까?')) {
            editFunc();
            setEditExplain(content);
        }}
    const saveFunc = () => {
        if (editExplain.length < 10) {
            alert('설명글을 자세히 작성하세요');
            textEdit.current.focus();
        }
        onEdit(id, editExplain);
        editFunc();
    }
    return (
        <div className="dicItem">
            <div>
                <dl>
                    <dt>{word}
                        <span>{category}</span>
                    </dt>
                    <dd>{
                        isEdit ?
                            <textarea ref={textEdit} value={editExplain} onChange={changeFunc} />
                            : content
                    }
                        <span>{createDate}</span>
                    </dd>
                </dl>
                {isEdit ?
                    (<div>
                        <button onClick={saveFunc}>저장</button>
                        <button onClick={cancelFunc}>취소</button>
                    </div>
                    ) : (
                        <div>
                            <button onClick={editFunc}>수정</button>
                            <button onClick={removeFunc}>삭제</button>
                        </div>)
                }
            </div>
        </div>
    );
}

export default DicItem;