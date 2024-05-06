export const useAPIFetch = async (request: string) => {
    const config = useRuntimeConfig()

    const headers = {
        Authorization: `bearer ${config.public.apiKey}`,
    };

    const { data } = await useFetch(`${config.public.baseURL + request}`, { headers });

    if(data.value.data)
    return data.value.data;
    else return data.value;
}