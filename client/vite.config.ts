import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), reactRefresh()],
  esbuild: {
    jsxFactory: 'React.createElement', // for using React 17+
    loader: 'ts',
  }
})
