export type Media = {
  id: number;
  url: string;
  mime: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  formats: {
    small: {
      url: string;
    };
    medium: {
      url: string;
    };
    large: {
      url: string;
    };
    thumbnail: {
      url: string;
    };
  };
};

export type Locker = {
  id: number;
  title: string;
  description: string;
  size: string | null;
  voltage: string | null;
  power: string | null;
  weight: string | null;
  picture: Media;
};

export type LockerItem = {
  id: number;
  documentId: string;
  lockers: Locker[];
};
