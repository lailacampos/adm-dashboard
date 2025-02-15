<h1>🚀 Painel Administrativo - Agropecuária/Petshop</h1>

<p>Este projeto é um painel administrativo para gerenciar usuários, produtos, categorias e visualizar gráficos dinâmicos. Ele utiliza <strong>React.js</strong> com <strong>Tailwind CSS</strong> e <strong>Redux Toolkit</strong>.</p>

<h2>📦 Tecnologias Utilizadas</h2>
<ul>
  <li>React.js</li>
  <li>Tailwind CSS</li>
  <li>Redux Toolkit</li>
  <li>Firebase Authentication</li>
  <li>OAuth</li>
  <li>React Router</li>
  <li>Axios</li>
  <li>Recharts</li>
  <li>Formik + Yup</li>
  <li>Framer Motion</li>
  <li>Vercel (para deploy)</li>
  <li>daisyUI (componentes prontos para Tailwind)</li>
  <li>Headless UI (componentes acessíveis para React + Tailwind)</li>
</ul>

<h2>📥 Como Baixar e Rodar o Projeto Localmente</h2>

<h3>1️⃣ Clonar o Repositório</h3>
<pre>
git clone https://github.com/lailacampos/adm-dashboard.git
</pre>

<h3>2️⃣ Acessar o Diretório do Projeto</h3>
<pre>
cd adm-dashboard
</pre>

<h3>3️⃣ Instalar as Dependências</h3>
<pre>
yarn install
</pre>

<h3>4️⃣ Rodar o Servidor de Desenvolvimento</h3>
<pre>
yarn dev
</pre>
<p>O projeto estará disponível em <a href="http://localhost:5173/" target="_blank">http://localhost:5173/</a> (ou em uma porta alternativa).</p>

<h3>4️⃣ Verifique se o Tailwind CSS Está Funcionando</h3>
<p>Se quiser testar se o Tailwind está funcionando corretamente, edite o arquivo <code>src/App.tsx</code> e substitua o conteúdo por:</p>

<pre>
export default function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">Tailwind CSS está funcionando! 🎉</h1>
    </div>
  );
}
</pre>

<h3>5️⃣ Possíveis Problemas</h3>
<ul>
  <li>Se o Tailwind não funcionar, verifique se o <code>vite.config.ts</code> contém a configuração correta:</li>
</ul>

<pre>
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
</pre>

<ul>
  <li>Verifique também se o <code>tailwind.config.js</code> está correto:</li>
</ul>

<pre>
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
</pre>

<h2>⚙️ Configuração do ESLint</h2>
<p>O projeto já possui um arquivo <code>eslint.config.js</code> gerado automaticamente.</p>

<h3>1️⃣ Rodar o ESLint Para Verificar Erros</h3>
<pre>
yarn lint
</pre>

<h3>2️⃣ Corrigir Problemas Automaticamente</h3>
<pre>
yarn lint:fix
</pre>

<h3>3️⃣ Personalizar Regras do ESLint</h3>
<p>Se desejar modificar as regras do ESLint, edite o arquivo <code>eslint.config.js</code> na raiz do projeto.</p>
<pre>
export default {
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
    'react/react-in-jsx-scope': 'off',
  },
};
</pre>
