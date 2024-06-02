import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import AppButton from '../../components/AppButton.vue';

describe('AppButton', () => {
    it('AppButton is a link and has a correct href attribute', () => {
        const wrapper = mount(AppButton, {
            props: {
                btnLink: '/example-link'
            },
            slots: {
                default: 'Click link'
            }
        });

        expect(wrapper.text()).toContain('Click link');
        expect(wrapper.attributes('href')).toBe('/example-link');
    })
})