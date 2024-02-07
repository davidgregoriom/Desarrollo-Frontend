import { Handlers,FreshContext,PageProps} from '$fresh/server.ts';
import { Data} from '../../types.ts'


export const handler:Handlers ={
    GET:(_req:Request,ctx:FreshContext<unknown,Data>)=>{
        const {name}= ctx.params;
        return ctx.render({name});
    }
}

export default function Page (props:PageProps<Data>)  {
    const {name} = props.data;

    return <div>Hola {name}</div>
}
