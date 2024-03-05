import { h, useState } from 'preact/hooks';
import { RecipeBefore,RecipeAfter } from '../types.ts';
import RecipeGetComponent from '../components/RecipeGetComponent.tsx';
import RecipePostComponent from '../components/RecipePostComponent.tsx';

type Data={
    Recipe: Array<RecipeAfter>
}

export default function RecipeIsland(props:Data) {
    const [data, setData] = useState<RecipeAfter>([]);
    if (props.Recipe) {
      setData(props.Recipe);
    }
    return (
    <div class="recipe">
        <RecipePostComponent />
        <RecipeGetComponent recipe={data} />
    </div>
    );
}
