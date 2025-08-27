import React from 'react';
import { Shield, Github, Twitter, Mail, Globe } from 'lucide-react';

const Footer = () => {
  const links = {
    product: [
      { name: '产品特性', href: '#features' },
      { name: '工作原理', href: '#how-it-works' },
      { name: '价格方案', href: '#pricing' },
      { name: '开发文档', href: '#docs' }
    ],
    resources: [
      { name: '帮助中心', href: '#help' },
      { name: 'API 文档', href: '#api' },
      { name: '最佳实践', href: '#best-practices' },
      { name: '社区论坛', href: '#community' }
    ],
    company: [
      { name: '关于我们', href: '#about' },
      { name: '团队介绍', href: '#team' },
      { name: '新闻动态', href: '#news' },
      { name: '加入我们', href: '#careers' }
    ],
    legal: [
      { name: '隐私政策', href: '#privacy' },
      { name: '服务条款', href: '#terms' },
      { name: '用户协议', href: '#agreement' },
      { name: '版权声明', href: '#copyright' }
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-width section-padding">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 py-16">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-primary-600 to-purple-600 rounded-xl">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">AI Creator Protocol</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              基于 Story Protocol 构建的创作者版权保护与变现平台，让版权保护变得简单高效。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Mail className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Globe className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Links sections */}
          <div>
            <h3 className="font-semibold mb-4 text-white">产品</h3>
            <ul className="space-y-3">
              {links.product.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">资源</h3>
            <ul className="space-y-3">
              {links.resources.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">公司</h3>
            <ul className="space-y-3">
              {links.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">法律</h3>
            <ul className="space-y-3">
              {links.legal.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter signup */}
        <div className="border-t border-gray-800 pt-8 pb-8">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-lg font-semibold mb-4">订阅我们的更新</h3>
            <p className="text-gray-400 mb-6">获取最新产品动态和行业资讯</p>
            <div className="flex">
              <input
                type="email"
                placeholder="输入你的邮箱"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-primary-600 hover:bg-primary-700 rounded-r-lg font-medium transition-colors duration-200">
                订阅
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm">
            &copy; 2024 AI Creator Protocol. All rights reserved. Powered by Story Protocol.
          </p>
          <div className="mt-4 md:mt-0 flex items-center space-x-6 text-sm text-gray-400">
            <span>🇨🇳 中文</span>
            <span>•</span>
            <span>Status: 99.9% Uptime</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;