import { mount } from '@vue/test-utils'
import Vue3Details from './Vue3Details.vue'

const SLOTS_DATA: string[] = [
  '<summary>Summary</summary>', 
  '<p>Main Content</p>'
];

const runBasicTest = (wrapper: any) => {
  const details = wrapper.find('details');
  expect(details.exists()).toBe(true);

  const summary = details.find('summary');
  expect(summary.exists()).toBe(true);
  expect(summary.html()).toContain('Summary');

  const p = details.find('p');
  expect(p.exists()).toBe(true);
  expect(p.html()).toContain('Main Content');
}

describe('Vue3Details Test Suite', () => {
  it('with default configuration', () => {

    expect(Vue3Details).toBeTruthy();

    const wrapper = mount(Vue3Details, {
      props: {},
      slots: {
        default: SLOTS_DATA
      }
    });

    runBasicTest(wrapper);

  });

  it('with pre-open using props', () => {

    expect(Vue3Details).toBeTruthy();

    const wrapper = mount(Vue3Details, {
      props: {
        open: true
      },
      slots: {
        default: SLOTS_DATA
      }
    });
    runBasicTest(wrapper);
    expect(wrapper.props().open).toBe(true);
  });

  it('should test that  open/close details correctly', () => {
    expect(Vue3Details).toBeTruthy();
    const wrapper = mount(Vue3Details, {
      props: {
        open: false
      },
      slots: {
        default: SLOTS_DATA
      }
    });
    runBasicTest(wrapper);
    
    wrapper.find('details').trigger('click');
    wrapper.find('details').trigger('click');
    wrapper.find('details').trigger('click');

    expect(wrapper.emitted('open')).toHaveLength(3);
    const emmited = wrapper.emitted('open') as string[];
    expect(emmited[0][0]).toBe(true);
    expect(emmited[1][0]).toBe(false);
    expect(emmited[2][0]).toBe(true);

  })
});