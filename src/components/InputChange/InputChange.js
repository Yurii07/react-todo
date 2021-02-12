import React from 'react';

const InputChange = (value,handleEditingChange) => {
    // console.log(value, onChange);
    return (
        <div>
            <input
                // onKeyDown={onKeyDown}
                onChange={()=>handleEditingChange}
                value={value}
                // ref={textInput}
            />
            <button
                // onClick={handleEditingSave}
            >save</button>
        </div>
    );
};

export default InputChange;
