interface OptionsOfRequest {
    baseUrl?: string
}

export const useAPIFetch = (request: string, opts: OptionsOfRequest) => {
    const config = useRuntimeConfig()

    const headers = {
        Authorization: `bearer ${config.public.apiKey}`,
      };
  
    return useFetch(request, { baseURL: config.public.baseURL as string, ...opts, headers})
}