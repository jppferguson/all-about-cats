type Cat = {
  id: string;
  breeds: [];
  url: string;
  width: number;
  height: number;
  created_at: string;
  original_filename: string;
};

type FavouriteCat = {
  id: number;
  user_id: string;
  created_at: string;
  image: {
    id: string;
    url: string;
  };
};

type Vote = {
  id: number;
  image_id: string;
  value: number;
  created_at: string;
  image: {
    id: string;
    url: string;
  };
};
