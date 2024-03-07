import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import AppHeader from '../../components/AppHeader.vue';

describe('AppHeader', () => {
    it('App Header have a string', () => {
        const wrapper = mount(AppHeader);

        expect(wrapper.text()).toContain('Hello header!');
    })
})