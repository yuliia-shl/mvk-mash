import { useEffect, useState } from 'react';
import HeroTitle from '../HeroTitle/HeroTitle';
import SmartButton from '../ui/Button/SmartButton';
import type { HeroItem } from '../../types/hero-types';
import { fetchHeroInfo } from '../../services/services';

const VideoPlayer = () => {
  const [heroInfo, setHeroInfo] = useState<HeroItem[]>([]);

  useEffect(() => {
    fetchHeroInfo()
      .then(data => {
        setHeroInfo(data);
        console.log(data);
      })
      .catch(err => console.error(err));
  }, []);

  const hero = heroInfo[0];
  if (!hero) return null;

  return (
    <div className="relative -mt-17 1xl:-mt-10.5 3xl:-mt-18 4xl:-mt-17 w-full h-screen overflow-hidden bg-[linear-gradient(to_top,_#080808_0%,_#080808_5%,_rgba(8,8,8,0.5)_100%)]">
      <video
        className="absolute top-0 left-0 z-[-1] w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        style={{ pointerEvents: 'none' }}
        poster="/images/webp/hub-gallery/AleksGolub-05946-2.webp"
      >
        {hero.video.map((vid, index) => (
          <source key={index} src={`${vid.url}`} type={vid.mime} />
        ))}
        Ваш браузер не підтримує тег video.
      </video>

      {/* Контент поверх відео */}

      <div className="section flex flex-col justify-around lg:justify-center lg:items-center h-full">
        <HeroTitle
          className="lg:flex flex-col items-center lg:mb-12 4xl:mb-8.5"
          heroInfo={hero}
        />
        <SmartButton
          label={hero.button}
          icon="/images/svg/icons.svg#icon-arrow-up-right"
          iconClassName="w-4.5 h-4.5 ml-16"
          iconStroke="currentColor"
          iconPosition="right"
          href="#provides"
          className="lg:inline-flex ml-auto lg:ml-0 4xl:text-[20px]/[1]"
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
