
import { createLocalVue, mount } from '@vue/test-utils';
import { AuthContext, provideAuth } from '../../../src/services/auth.service'
import CompositionApi, { InjectionKey } from '@vue/composition-api';
import App from '@/App.vue';

describe('test.spec.vue', () => {
  const localVue = createLocalVue();
  localVue.use(CompositionApi);
  const key: InjectionKey<AuthContext> = Symbol('auth');

  const provide = {
    [key as symbol]: {
      getUserInfo: jest.fn().mockReturnValue('Test'),
    },
  };
  const setup = (context: any) => {
    provideAuth();
    return {};
  };

  it('1. Try with setup options', () => {
    const wrapper = mount(App, { localVue, setup});
    expect(wrapper.html()).toContain('Test');
  });
  it('2. Try with provide options', () => {
    const wrapper = mount(App, { localVue, provide});
    expect(wrapper.html()).toContain('Test');
  });
});