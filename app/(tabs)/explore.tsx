import { StyleSheet, View } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#000000', dark: '#000000' }}
      headerImage={
        <View style={styles.santosHeader}>
          <ThemedText style={styles.santosTitle}>SANTOS FC</ThemedText>
          <ThemedText style={styles.santosSubtitle}>História e Tradição</ThemedText>
        </View>
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={styles.exploreTitle}>História do Santos</ThemedText>
      </ThemedView>
      
      <ThemedText style={styles.introText}>
        Descubra mais sobre a rica história e conquistas do Santos Futebol Clube.
      </ThemedText>

      <Collapsible title="🏆 Principais Títulos">
        <ThemedText style={styles.collapsibleText}>
          • <ThemedText type="defaultSemiBold">Copa Libertadores:</ThemedText> 3 títulos (1962, 1963, 2011)
        </ThemedText>
        <ThemedText style={styles.collapsibleText}>
          • <ThemedText type="defaultSemiBold">Mundial de Clubes:</ThemedText> 2 títulos (1962, 1963)
        </ThemedText>
        <ThemedText style={styles.collapsibleText}>
          • <ThemedText type="defaultSemiBold">Brasileirão:</ThemedText> 8 títulos
        </ThemedText>
        <ThemedText style={styles.collapsibleText}>
          • <ThemedText type="defaultSemiBold">Copa do Brasil:</ThemedText> 1 título (2010)
        </ThemedText>
      </Collapsible>

      <Collapsible title="👑 Grandes Ídolos">
        <ThemedText style={styles.collapsibleText}>
          • <ThemedText type="defaultSemiBold">Pelé:</ThemedText> O Rei do Futebol, maior artilheiro da história
        </ThemedText>
        <ThemedText style={styles.collapsibleText}>
          • <ThemedText type="defaultSemiBold">Neymar:</ThemedText> Craque que brilhou na Vila antes da Europa
        </ThemedText>
        <ThemedText style={styles.collapsibleText}>
          • <ThemedText type="defaultSemiBold">Robinho:</ThemedText> Gênio da bola que encantou o mundo
        </ThemedText>
        <ThemedText style={styles.collapsibleText}>
          • <ThemedText type="defaultSemiBold">Coutinho:</ThemedText> Meia criativo e técnico
        </ThemedText>
      </Collapsible>

      <Collapsible title="🏟️ Vila Belmiro">
        <ThemedText style={styles.collapsibleText}>
          O Estádio Urbano Caldeira, conhecido como Vila Belmiro, é a casa do Santos desde 1916.
        </ThemedText>
        <ThemedText style={styles.collapsibleText}>
          Com capacidade para 16.068 torcedores, é um dos estádios mais tradicionais do Brasil.
        </ThemedText>
        <ExternalLink href="https://www.santosfc.com.br/">
          <ThemedText type="link">Site Oficial do Santos FC</ThemedText>
        </ExternalLink>
      </Collapsible>

      <Collapsible title="📅 Fundação e História">
        <ThemedText style={styles.collapsibleText}>
          O Santos foi fundado em 14 de abril de 1912 por um grupo de esportistas da cidade de Santos.
        </ThemedText>
        <ThemedText style={styles.collapsibleText}>
          O clube nasceu com o objetivo de representar a cidade no futebol e se tornou um dos maiores do mundo.
        </ThemedText>
        <ThemedText style={styles.collapsibleText}>
          As cores preto e branco foram escolhidas para representar a elegância e a tradição.
        </ThemedText>
      </Collapsible>

      <Collapsible title="🎯 Curiosidades">
        <ThemedText style={styles.collapsibleText}>
          • O Santos é o único clube brasileiro a ter conquistado a Copa Libertadores de forma invicta (2011)
        </ThemedText>
        <ThemedText style={styles.collapsibleText}>
          • Pelé marcou mais de 1000 gols pelo Santos
        </ThemedText>
        <ThemedText style={styles.collapsibleText}>
          • O clube tem uma das maiores torcidas do Brasil
        </ThemedText>
        <ThemedText style={styles.collapsibleText}>
          • A Vila Belmiro é considerada um dos estádios mais bonitos do país
        </ThemedText>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  santosHeader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    paddingVertical: 40,
  },
  santosTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 8,
  },
  santosSubtitle: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    opacity: 0.8,
  },
  exploreTitle: {
    color: '#000000',
  },
  introText: {
    color: '#333333',
    marginBottom: 16,
    fontSize: 16,
  },
  collapsibleText: {
    color: '#333333',
    marginBottom: 8,
    lineHeight: 20,
  },
});
