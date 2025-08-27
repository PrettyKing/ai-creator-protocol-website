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
    <section id="features" className="py-24 bg-white">
      <div className="container-width section-padding">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            强大的功能特性
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            AI Creator Protocol 提供完整的版权保护解决方案，从内容注册到收益分配的全流程自动化
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 card-hover"
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-14 h-14 ${feature.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a href="#get-started" className="btn-primary text-lg px-8 py-4">
            探索所有功能
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;