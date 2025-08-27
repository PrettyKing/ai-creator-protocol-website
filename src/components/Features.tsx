import React from 'react';
import { 
  Upload, 
  Zap, 
  Shield, 
  Coins, 
  Brain, 
  FileText, 
  Globe, 
  TrendingUp 
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Upload,
      title: '内容注册',
      description: '上传内容或粘贴社交媒体链接，自动注册为链上IP资产',
      color: 'bg-blue-500'
    },
    {
      icon: Brain,
      title: 'AI授权助手',
      description: '智能问答生成标准授权条款，降低版权授权门槛',
      color: 'bg-purple-500'
    },
    {
      icon: Shield,
      title: '链上确权',
      description: '部署智能合约，绑定授权条款，建立不可篡改的版权证明',
      color: 'bg-green-500'
    },
    {
      icon: Coins,
      title: '代币奖励',
      description: '基于内容影响力评分，获得平台代币奖励',
      color: 'bg-yellow-500'
    },
    {
      icon: TrendingUp,
      title: '影响力评分',
      description: '基于社交媒体指标智能计算内容影响力，公正透明',
      color: 'bg-red-500'
    },
    {
      icon: Globe,
      title: '全球市场',
      description: '连接全球创作者和品牌方，建立去中心化的版权交易市场',
      color: 'bg-indigo-500'
    },
    {
      icon: FileText,
      title: '智能合约',
      description: '自动化执行授权条款，确保版权收益准确分配',
      color: 'bg-pink-500'
    },
    {
      icon: Zap,
      title: '快速部署',
      description: '一键部署版权保护，3分钟内完成整个确权流程',
      color: 'bg-orange-500'
    }
  ];

  return (
    <section id="features" className="relative py-24 overflow-hidden">
      <div className="container-width section-padding">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-secondary-500/20 to-accent-500/20 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        {/* Section header */}
        <div className="relative text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 text-glow">
            强大的功能特性
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-300">
            AI Creator Protocol 提供完整的版权保护解决方案，从内容注册到收益分配的全流程自动化
          </p>
        </div>

        {/* Features grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group relative card-glass p-8 card-hover animate-scale-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Gradient border effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/20 via-secondary-500/20 to-accent-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 ${feature.color.replace('bg-', 'bg-gradient-to-br from-').replace('-500', '-400 to-')}${feature.color.replace('bg-', '').replace('-500', '-600')} rounded-xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-gradient transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Enhanced hover effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/10 via-secondary-500/10 to-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="relative text-center mt-20">
          <div className="inline-block">
            <a href="#get-started" className="btn-primary text-lg px-12 py-5 relative z-10">
              探索所有功能
            </a>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl filter blur-xl opacity-30 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;