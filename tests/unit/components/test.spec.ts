
import { createLocalVue, mount } from '@vue/test-utils';
import { AuthContextKey } from '../../../src/services/auth.service'
import CompositionApi from '@vue/composition-api';
import App from '@/App.vue';

describe('test.spec.vue', () => {
  const localVue = createLocalVue();
  localVue.use(CompositionApi);

  const mock = { getUserInfo: jest.fn().mockReturnValue('Test')};
  
  const provideWithExportedSympbol = {
    [AuthContextKey as symbol]: mock,
  };

  it('Try with provide options and exported symbol', async () => {
    const wrapper = mount(App, { localVue, provide: provideWithExportedSympbol});
    expect(mock.getUserInfo).toBeCalled();
    await localVue.nextTick()
    expect((wrapper.vm as any).nickname).toBe('Test');
  });
});