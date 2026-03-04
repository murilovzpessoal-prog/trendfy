export interface ProductViral {
  id: string;
  rank: number;
  image: string;
  title: string;
  category: string;
  highDemand?: boolean;
  revenue: string;
  sales: string;
  priceRange: string;
  videoUrl?: string;
  productUrl?: string;
}

export interface ProductExplore {
  id: string;
  rank: number;
  image: string;
  title: string;
  revenue: string;
  priceRange: string;
  productUrl?: string;
}

export interface VideoViral {
  id: string;
  rank: number;
  thumbnail: string;
  sales6h: string;
  revenue6h: string;
  productTitle: string;
  productImage: string;
  tiktokId?: string;
  videoUrl?: string;
  creatorName?: string;
  directVideoUrl?: string;
  profileUrl?: string;
}

export interface CreatorViral {
  id: string;
  rank: number;
  username: string;
  shopName: string;
  category: string;
  revenue: string;
  avatar: string;
  profileUrl: string;
}

export interface AvatarItem {
  id: string;
  name: string;
  role: string;
  image: string;
  hoverImage?: string;
  description?: string;
}

export interface HackItem {
  id: string;
  title: string;
  image: string;
  icon: string;
  bannerColor: string;
  description: string;
  hasVeoBadge?: boolean;
  isHighlighted?: boolean;
  exampleVideos?: string[];
  examplePrompts?: string[];
  tiktokUrl?: string;
}

export interface PromptItem {
  id: string;
  title: string;
  description: string;
  gif: string;
  prompt: string;
}
