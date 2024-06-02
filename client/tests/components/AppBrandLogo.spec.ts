import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import AppBrandLogo from '../../components/AppBrandLogo.vue';

describe('AppBrandLogo', () => {
    it('Is brand logo properly display', () => {
        const imgSrc = '/example.jpg';
        const imgAlt = 'Example brand';

        const wrapper = mount(AppBrandLogo, {
            props: {
                imgSrc,
                imgAlt
            }
        });

        const brandLogo = wrapper.find('img');

        expect(brandLogo.exists()).toBe(true);
        expect(brandLogo.attributes('src')).toBe(imgSrc);
        expect(brandLogo.attributes('alt')).toBe(imgAlt);
    })
})