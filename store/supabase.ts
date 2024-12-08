import type { SignInWithPasswordCredentials } from '@supabase/supabase-js';

export const useSupabase = defineStore('supabase', () => {
    const supabase = useSupabaseClient();
    const router = useRouter();
    interface DataSign {
        email: string;
        password: string;
    }
    const signinUser = async (dataCredential: DataSign) => {
        let credential: SignInWithPasswordCredentials = {
            email: dataCredential.email,
            password: dataCredential.password,
        };

        return await supabase.auth.signInWithPassword(credential);
    };

    const logout = async () => {
        try {
            await supabase.auth.signOut();
        } catch (error) {
            throw error;
        } finally {
            router.push('/login');
        }
    };

    return {
        signinUser,
        logout,
    };
});
