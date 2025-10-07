export interface SubService {
  id: string;
  title: string;
  description: string;
  href: string;
}

export interface MainService {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  icon: string;
  color: string;
  subServices: SubService[];
  pricing: {
    startingAt: string;
    currency: string;
    model: string;
  };
  timeline: string;
  stats: {
    projects: string;
    clients: string;
    satisfaction: string;
  };
}

export interface ServicesData {
  mainServices: MainService[];
  services: any[]; // Keep existing services structure for backward compatibility
}
