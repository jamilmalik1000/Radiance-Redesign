import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
export default defineConfig({plugins:[react()],build:{sourcemap:true,rollupOptions:{output:{manualChunks:{three:['three','@react-three/fiber','@react-three/drei'],motion:['gsap','lenis']}}}},test:{globals:true,environment:'jsdom',setupFiles:'./src/test/setup.ts',css:true}});
