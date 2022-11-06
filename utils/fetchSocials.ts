import { Social } from "../typings";
import { groq } from "next-sanity"
import { sanityClient } from "../sanity";

const query = groq`
*[_type == 'social']
`

export const fetchSocial = async() => {
    const res = await sanityClient.fetch(query)
    
    
    const socials: Social[] = res
    return socials
     

}