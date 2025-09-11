import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Button } from './src/components/Button';

function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Button Component Demo</Text>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Primary Button</Text>
          <Button 
            title="Primary Button" 
            onPress={() => console.log('Primary pressed')} 
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Secondary Button</Text>
          <Button 
            title="Secondary Button" 
            variant="secondary"
            onPress={() => console.log('Secondary pressed')} 
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Disabled Button</Text>
          <Button 
            title="Disabled Button" 
            disabled={true}
            onPress={() => console.log('This should not be called')} 
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Long Text Button</Text>
          <Button 
            title="This is a very long button text" 
            onPress={() => console.log('Long text pressed')} 
          />
        </View>
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

// Default to rendering your app
let AppEntryPoint = App;

// Render Storybook if storybookEnabled is true
if (Constants.expoConfig?.extra?.storybookEnabled === 'true') {
  AppEntryPoint = require('./.rnstorybook').default;
}

export default AppEntryPoint;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#555',
  },
});
