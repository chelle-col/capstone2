

const Paragraph = ({ title, para }) => {
    return (
        <>
            <h4 className='px-1'>{title}</h4>
            <p className='px-3' >{para}</p>
        </>
    )
}

export default Paragraph;