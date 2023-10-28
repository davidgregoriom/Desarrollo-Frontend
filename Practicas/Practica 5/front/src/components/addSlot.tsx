import { gql, useMutation } from '@apollo/client';
import getSSRClient from '@/libs/client'

const client = getSSRClient();

const ADD_SLOT = gql`
    mutation AddWord($word: String!) {
        addWord(word: $word) {
            id
            word
        }
    }
`;

export const AddSlot = () => {
    let input: string
    const [addWord, { data, loading, error}] = useMutation(ADD_SLOT);

    if (loading) return <p>Procesando</p>
    if (error) return <p>Error</p>

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault();
                addWord({ variables: { word: input } });
                input = '';
            }}>
                <input type="text" onChange={e => input = e.target.value} />
                <button type="submit">+</button>
            </form>
        </div>
    )
}

export default AddSlot;
