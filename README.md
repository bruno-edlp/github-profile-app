# 📱 GitHub Profile App

Aplicativo mobile desenvolvido em **React Native + TypeScript** que exibe uma página de perfil de usuário inspirada no GitHub.

> Desenvolvido para a atividade **ATV1 - PDMI | Prática**

---

## 🧙 Perfil de Inspiração

Baseado no perfil [github.com/maxxdiego](https://github.com/maxxdiego)

---

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+
- Expo CLI instalado globalmente: `npm install -g expo-cli`
- App **Expo Go** no celular (Android ou iOS)

### Passos

```bash
# 1. Clone o repositório
git clone https://github.com/SEU_USUARIO/github-profile-app.git

# 2. Acesse a pasta
cd github-profile-app

# 3. Instale as dependências
npm install

# 4. Inicie o projeto
npx expo start
```

Escaneie o QR Code com o app **Expo Go** no celular.

---

## 🗂️ Estrutura do Projeto

```
github-profile-app/
├── App.tsx                        # Componente raiz da aplicação
├── src/
│   ├── types/
│   │   └── github.ts              # Interfaces e Types TypeScript
│   ├── data/
│   │   └── profileData.ts         # Dados mockados do perfil
│   └── components/
│       ├── ProfileHeader.tsx      # Foto, nome, bio, infos
│       ├── StatsCard.tsx          # Card de estatística (repos/seguidores)
│       └── RepoCard.tsx           # Card de repositório fixado
├── package.json
├── tsconfig.json
└── app.json
```

---

## 🧩 Tecnologias

| Tecnologia | Uso |
|------------|-----|
| React Native | Framework mobile |
| TypeScript | Tipagem estática |
| Expo | Toolchain e build |
| StyleSheet | Estilização dos componentes |

---

## 📐 Tipagem TypeScript

O projeto utiliza **Interfaces** para tipagem de todos os dados:

```typescript
interface UserProfile {
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
```

---

## ✨ Funcionalidades

- [x] Foto de perfil com borda destacada
- [x] Nome e username
- [x] Biografia
- [x] Ocupação, localização e website
- [x] Estatísticas (Repos, Seguidores, Seguindo)
- [x] Seção de skills/inventário
- [x] Cards de repositórios fixados com linguagem e estrelas
- [x] Conquistas (Achievements)
- [x] Botão de Follow
- [x] Layout responsivo com ScrollView
- [x] Tema escuro no estilo GitHub
