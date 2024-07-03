export const useAPIFetch = async (request: string, filters = null) => {
    const config = useRuntimeConfig()

    const headers = {
        Authorization: `bearer ${config.public.apiKey}`,
    };
    
    const res = await $fetch(`${config.public.baseURL + request}`, { headers, body: filters});

    if(res?.data)
        return res.data
    else return res;
}