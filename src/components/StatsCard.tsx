import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// ============================================================
// PROPS TIPADAS - Interface do componente StatsCard
// ============================================================
interface StatsCardProps {
  label: string;
  value: number;
}

// ============================================================
// COMPONENTE - Card de estatística individual
// ============================================================
const StatsCard: React.FC<StatsCardProps> = ({ label, value }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    paddingVertical: 12,
    borderRadius: 12,
    backgroundColor: '#161b22',
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: '#30363d',
  },
  value: {
    color: '#e6edf3',
    fontSize: 20,
    fontWeight: 'bold',
  },
  label: {
    color: '#8b949e',
    fontSize: 12,
    marginTop: 2,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
});

export default StatsCard;
