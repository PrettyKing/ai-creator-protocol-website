import React from 'react';
import { Check, Star, Zap } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: '免费版',
      price: '¥0',
      period: '永久免费',
      description: '适合个人创作者体验版权保护功能',
      features: [
        '每月5个内容注册',
        'AI授权助手',
        '基础版权证明',
        '社区支持',
        '基础影响力评分'
      ],
      cta: '开始使用',
      popular: false,
      color: 'border-gray-200'
    },
    {
      name: '专业版',
      price: '¥99',
      period: '/月',
      description: '适合专业创作者和小型工作室',
      features: [
        '无限内容注册',
        'AI授权助手高级版',
        '完整版权保护',
        '优先客服支持',
        '高级影响力评分',
        '版权交易市场',
        '收益分析报告',
        'API接口访问'
      ],
      cta: '选择专业版',
      popular: true,
      color: 'border-primary-500 ring-2 ring-primary-200'
    },
    {
      name: '企业版',
      price: '¥999',
      period: '/月',
      description: '适合大型企业和MCN机构',
      features: [
        '专业版所有功能',
        '批量内容管理',
        '团队协作工具',
        '专属客户经理',
        '定制化解决方案',
        '白标部署',
        'SLA服务保障',
        '私有化部署选项'
      ],
      cta: '联系销售',
      popular: false,
      color: 'border-gray-200'
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container-width section-padding">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            选择适合你的方案
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            从个人创作者到大型企业，我们提供灵活的定价方案满足不同需求
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 shadow-lg ${plan.color} transition-all duration-300 hover:shadow-xl ${plan.popular ? 'transform scale-105' : 'hover:scale-105'}`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="inline-flex items-center px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-full">
                    <Star className="w-4 h-4 mr-1" />
                    最受欢迎
                  </div>
                </div>
              )}

              {/* Plan header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA button */}
              {plan.cta === '开始使用' ? (
                <a
                  href="https://app.faithcal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 px-6 rounded-lg font-medium transition-colors duration-200 text-center block ${
                    plan.popular
                      ? 'bg-primary-600 hover:bg-primary-700 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  {plan.cta}
                </a>
              ) : (
                <button
                  className={`w-full py-4 px-6 rounded-lg font-medium transition-colors duration-200 ${
                    plan.popular
                      ? 'bg-primary-600 hover:bg-primary-700 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  {plan.cta}
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-primary-600 mr-2" />
              <h3 className="text-xl font-semibold text-gray-900">企业定制方案</h3>
            </div>
            <p className="text-gray-600 mb-6">
              需要更多定制化功能？我们提供完全定制的解决方案，包括私有化部署、专属功能开发等
            </p>
            <a href="#contact" className="btn-primary">
              咨询企业方案
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;