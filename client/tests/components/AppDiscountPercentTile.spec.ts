import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import AppDiscountPercentTile from '../../components/AppDiscountPercentTile.vue';

describe('AppDiscountPercentTile', () => {
    it('Is discount displying correctly', () => {
        const price = 100;
        const discount = 70;

        const wrapper = mount(AppDiscountPercentTile, {
            props: {
                price,
                discount
            }
        });

        expect(wrapper.text()).toContain('-30 %')
    })

    it('Is discount eq = null', () => {
        const price = 100;
        const discount = null;

        const wrapper = mount(AppDiscountPercentTile, {
            props: {
                price,
                discount
            }
        });

        const discountTile = wrapper.find('span');
        expect(discountTile.exists()).toBe(false);
    })
})