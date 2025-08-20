export type HeroItem = {
  id: number;
  button: string;
  title: string;
  title_two: string;
  value: string;
  video: Array<{
    url: string;
    mime: string;
  }>;
};

export type HeroTitleProps = {
  className?: string; // Додаткові класи для стилізації
  heroInfo: HeroItem;
};
