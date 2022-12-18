export interface HeroDataType {
  id: string;
  name: string;
  position: string;
  description: string;
  imageURL: string;
}

export interface aboutDataType {
  id: string;
  text: string;
  description1: string;
  description2: string;
  imageURL: string | any;
}

export type skillsDataType = {
  id: string;
  imageURL: string;
  technologires: string;
};
export interface projectDataType {
  id: string;
  app_name: string;
  main_technology: string;
  github_link: string;
  demo_link: string;
  imageURL: string;
  all_technologies: string;
}
export interface userContactType {
  id: string;
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}
export type contactDataType = {
  id: string;
  name: string;
  position: string;
  description: string;
  imageURL: string;
};
