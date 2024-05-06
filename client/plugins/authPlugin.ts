export default defineNuxtPlugin(() => {
    return {
      provide: {
        authUser: () => {
            const router = useRouter();

            const jwt = window.localStorage.getItem("jwt");

            if (!jwt) router.push({ path: "/login" });
        }
      }
    }
})