import { FunctionComponent } from "preact";
import { job } from "../types.ts";

type Data={
    job: job[]
}

export default function LinkedInListComponent(jobs:Data): FunctionComponent{
    return(
        <div>
            <h1>Empleos Recomendados</h1>
            <ul>
                {
                    jobs.job.map(job=>{
                        <button key={job.slug}  onClick={(job) =>{return(job)}}>
                            <h2>{job.title}</h2>
                            <li>{job.company_name}</li>
                            <li>{job.location}</li>
                            <button onClick={(job) =>{return(job)}}>x</button>
                        </button>
                    })
                }
            </ul>
        </div>
    )
}

