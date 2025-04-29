'use client';
import { ChakraProvider, createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';
import React from 'react';

export default function RootLayout(props: { children: React.ReactNode }) {
  const theme = defineConfig({
    globalCss: {
      body: {
        fontFamily: "'Poppins', sans-serif",
      },
    },
    theme: {
      tokens: {
        animations: {
          slideDown: { value: 'slideDown 1s ease-in-out' },
        },
        fonts: {
          counter: { value: "'Kumar One', sans-serif" },
        },
        colors: {
          background: {
            light: { value: '#FFF3E2' },
            dark: { value: '#0A0A0A' },
          },
          light: {
            0: { value: '#FFFFFF' },
            50: { value: '#F8F8F8' },
            100: { value: '#FAFAFA' },
            150: { value: '#EFEFEF' },
          },
          dark: {
            50: { value: '#000000' },
            100: { value: '#0A0A0A' },
            200: { value: '#171717' },
            300: { value: '#262626' },
            400: { value: '#373737' },
            500: { value: '#525252' },
          },
          danger: {
            value: '#ef4444',
          },
          warning: {
            value: '#ca8a04',
          },
          primary: {
            default: { value: '#486192' },
            defaultDark: { value: '#2E3A4D' },
          },
          secondary: {
            default: { value: '#FFD700' },
          },
        },
      },
      semanticTokens: {
        fonts: {
          body: { value: "'Poppins', sans-serif" },
          heading: { value: "'Poppins', sans-serif" },
        },
        colors: {
          background: {
            solid: { value: '{colors.background.50}' },
            contrast: { value: '{colors.background.100}' },
            fg: { value: '{colors.background.400}' },
            muted: { value: '{colors.background.100}' },
            subtle: { value: '{colors.background.200}' },
            emphasized: { value: '{colors.background.300}' },
            focusRing: { value: '{colors.background.400}' },
          },
        },
      },
    },
  });

  const system = createSystem(defaultConfig, theme);

  return (
    <ChakraProvider value={system}>
      {props.children}
    </ChakraProvider>
  );
}
