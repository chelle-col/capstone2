import { Button } from "reactstrap";
import styled from 'styled-components';

const GreyedOut = styled.div`
        position: absolute;
        background: gray;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        opacity: 0.5;
    `;
    const PostionWrapper = styled.div`
        position: absolute;
        right: 2%;
    `;

const DeleteItem = ({ deleteMonster, slug }) => {

    const handleClick = () => {
        deleteMonster(slug);
    }
    return (
        <>
            <GreyedOut className='border rounded'>
            </GreyedOut>
            <PostionWrapper>
                <Button color='danger m-1' onClick={handleClick}>
                    <i className="fas fa-skull-crossbones"></i>
                </Button>
            </PostionWrapper>
        </>
    )
}

export default DeleteItem;