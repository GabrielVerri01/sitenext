import Navbar from './components/Navbar';
import FooterPage from './components/Footer';
import './globals.css'
import BotaoChat from './components/BotaoChat';

export const metadata = {
  title: 'Meu Site em Next.js',
  description: 'Criado com Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        
        <Navbar />
        
        <main>
          {children}
        </main>

      {/* BOTAO DE CHAT  */}
      <BotaoChat />
        <FooterPage />
      </body>
    </html>
  );
}
      