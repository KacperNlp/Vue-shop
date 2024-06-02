import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import AppHeadline from '@/components/AppHeadline.vue';
import { HeadlinesTypes } from '@/enums/enums.ts';

describe('AppHeadline', () => {
    it('AppHeadline is h1 display correctly', () => {
        const headlineText = 'Hello World!';

        const wrapper = mount(AppHeadline, {
            props: {
                headlineType: HeadlinesTypes.H1,
            },
            slots: {
                default: headlineText
            }
        })

        const headline = wrapper.find('h1');
        expect(headline.exists()).toBe(true);
        expect(headline.text()).toContain(headlineText);
    })
})