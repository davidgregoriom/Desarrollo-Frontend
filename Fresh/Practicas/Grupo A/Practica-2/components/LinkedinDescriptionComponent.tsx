import { h, useState ,dangerouslySetInnerHTML} from 'preact/hooks';
import { FunctionComponent } from "preact";
import { job } from "../types.ts"

type Data={
    job: job
}

export default function LinkedInDescriptionComponent(job:Data):FunctionComponent<Data>{
    console.log("Rendering component with data:", job);
    return (
        <div>
            <h1>{job.job.title}</h1>
            <ul>
                <li>{job.job.company_name}</li>
                <li>{job.job.location}</li>
                <li>{job.job.remote}</li>
                <a href={job.job.url}>Solicitud</a>
                <dangerouslySetInnerHTML>{job.job.description}</dangerouslySetInnerHTML>
                <li>{job.job.tags}</li>
                <li>{job.job.job_types}</li>
            </ul>
        </div>
    );

}




