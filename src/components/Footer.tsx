import React from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';
import { GLOBAL_CTA_URL, CONTACT_EMAIL, getInquiryMailtoUrl } from '../data/content';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#090712] border-t border-[#755FBE]/20 py-12 pb-24 sm:pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-8 border-b border-white/5">
          {/* Brand */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center">
              <Logo className="h-7 w-auto" />
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              AI와 전문 기획의 강력한 몰입. 가장 중요한 순간에 꼭 필요한 정보를 즐겁고 명확하게 전달합니다.
            </p>
          </div>

          {/* Quick links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4">
            <div>
              <div className="text-slate-200 font-semibold mb-2">바로가기</div>
              <ul className="space-y-1.5">
                <li><a href="#diagnosis" className="hover:text-[#00B8FF] transition-colors">자가진단</a></li>
                <li><a href="#solutions" className="hover:text-[#00B8FF] transition-colors">솔루션 안내</a></li>
                <li><a href="#case-studies" className="hover:text-[#00B8FF] transition-colors">제작 비하인드</a></li>
                <li><a href="#metrics" className="hover:text-[#00B8FF] transition-colors">성과 지표</a></li>
              </ul>
            </div>
            <div>
              <div className="text-slate-200 font-semibold mb-2">공식 채널</div>
              <ul className="space-y-1.5">
                <li>
                  <a
                    href={GLOBAL_CTA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-[#00B8FF] transition-colors"
                  >
                    <span>퍼플문 공식 웹</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </li>
                <li><a href="#contact" className="hover:text-[#00B8FF] transition-colors">프로젝트 문의</a></li>
              </ul>
            </div>
          </div>

          {/* Contact Direct */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-slate-200 font-semibold">문의 안내</div>
            <p className="text-xs text-slate-400 leading-relaxed">
              프로젝트 의뢰 및 협업 제안은 상시 접수 중입니다.
            </p>
            <div className="space-y-1">
              <a
                href={getInquiryMailtoUrl()}
                className="inline-flex items-center gap-1.5 text-xs text-[#00B8FF] hover:underline"
              >
                <Mail className="w-3 h-3" />
                <span>{CONTACT_EMAIL}</span>
              </a>
              <div>
                <a
                  href={GLOBAL_CTA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white hover:underline"
                >
                  <span>www.purplemoon.co.kr</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Quiet copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <p>© {new Date().getFullYear()} PURPLE MOON Inc. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-400 transition-colors">개인정보처리방침</span>
            <span>·</span>
            <span className="hover:text-slate-400 transition-colors">이용약관</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
