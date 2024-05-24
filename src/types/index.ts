export type TMenuItem = {
  _id: string;
  name: string;
  description: string;
  price: number;
  newFlavour: boolean;
};

export type TTeam = {
  _id: string;
  imageURL: string;
  name: string;
  position: string;
  description: string;
  facebookURL: string;
  twitterURL: string;
  instagramURL: string;
};

export type TBlog = {
  _id: string;
  title: string;
  author: string;
  category: string;
  imageURL: string;
  description: string;
  createdAt: string;
};
