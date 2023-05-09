import useData from "./useData";


export interface Genre {
    id: number;
    name: string;
}



const useGrenres = () => useData<Genre>("/genres")


export default useGrenres;