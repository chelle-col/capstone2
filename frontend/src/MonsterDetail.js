import { useParams } from 'react-router-dom';

const MonsterDetail = () => {
    const { monster } = useParams();
    return <h1>{monster}</h1>
}

export default MonsterDetail;