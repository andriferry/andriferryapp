<script setup lang="ts">
import { useSupabase } from '@/store/supabase';

definePageMeta({
    middleware: 'unauth',
    layout: 'blank',
});

const { signinUser } = useSupabase();

const router = useRouter();

const form = ref({
    email: '',
    password: '',
});

const loginIn = async () => {
    try {
        const { error } = await signinUser(form.value);

        if (error) throw error;

        router.push('/dashboard');
    } catch (error) {}
};
</script>

<template>
    <div class="h-screen grid lg:grid-cols-12">
        <div
            class="col-span-12 lg:col-span-4 p-6 flex flex-col justify-center relative items-center">
            <div class="card w-full">
                <div class="card-body">
                    <h1 class="card-title">Login In</h1>

                    <div class="mt-3 flex flex-col gap-3">
                        <label
                            class="input input-bordered flex items-center gap-2">
                            <input
                                v-model="form.email"
                                type="text"
                                class="grow"
                                placeholder="Email" />
                        </label>

                        <label
                            class="input input-bordered flex items-center gap-2">
                            <input
                                v-model="form.password"
                                type="password"
                                class="grow"
                                placeholder="Password" />
                        </label>

                        <button
                            @click="loginIn"
                            class="btn btn-block btn-primary text-white">
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div
            class="hidden lg:flex col-span-8 justify-center overflow-hidden items-center relative">
            <Gradient class="z-0"></Gradient>

            <img
                src="~assets/image/browser.png"
                class="z-10 relative"
                style="width: 40rem" />

            <div
                class="bg-[#CDF6FF] h-[686px] -right-[200px] bottom-0 absolute w-[686px] blur-[234px] rounded-full"></div>
        </div>
    </div>
</template>

<style scoped></style>
