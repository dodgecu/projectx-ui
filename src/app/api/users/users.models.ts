export interface UserModel {
  id: number;
  username: string;
  age: number;
  photoUrl: string;
  knownAs: string;
  created: string;
  lastActive: string;
  gender: 'female' | 'male';
  introduction: string;
  interests: string;
  lookingFor: string;
  city: string;
  country: string;
  photos: UserPhotoModel[];
}

export interface UserPhotoModel {
  id: number;
  url: string;
  isMain: boolean;
}
