import { provide, InjectionKey, inject } from '@vue/composition-api';
export interface AuthContext {
  getUserInfo(): Promise<string>;
}

const AuthContextKey: InjectionKey<AuthContext> = Symbol('auth');
export function provideAuth() {
  const getUserInfo = async () => {
    return 'John Doe';
  };
  const auth: AuthContext = {
    getUserInfo,
  };

  provide<AuthContext>(AuthContextKey, auth);

  return auth;
}

export function useAuth() {
  const context = inject<AuthContext>(AuthContextKey);

  if (context == null) {
    throw new Error('provideAuth call missing in main.ts');
  }

  return context;
}
