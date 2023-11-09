import { githubApi } from "../../api/githubApi";
import { ILabel } from "../interfaces/label";
import { useQuery } from "@tanstack/react-query"

/* without axios 
async function fetchLabels() {
  try {
    const res = await fetch("https://api.github.com/repos/facebook/react/labels");
    const parsed = await res.json();
    console.log(parsed)
    return parsed
  } catch (e) {
    throw new Error(`${e}`)
  }
}
*/

async function fetchLabels(): Promise<ILabel[]> {
    try {
        const { data } = await githubApi.get<ILabel[]>("/labels");
        return data;

    } catch (e) {
        throw new Error(`${e}`)
    }
}

export default function useLabels() {
    const labelsQuery = useQuery(["labels"], fetchLabels);

    return {
        labelsQuery,
    }
}