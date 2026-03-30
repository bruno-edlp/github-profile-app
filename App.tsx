import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  StatusBar,
} from 'react-native';

// ============================================================
// IMPORTAÇÕES
// ============================================================
import { userProfileData } from './src/data/profileData';
import ProfileHeader from './src/components/ProfileHeader';
import StatsCard from './src/components/StatsCard';
import RepoCard from './src/components/RepoCard';

// ============================================================
// COMPONENTE PRINCIPAL
// ============================================================
export default function App(): React.JSX.Element {
  const profile = userProfileData;

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#0d1117" />

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* ── Cabeçalho do Perfil ── */}
        <ProfileHeader profile={profile} />

        {/* ── Estatísticas ── */}
        <View style={styles.statsSection}>
          <View style={styles.statsRow}>
            <StatsCard label="Repos" value={profile.stats.repositories} />
            <StatsCard label="Seguidores" value={profile.stats.followers} />
            <StatsCard label="Seguindo" value={profile.stats.following} />
          </View>
        </View>

        {/* ── Skills ── */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🧳 Inventário Arcano</Text>
          <View style={styles.skillsGrid}>
            {profile.skills.map((skill) => (
              <View key={skill} style={styles.skillBadge}>
                <Text style={styles.skillText}>{skill}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* ── Repositórios Fixados ── */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>📌 Repositórios Fixados</Text>
          {profile.pinnedRepos.map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </View>

        {/* ── Footer ── */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>✨ github.com/{profile.username}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// ============================================================
// ESTILOS - StyleSheet organizado
// ============================================================
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0d1117',
  },
  scrollView: {
    flex: 1,
  },

  // Seção de Estatísticas
  statsSection: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#30363d',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  // Seções genéricas
  section: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#30363d',
  },
  sectionTitle: {
    color: '#e6edf3',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 14,
    letterSpacing: 0.3,
  },

  // Skills
  skillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  skillBadge: {
    backgroundColor: '#1c2128',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#58a6ff',
  },
  skillText: {
    color: '#58a6ff',
    fontSize: 13,
    fontWeight: '500',
  },

  // Footer
  footer: {
    paddingVertical: 24,
    alignItems: 'center',
  },
  footerText: {
    color: '#484f58',
    fontSize: 13,
  },
});