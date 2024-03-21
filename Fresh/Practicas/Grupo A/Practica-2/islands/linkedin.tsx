import { h, useState, useEffect } from 'preact/hooks';
import {  job, linkedin,links,meta } from '../types.ts';
import NavComponent from '../components/NavComponent.tsx';
import LinkedInDescriptionComponent from '../components/LinkedinDescriptionComponent.tsx'
import LinkedInListComponent from '../components/LinkedinListComponent.tsx'
import Footer from "../components/Footer.tsx";

type Data={
  linkedin:linkedin;
}

export default function LinkedInIsland(props:Data) {

  const [data, setData] = useState<linkedin>(props.linkedin);

  const [select,setSelect] = useState<job>({});
  const [page,setPage]=useState<number>(1);

  const [jobs, setJobs] = useState<job[] | null>(null);
  console.log(data);
  console.log("Data.data:", data.data);
  useEffect(() => {
    if (data) {
      console.log("Data.data:", data.data);
      setJobs(data.data);
    }
  }, [data]);

  //console.log(jobs)
  return(
    <div class="linkedin">
      <div class="island_list">
        <LinkedInListComponent job={data.data}/>
        <NavComponent page={page} />
        <Footer/>
      </div>
      <div class="island_description">
        <LinkedInDescriptionComponent job={select}/>
      </div>

    </div>
  )

}
