/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useRef, useState} from 'react';
import type {Node} from 'react';
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    useColorScheme,
} from 'react-native';
import RefreshWebView from "./RefreshWebView";

const App: () => Node = () => {
    const isDarkMode = useColorScheme() === 'dark';
    const [isRefresh, setRefresh] = useState(false);
    const webViewRef = useRef();

    return (
        <SafeAreaView style={styles.backgroundStyle}>
            <StatusBar barStyle={!isDarkMode ? 'light-content' : 'dark-content'}/>
            <RefreshWebView
                source={{uri: "https://picsum.photos/"}}
                onRefresh={() => {
                    setRefresh(true);
                    console.log(webViewRef.current);
                    webViewRef.current.reload();
                }}
                onLoadEnd={() => {
                    setRefresh(false);
                }}
                isRefresh={isRefresh} ref={webViewRef}/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        flex: 1
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});

export default App;
