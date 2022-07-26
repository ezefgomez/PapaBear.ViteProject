import React from 'react'

const Title = ({title}) => {
    return (
        <>
            <div>title</div>
            <Title title={title} />
        </>
    )
}

export default Title