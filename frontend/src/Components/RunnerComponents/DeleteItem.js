import { Button } from "reactstrap";
import styled from 'styled-components';

const GreyedOut = styled.div`
        position: absolute;
        background: gray;
        height: 100%;
        width: 100%;
        opacity: 0.5;
    `;
    const PostionWrapper = styled.div`
        position: absolute;
        right: 2%;
        bottom: 3%;
    `;

const DeleteItem = ({ isDeleting, deleteMonster, slug }) => {

    const handleClick = () => {
        deleteMonster(slug);
    }
    return (
        <>
            <GreyedOut className='border border-radius'>
            </GreyedOut>
            <PostionWrapper>
                <Button color='danger' onClick={handleClick}>
                    <i className="fas fa-skull-crossbones"></i>
                </Button>
            </PostionWrapper>
        </>
    )
}

export default DeleteItem;