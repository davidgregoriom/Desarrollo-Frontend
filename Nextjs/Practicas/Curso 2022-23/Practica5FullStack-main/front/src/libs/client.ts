import{InMemoryCache, ApolloClient, NormalizedCacheObject} from "@apollo/client";


let client : ApolloClient<NormalizedCacheObject>|undefined = undefined;
const CSRClient = new ApolloClient({
    uri: "http://localhost:8080/graphql",
    cache: new InMemoryCache(),
})

 const getSSRClient = () => {
    if(typeof window === "undefined"){
        return new ApolloClient({
            uri: "http://localhost:8080/graphql",
            cache: new InMemoryCache(),
        })
    }else{
        return CSRClient;
    }
}

export default getSSRClient;
