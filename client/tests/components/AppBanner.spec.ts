import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import AppBanner from '../../components/AppBanner.vue'
import AppButton from '../../components/AppButton.vue'
import type { Props } from '../../components/AppBanner.vue';

function mountAppBanner(props: Props) {
    return mount(AppBanner, {
        props,
        global: {
            components: {
                AppButton
            }
        }
    });
}

function commonAssertions(wrapper, props: Props) {
    const bannerImg = wrapper.find('img');
    const headline = wrapper.find('h1');
    const subHeadline = wrapper.find('h2');
    const description = wrapper.find('p');

    // Check img alt and src
    expect(bannerImg.exists()).toBe(true);
    expect(bannerImg.attributes('alt')).toBe(props.headline);
    expect(bannerImg.attributes('src')).toBe(props.imgUrl);

    // Check headline, subheadline and description
    expect(headline.exists()).toBe(true);
    expect(headline.text()).toContain(props.headline);

    expect(subHeadline.exists()).toBe(true);
    expect(subHeadline.text()).toContain(props.subHeadline);

    expect(description.exists()).toBe(true);
    expect(description.text()).toContain(props.description);
}

describe('AppBanner', () => {
    const bannerProps = {
        imgUrl: '/placeholder.jpg',
        headline: 'Example headline',
        subHeadline: 'Example subheadline',
        description: 'Example description',
        btnText: 'Click me'
    }

    it('Is banner with button tag generated properly', () => {
        const wrapper = mountAppBanner(bannerProps);

        commonAssertions(wrapper, bannerProps);

        const button = wrapper.find('button');

        //check button if it's button tag, not a tag
        expect(button.exists()).toBe(true);
        expect(button.text()).toContain(bannerProps.btnText);
    })

    it('Is banner with a tag generated properly', () => {
        const bannerPropsWithLink = {
            ...bannerProps,
            btnLink: '/test'
        }

        const wrapper = mountAppBanner(bannerPropsWithLink);

        commonAssertions(wrapper, bannerProps);

        const buttonLink = wrapper.find('a');

        //check button if it's button tag, not a tag
        expect(buttonLink.exists()).toBe(true);
        expect(buttonLink.text()).toContain(bannerProps.btnText);
        expect(buttonLink.attributes('href')).toBe(bannerPropsWithLink.btnLink);
    })
})