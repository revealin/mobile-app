/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { PageAuthentication } from './src/features/authentication/authentication';

const App: () => React$Node = () => {
  return (
    <PageAuthentication />
  );
};

export default App;

 {/* <StatusBar barStyle="dark-content" /> */}
//  <SafeAreaView>
//  <ScrollView
//    contentInsetAdjustmentBehavior="automatic"
//    style={authenticationStyles.scrollView}>
//    <Header /> 
//      {global.HermesInternal == null ? null : (
//      <View style={authenticationStyles.engine}>
//        <Text style={authenticationStyles.footer}>Engine: Hermes</Text>
//      </View>
//    )}
//    <View style={authenticationStyles.body}>
//      <View style={authenticationStyles.sectionContainer}>
//        <Text style={authenticationStyles.sectionTitle}>Reveal In</Text>
//        <Text style={authenticationStyles.sectionDescription}>
//          Edit <Text style={authenticationStyles.highlight}>App.js</Text> to change this
//          screen and then come back to see your edits.
//        </Text>
//      </View>
//      <View style={authenticationStyles.sectionContainer}>
//        <Text style={authenticationStyles.sectionTitle}>See Your Changes</Text>
//        <Text style={authenticationStyles.sectionDescription}>
//          <ReloadInstructions />
//        </Text>
//      </View>
//      <View style={authenticationStyles.sectionContainer}>
//        <Text style={authenticationStyles.sectionTitle}>Debug</Text>
//        <Text style={authenticationStyles.sectionDescription}>
//          <DebugInstructions />
//        </Text>
//      </View>
//      <View style={authenticationStyles.sectionContainer}>
//        <Text style={authenticationStyles.sectionTitle}>Learn More</Text>
//        <Text style={authenticationStyles.sectionDescription}>
//          Read the docs to discover what to do next:
//        </Text>
//      </View> 
//      <LearnMoreLinks /> 
//    </View>
//  </ScrollView>
// </SafeAreaView>