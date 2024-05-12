export default defineNuxtPlugin(() => {
    return {
      provide: {
        imgUrl: (path: string) => {
            const config = useRuntimeConfig();

            return config.public.uploadUrl + path;
        }
      }
    }
})