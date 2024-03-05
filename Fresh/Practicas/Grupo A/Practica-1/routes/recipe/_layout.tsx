import { PageProps } from "$fresh/server.ts";
import NavChildren from "../../components/NavChildren.tsx";

export default function LayoutChildren(props: PageProps){
    const Component = props.Component;
    return (
        <div>
            <NavChildren/>
            <Component/>
        </div>
    );
};


