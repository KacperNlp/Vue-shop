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

        const linkTag = wrapper.find('a');

        expect(linkTag.exists()).toBe(true);

        expect(linkTag.text()).toContain('Click link');
        expect(linkTag.attributes('href')).toBe('/example-link');
    })

    it('AppButton is a button since we did not pass btnLink prop', () => {
        const wrapper = mount(AppButton, {
            slots: {
                default: 'Button example'
            }
        });

        const buttonTag = wrapper.find('button');

        expect(buttonTag.exists()).toBe(true);
    })
})