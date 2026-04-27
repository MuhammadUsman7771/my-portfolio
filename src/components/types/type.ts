export interface Skill {
  id: number;
  name: string;
  level: number;
  icon: string;
  category: 'frontend' | 'backend';
  color: string;
  description: string;
}

export type ThemeType = 'light' | 'dark';
export type Statues = 'idle' | 'success' | 'error';
export type ScrollToElement = "#projects" | "#contact" | "#about";
export type VariantType = 'primary' | 'secondary' | 'outline' | 'ghost';
export type IconSize = 'sm' | 'md' | 'lg';

export interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}


export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: VariantType;
  size?: IconSize;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}


export interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
}

export interface ExperienceData {
  id: number;
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
  logo: string;
}

