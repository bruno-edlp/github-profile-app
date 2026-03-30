import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PinnedRepo } from '../types/github';

// ============================================================
// PROPS TIPADAS - Reutiliza a interface PinnedRepo do types
// ============================================================
interface RepoCardProps {
  repo: PinnedRepo;
}

// ============================================================
// COMPONENTE - Card de repositório fixado
// ============================================================
const RepoCard: React.FC<RepoCardProps> = ({ repo }) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.icon}>📁</Text>
        <Text style={styles.repoName} numberOfLines={1}>
          {repo.name}
        </Text>
      </View>

      <Text style={styles.description} numberOfLines={2}>
        {repo.description}
      </Text>

      <View style={styles.footer}>
        <View style={styles.languageContainer}>
          <View style={[styles.languageDot, { backgroundColor: repo.languageColor }]} />
          <Text style={styles.languageText}>{repo.language}</Text>
        </View>

        {repo.stars > 0 && (
          <View style={styles.stat}>
            <Text style={styles.statIcon}>⭐</Text>
            <Text style={styles.statText}>{repo.stars}</Text>
          </View>
        )}

        {repo.forks > 0 && (
          <View style={styles.stat}>
            <Text style={styles.statIcon}>🍴</Text>
            <Text style={styles.statText}>{repo.forks}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#161b22',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#30363d',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  icon: {
    fontSize: 14,
    marginRight: 6,
  },
  repoName: {
    color: '#58a6ff',
    fontSize: 14,
    fontWeight: '600',
    flex: 1,
  },
  description: {
    color: '#8b949e',
    fontSize: 13,
    lineHeight: 18,
    marginBottom: 12,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  languageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    flex: 1,
  },
  languageDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  languageText: {
    color: '#8b949e',
    fontSize: 12,
  },
  stat: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  statIcon: {
    fontSize: 11,
  },
  statText: {
    color: '#8b949e',
    fontSize: 12,
  },
});

export default RepoCard;
