import { h, useState } from 'preact/hooks';
import {  job, linkedin,links,meta } from '../types.ts';
import NavComponent from '../components/NavComponent.tsx';
import LinkedInDescriptionComponent from '../components/LinkedinDescriptionComponent.tsx'
import LinkedInListComponent from '../components/LinkedinListComponent.tsx'

type Data={
  linkedin:linkedin;
}

export default function LinkedInIsland(props:Data) {

  //const [data, setData] = useState<linkedin>(props.linkedin);
  const [jobs, setJobs] = useState<job[]>(props.linkedin.data);
  //const [links, setLinks] = useState<links>(props.linkedin.links);
  //const [meta, setMeta] = useState<meta>(props.linkedin.meta)
  const [select,setSelect] = useState<job>({});
  const [page,setPage]=useState<number>(1);

  return(
    <div>
      <div>
        <LinkedInListComponent job={jobs}/>
        <NavComponent page={page} />
      </div>
      <div>
        <LinkedInDescriptionComponent job={select}/>
      </div>
    </div>
  )

}
