import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Effects */}
      <div className="glow-orb glow-orb-1"></div>
      <div className="glow-orb glow-orb-2"></div>
      <div className="glow-orb glow-orb-3"></div>
      <div className="container-width section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              用AI重新定义
              <span className="text-gradient text-glow"> 创作者经济</span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              通过区块链和AI技术，为创作者提供智能版权保护、自动化授权管理和公平的收益分配机制
            </p>
            
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-primary-500/30">
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient mb-2">10K+</div>
                <div className="text-sm text-gray-400">注册创作者</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient mb-2">$2M+</div>
                <div className="text-sm text-gray-400">版权收益</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient mb-2">99.9%</div>
                <div className="text-sm text-gray-400">保护成功率</div>
              </div>
            </div>
          </div>
          
          {/* Right content */}
          <div className="relative floating">
            <div className="relative z-10 card-glass p-8 card-glow">
              <div className="flex items-center justify-between mb-6">
                <div className="text-sm font-medium text-gray-200">版权保护仪表板</div>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-accent-500/20 rounded-lg border border-accent-500/30 card-hover">
                  <div className="text-sm text-accent-400">✅ 内容已注册</div>
                  <div className="text-sm font-medium text-accent-300">100%</div>
                </div>
                <div className="flex items-center justify-between p-4 bg-primary-500/20 rounded-lg border border-primary-500/30 card-hover">
                  <div className="text-sm text-primary-400">🔗 智能合约部署</div>
                  <div className="text-sm font-medium text-primary-300">活跃</div>
                </div>
                <div className="flex items-center justify-between p-4 bg-secondary-500/20 rounded-lg border border-secondary-500/30 card-hover">
                  <div className="text-sm text-secondary-400">💰 本月收益</div>
                  <div className="text-sm font-medium text-secondary-300">$1,234</div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Background decorations */}
            <div className="absolute -top-8 -right-8 w-80 h-80 bg-gradient-to-r from-primary-500/30 to-secondary-500/30 rounded-full opacity-60 blur-3xl floating"></div>
            <div className="absolute -bottom-8 -left-8 w-80 h-80 bg-gradient-to-r from-secondary-500/30 to-accent-500/30 rounded-full opacity-60 blur-3xl floating" style={{animationDelay: '-2s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;