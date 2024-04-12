import { Meta, StoryFn } from '@storybook/react';
import { GameCardProps } from 'components/GameCard';
import { GameCardSlider } from '.';
import { items } from './mock';

export default {
  title: 'GameCardSlider',
  component: GameCardSlider,
  args: { items },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark',
    },
  },
} as Meta;

// @ts-ignore
export const Default: StoryFn<GameCardProps[]> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <GameCardSlider items={args} {...args} />
  </div>
);
