import React from "react"

type nameType = {
    name: string
    callBack: () => void
}


export const Button = (props: nameType) => {

    const onClickHandler = () => {
        props.callBack()
    }

    return (
        <button onClick={onClickHandler}>{props.name}</button>
    )
}
