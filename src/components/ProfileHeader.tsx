import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { UserProfile } from '../types/github';

// ============================================================
// PROPS TIPADAS
// ============================================================
interface ProfileHeaderProps {
  profile: UserProfile;
}

// ============================================================
// COMPONENTE - Cabeçalho com foto, nome, bio e ocupação
// ============================================================
const ProfileHeader: React.FC<ProfileHeaderProps> = ({ profile }) => {
  return (
    <View style={styles.container}>
      {/* Avatar */}
      <Image
        source={{ uri: profile.avatarUrl }}
        style={styles.avatar}
      />

      {/* Nome e Username */}
      <Text style={styles.name}>{profile.name}</Text>
      <Text style={styles.username}>@{profile.username}</Text>

      {/* Bio */}
      <Text style={styles.bio}>{profile.bio}</Text>

      {/* Ocupação */}
      <View style={styles.infoRow}>
        <Text style={styles.infoIcon}>💼</Text>
        <Text style={styles.infoText}>{profile.occupation}</Text>
      </View>

      {/* Localização */}
      <View style={styles.infoRow}>
        <Text style={styles.infoIcon}>📍</Text>
        <Text style={styles.infoText}>{profile.location}</Text>
      </View>

      {/* Website */}
      <View style={styles.infoRow}>
        <Text style={styles.infoIcon}>🔗</Text>
        <Text style={[styles.infoText, styles.link]}>{profile.website}</Text>
      </View>

      {/* Conquistas */}
      <View style={styles.achievementsContainer}>
        {profile.achievements.map((ach) => (
          <View key={ach.id} style={styles.achievementBadge}>
            <Text style={styles.achievementEmoji}>{ach.emoji}</Text>
            <Text style={styles.achievementText}>{ach.name}</Text>
          </View>
        ))}
      </View>

      {/* Botão Seguir */}
      <TouchableOpacity style={styles.followButton}>
        <Text style={styles.followButtonText}>Follow</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#30363d',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#58a6ff',
    marginBottom: 14,
  },
  name: {
    color: '#e6edf3',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  username: {
    color: '#8b949e',
    fontSize: 16,
    marginTop: 2,
    marginBottom: 12,
  },
  bio: {
    color: '#c9d1d9',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 14,
    paddingHorizontal: 10,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 5,
  },
  infoIcon: {
    fontSize: 14,
  },
  infoText: {
    color: '#8b949e',
    fontSize: 14,
  },
  link: {
    color: '#58a6ff',
  },
  achievementsContainer: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 14,
    marginBottom: 16,
  },
  achievementBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    backgroundColor: '#1c2128',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#30363d',
  },
  achievementEmoji: {
    fontSize: 14,
  },
  achievementText: {
    color: '#8b949e',
    fontSize: 12,
    fontWeight: '500',
  },
  followButton: {
    backgroundColor: '#238636',
    paddingHorizontal: 28,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#2ea043',
  },
  followButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default ProfileHeader;
