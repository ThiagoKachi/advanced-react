import { Banner, BannerProps } from 'components/Banner';
import { Slider, SliderSettings } from 'components/Slider';

import * as S from './styles';

export type BannerSliderProps = {
  items: BannerProps[];
};

const setting: SliderSettings = {
  dots: true,
  arrows: false,
  vertical: true,
  verticalSwiping: true,
  infinite: false,
  responsive: [
    {
      breakpoint: 1170,
      settings: {
        vertical: false,
        verticalSwiping: false,
      },
    },
  ],
};

export function BannerSlider({ items }: BannerSliderProps) {
  return (
    <S.Wrapper>
      <Slider settings={setting}>
        {items?.map((item) => <Banner key={item.title} {...item} />)}
      </Slider>
    </S.Wrapper>
  );
}
