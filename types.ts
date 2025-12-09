export interface GalleryEvent {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  fullText: string;
}

export interface Ability {
  title: string;
  description: string;
  imageUrl: string; // Changed from iconName to imageUrl
  fullText: string;
}