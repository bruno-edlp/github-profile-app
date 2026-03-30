// ============================================================
// DADOS DO PERFIL - inspirado em github.com/maxxdiego
// ============================================================

import { UserProfile } from '../types/github';

export const userProfileData: UserProfile = {
  name: 'maxx - code mage',
  username: 'maxxdiego',
  avatarUrl: 'https://avatars.githubusercontent.com/u/126022710?v=4',
  bio: '🧙 Saudações, viajante dos Reinos do Código! Mentor das Artes Secretas da Tecnologia no Centro Paula Souza.',
  occupation: 'IT Professor @ CPS - FATEC / ETEC',
  location: 'Registro, SP, Brazil',
  website: 'lattes.cnpq.br/4370663836049458',
  stats: {
    repositories: 23,
    followers: 215,
    following: 0,
  },
  pinnedRepos: [
    {
      id: '1',
      name: '09_api_node_e_front_end',
      description: 'API RESTful com Node.js e interface Front-End para devs iniciantes praticarem programação.',
      language: 'JavaScript',
      languageColor: '#f1e05a',
      stars: 2,
      forks: 0,
    },
    {
      id: '2',
      name: '05_nodejs_express',
      description: 'Campanha RESTful ensinando devs a construir APIs com Node.js e Express.',
      language: 'JavaScript',
      languageColor: '#f1e05a',
      stars: 2,
      forks: 0,
    },
    {
      id: '3',
      name: '15_react_basics',
      description: 'Fundamentos do React: componentes, props, estado e hooks essenciais.',
      language: 'JavaScript',
      languageColor: '#f1e05a',
      stars: 0,
      forks: 0,
    },
    {
      id: '4',
      name: '08_react_next',
      description: 'Projetos com React e Next.js explorando SSR, SSG e rotas dinâmicas.',
      language: 'JavaScript',
      languageColor: '#f1e05a',
      stars: 0,
      forks: 0,
    },
    {
      id: '5',
      name: '07_python_flask',
      description: 'API com Python Flask para a campanha The Games — versão back-end em Python.',
      language: 'Python',
      languageColor: '#3572A5',
      stars: 0,
      forks: 0,
    },
    {
      id: '6',
      name: '14_tailwind_css',
      description: 'Exploração dos feitiços de ilusão do Tailwind CSS com exemplos práticos.',
      language: 'CSS',
      languageColor: '#563d7c',
      stars: 1,
      forks: 0,
    },
  ],
  achievements: [
    { id: '1', name: 'Pull Shark', emoji: '🦈' },
    { id: '2', name: 'YOLO', emoji: '🎲' },
  ],
  skills: ['HTML', 'CSS', 'JS', 'TypeScript', 'React', 'Vue', 'Node.js', 'Python', 'Docker', 'Git'],
};
