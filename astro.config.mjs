import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

const sidebar = [
  {
    label: 'Prologue',
    items: [
      { label: 'Overview', slug: 'index' },
      { label: 'Why miniCLI', slug: 'why-minicli' }
    ]
  },
  {
    label: 'Getting Started',
    items: [
      { label: 'Installation', slug: 'getting-started' },
      { label: 'Your First Command', slug: 'first-command' },
    ]
  },
  {
    label: 'Architecture Concepts',
    items: [
      { label: 'Concepts Overview', slug: 'architecture-concepts' },
      { label: 'Command Model', slug: 'command-model' },
      { label: 'Arguments and Flags', slug: 'arguments-and-flags' },
      { label: 'Middleware', slug: 'middleware' },
      { label: 'Services and Config', slug: 'services-and-config' }
    ]
  },
  {
    label: 'Digging Deeper',
    items: [
      { label: 'Deeper Topics', slug: 'digging-deeper' },
      { label: 'Components and Output', slug: 'components-and-output' },
      { label: 'Built-in Commands', slug: 'built-in-commands' }
    ]
  },
  {
    label: 'Reference',
    items: [
      { label: 'Reference Overview', slug: 'reference' },
      { label: 'Attributes', slug: 'reference/attributes' },
      { label: 'Exit Codes', slug: 'reference/exit-codes' },
      { label: 'Global Flags', slug: 'reference/global-flags' },
      { label: 'Input Syntax', slug: 'reference/input-syntax' }
    ]
  },
  {
    label: 'Releases',
    items: [
      { label: 'Versioning Strategy', slug: 'versioning' },
      { label: '5.x Snapshot', slug: 'v5' }
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
