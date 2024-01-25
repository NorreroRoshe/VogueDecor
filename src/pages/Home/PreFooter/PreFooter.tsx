import React from 'react';
import { OutletBanner } from './OutletBanner/OutletBanner';
import { HomeAbout } from './HomeAbout/HomeAbout';
import { SubScribe } from './SubScribe/SubScribe';

export const PreFooter: React.FC = () => {
  return (
    <>
      <OutletBanner />
      <HomeAbout />
      <SubScribe />
    </>
  );
};
