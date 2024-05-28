export const useAPIFetch = async (request: string) => {
    const config = useRuntimeConfig()

    const headers = {
        Authorization: `bearer ${config.public.apiKey}`,
    };

    const res = await $fetch(`${config.public.baseURL + request}`, { headers });

    if(res?.data)
        return res.data
    else return res;
}