export default defineNuxtPlugin(() => {
    return {
      provide: {
        imgUrl: (path: string) => {
            const config = useRuntimeConfig();
            console.log(config);

            return config.public.uploadUrl + path;
        }
      }
    }
})