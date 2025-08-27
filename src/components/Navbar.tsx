import React from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-dark-900/80 backdrop-blur-xl border-b border-primary-500/20 z-50">
      <div className="container-width section-padding">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg shadow-lg animate-pulse-glow"></div>
            <span className="text-xl font-bold text-gradient">AI Creator Protocol</span>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="nav-link">功能</a>
            <a href="#how-it-works" className="nav-link">工作原理</a>
            <a href="#pricing" className="nav-link">定价</a>
            <a href="#contact" className="nav-link">联系</a>
            <a href="https://app.faithcal.com" target="_blank" rel="noopener noreferrer" className="btn-primary">LUNCH APP</a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-400 hover:text-primary-400 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-primary-500/20 card-glass mt-4 rounded-xl">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="nav-link">功能</a>
              <a href="#how-it-works" className="nav-link">工作原理</a>
              <a href="#pricing" className="nav-link">定价</a>
              <a href="#contact" className="nav-link">联系</a>
              <a href="https://app.faithcal.com" target="_blank" rel="noopener noreferrer" className="btn-primary w-full">LUNCH APP</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;