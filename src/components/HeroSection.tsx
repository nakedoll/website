import React from 'react';
import { ArrowUpRight, Zap, ShieldCheck } from 'lucide-react';
import { GLOBAL_CTA_URL, IMAGES } from '../data/content';
import { RevealOnScroll } from './RevealOnScroll';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background ambient scientific glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] lg:w-[800px] h-[320px] sm:h-[600px] lg:h-[800px] bg-gradient-to-tr from-[#755FBE]/25 via-[#00B8FF]/15 to-transparent rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-6 flex flex-col text-left space-y-6">
            <RevealOnScroll direction="up" delayMs={50}>
              {/* Clean unboxed category metadata */}
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#00B8FF] tracking-wide mb-3">
                <span>과학적 기획</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span>AI 데이터 분석</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span>몰입형 스토리텔링</span>
              </div>

              {/* Main Headline (Within 15 chars as specified) */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.18] text-balance">
                AI와 전문 기획의<br className="hidden sm:inline" /> 강력한 몰입
              </h1>

              {/* Sub-text (One line as specified) */}
              <p className="mt-4 text-base sm:text-lg text-slate-300 font-normal leading-relaxed text-balance">
                가장 중요한 순간에 꼭 필요한 정보를 즐겁고 명확하게 전달합니다.
              </p>
            </RevealOnScroll>

            {/* CTA Button & Trust Indicator */}
            <RevealOnScroll direction="up" delayMs={150}>
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={GLOBAL_CTA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-[#755FBE] to-[#5e49a8] hover:from-[#8870df] hover:to-[#755FBE] rounded-xl shadow-[0_0_30px_rgba(117,95,190,0.45)] hover:shadow-[0_0_35px_rgba(0,184,255,0.4)] transition-all duration-200 border border-[#755FBE]/60 touch-manipulation min-h-[48px]"
                >
                  <span>프로젝트 문의하기</span>
                  <ArrowUpRight className="w-5 h-5 text-[#00B8FF]" />
                </a>

                <a
                  href="#diagnosis"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-colors touch-manipulation min-h-[48px]"
                >
                  <span>1분 맞춤 진단 시작</span>
                  <span className="text-xs text-[#00B8FF]">↓</span>
                </a>
              </div>

              {/* Quiet trust markers */}
              <div className="pt-6 border-t border-white/10 flex items-center gap-6 text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#00B8FF]" />
                  <span>전문 기자 출신 팩트체크</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-[#755FBE]" />
                  <span>AI 가속 기획 파이프라인</span>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Image Showcase: hero_section.png */}
          <div className="lg:col-span-6 mt-4 lg:mt-0">
            <RevealOnScroll direction="up" delayMs={200}>
              <div className="relative group rounded-2xl overflow-hidden border border-[#755FBE]/40 bg-[#141026] shadow-[0_20px_50px_rgba(11,9,22,0.9)] violet-glow">
              <div className="aspect-video w-full overflow-hidden bg-[#100d20]">
                <img
                  src={IMAGES.hero}
                  alt="AI와 전문 기획의 강력한 몰입 메인 비주얼"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
                />
              </div>

              {/* High-tech scientific overlay accents */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0916]/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-slate-300 pointer-events-none">
                <span className="font-mono text-[#00B8FF]">PURPLE MOON // LAB ENGINE</span>
                <span className="text-slate-400">HIGH-TECH RESEARCH ARCHIVE</span>
              </div>
            </div>
          </RevealOnScroll>
        </div>
        </div>
      </div>
    </section>
  );
};
