export default defineNuxtRouteMiddleware((to, from) => {
    const user = useSupabaseUser();
    // Object.prototype.hasOwnProperty(user.value?.recovery_sent_at)

    if (user.value) {
        return navigateTo('/dashboard');
    }
});
