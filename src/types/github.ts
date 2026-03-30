// ============================================================
// TIPAGEM DOS DADOS - Interfaces e Types do perfil GitHub
// ============================================================

export interface UserStats {
  repositories: number;
  followers: number;
  following: number;
}

export interface PinnedRepo {
  id: string;
  name: string;
  description: string;
  language: string;
  languageColor: string;
  stars: number;
  forks: number;
}

export interface Achievement {
  id: string;
  name: string;
  emoji: string;
}

export interface UserProfile {
  name: string;
  username: string;
  avatarUrl: string;
  bio: string;
  occupation: string;
  location: string;
  website: string;
  stats: UserStats;
  pinnedRepos: PinnedRepo[];
  achievements: Achievement[];
  skills: string[];
}
