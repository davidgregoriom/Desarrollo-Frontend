export type NavChindreProps ={
    selected: "Home";
}

export type NavProps ={
    selected: "LinkedIn";
}

export type linkedin={
    data:job[];
    links:links;
    meta:meta;
}

export type job={
    slug:string;
    company_name:string;
    title:string;
    description:string;
    remote:boolean;
    url:string;
    tags?:(string | null)[] | null;
    job_types?:(string | null)[] | null;
    location:string;
    created_at:number;
}

export type links={
    first:string;
    last?:string;
    prev?:string;
    next:string;
}

export type meta={
    current_page:number;
    from:number;
    path:string;
    per_page:number;
    to:number;
    terms:string;
    info:string;
}


