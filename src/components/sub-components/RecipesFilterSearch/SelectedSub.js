
import React from 'react'

const SelectedSub = ({selected}) => {
    // console.log(selected)
    return (
        <>
            {
                selected.map((r,i)=><p key={r.toString()+i}>{r}</p>)
            }
        </>
    )
}

export default SelectedSub;

SelectedSub.defaultProps={
    selected:[]
}