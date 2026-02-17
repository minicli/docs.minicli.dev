import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

const sidebar = [
  {
    label: 'Prologue',
    items: [
      { label: 'Overview', slug: 'docs' },
      { label: 'Why miniCLI', slug: 'docs/why-minicli' }
    ]
  },
  {
    label: 'Getting Started',
    items: [
      { label: 'Installation', slug: 'docs/getting-started' },
      { label: 'Your First Command', slug: 'docs/first-command' },
    ]
  },
  {
    label: 'Architecture Concepts',
    items: [
      { label: 'Concepts Overview', slug: 'docs/architecture-concepts' },
      { label: 'Command Model', slug: 'docs/command-model' },
      { label: 'Arguments and Flags', slug: 'docs/arguments-and-flags' },
      { label: 'Middleware', slug: 'docs/middleware' },
      { label: 'Services and Config', slug: 'docs/services-and-config' }
    ]
  },
  {
    label: 'Digging Deeper',
    items: [
      { label: 'Deeper Topics', slug: 'docs/digging-deeper' },
      { label: 'Components and Output', slug: 'docs/components-and-output' },
      { label: 'Built-in Commands', slug: 'docs/built-in-commands' }
    ]
  },
  {
    label: 'Reference',
    items: [
      { label: 'Reference Overview', slug: 'docs/reference' },
      { label: 'Attributes', slug: 'docs/reference/attributes' },
      { label: 'Exit Codes', slug: 'docs/reference/exit-codes' },
      { label: 'Global Flags', slug: 'docs/reference/global-flags' },
      { label: 'Input Syntax', slug: 'docs/reference/input-syntax' }
    ]
  },
  {
    label: 'Releases',
    items: [
      { label: 'Versioning Strategy', slug: 'docs/versioning' },
      { label: '5.x Snapshot', slug: 'docs/v5' }
    ]
  }
];

export default defineConfig({
  site: 'https://docs.minicli.dev',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    starlight({
      title: 'miniCLI',
      description: 'Documentation for miniCLI 5.x and future releases.',
      customCss: ['./src/styles/tailwind.css', './src/styles/theme.css'],
      expressiveCode: {
        themes: ['github-light'],
        useStarlightUiThemeColors: false,
        styleOverrides: {
          borderWidth: '0px',
          frames: {
            frameBoxShadowCssValue: 'none'
          }
        }
      },
      components: {
        Header: './src/components/StarlightHeader.astro'
      },
      sidebar
    })
  ]
});
