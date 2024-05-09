export const statusIndicator = (data) => {
    return (
        <>
            {data == 0 ? (<span className='inactive-status-short'> Inactive </span>) : (<span className='active-status-short'> Active </span>)}         
        </>
    )
}