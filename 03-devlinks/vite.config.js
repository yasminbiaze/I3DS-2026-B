import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, //Muda a porta padão git para a padrão react(3000)
    open: true, //Abre o navegador automaticamente
    host: true, //Permite acesso externo, IP do local(opcional, dependendo do seu caso de uso)
},
})
