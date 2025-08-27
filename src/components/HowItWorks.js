import React from 'react';
import { Upload, MessageSquare, Settings, Rocket, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      title: '上传内容',
      description: '上传图片/视频文件或输入社交媒体链接，系统自动解析内容信息',
      details: [
        '支持多种文件格式',
        '自动提取元数据',
        '智能内容识别'
      ]
    },
    {
      icon: MessageSquare,
      title: 'AI问答设置',
      description: '通过7个智能问题了解你的授权偏好，AI生成个性化授权条款',
      details: [
        '商业用途设置',
        '二创权限配置',
        '授权期限选择'
      ]
    },
    {
      icon: Settings,
      title: '智能合约部署',
      description: '一键部署到区块链，绑定授权条款，建立不可篡改的版权证明',
      details: [
        'Story Protocol 集成',
        '自动化合约部署',
        '版权证明生成'
      ]
    },
    {
      icon: Rocket,
      title: '获得奖励',
      description: '基于内容影响力评分获得代币奖励，开启版权变现之旅',
      details: [
        '影响力智能评分',
        '代币自动发放',
        '收益实时追踪'
      ]
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gray-50">
      <div className="container-width section-padding">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            工作流程
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            简单4步，完成从内容上传到版权保护的全流程，让版权保护变得前所未有的简单
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Progress line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 transform -translate-y-1/2 z-0"></div>
          <div className="hidden lg:block absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-primary-500 to-purple-500 transform -translate-y-1/2 z-10" style={{width: '75%'}}></div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative z-20">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="text-center group">
                  {/* Step number and icon */}
                  <div className="relative mb-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full border-4 border-primary-100 group-hover:border-primary-300 transition-colors duration-300 shadow-lg">
                      <IconComponent className="w-8 h-8 text-primary-600" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Details */}
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center justify-center text-sm text-gray-500">
                        <ArrowRight className="w-4 h-4 mr-2 text-primary-500" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Demo section */}
        <div className="mt-20 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">准备开始了吗？</h3>
            <p className="text-gray-600 mb-6">立即体验完整的版权保护流程，3分钟内完成内容确权</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#demo" className="btn-primary text-lg px-8 py-4">
                开始免费试用
              </a>
              <a href="#contact" className="btn-secondary text-lg px-8 py-4">
                联系我们
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;