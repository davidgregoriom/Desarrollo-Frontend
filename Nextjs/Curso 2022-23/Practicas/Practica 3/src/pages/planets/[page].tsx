import Image from "next/image";
import Page from "@/components/pages";
import { useEffect,useState } from "react";
import { PlanetsAPI } from "@/types";
import { useRouter } from "next/router";
import styled, { css } from "styled-components";
import { PlanetsMenu } from "@/styles/style";


export const getServerSideProps = async () => {
    const props: Array<{
      name: string;
      id: string;
    }> = [];
    try {
      const res = await fetch("https://swapi.dev/api/planets");
      const data: PlanetsAPI = await res.json();
      props.push(
        ...data.results.map((planet) => {
          const name = planet.name;
          const id = planet.url.split("/").slice(-2)[0];
          return { name, id };
        })
      );
  
      let next = data.next;
      while (next) {
        console.log(next);
        const res = await fetch(next);
        const data: PlanetsAPI = await res.json();
        props.push(
          ...data.results.map((planet) => {
            const name = planet.name;
            const id = planet.url.split("/").slice(-2)[0];
            return { name, id };
          })
        );
        next = data.next;
      }
    } catch (error) {
      console.log(error);
    }
    return {
      props: {
        data: props,
      },
    };
};
type PagesProps = {
    data: Array<{
      name: string;
      id: string;
    }>;
  };
    

export default function Pages(props: PagesProps) {
    return <Page data={props.data} />;
}