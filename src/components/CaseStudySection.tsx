import React, { useState } from 'react';
import { ArrowUpRight, TrendingUp, Sparkles, BookOpen } from 'lucide-react';
import { GLOBAL_CTA_URL, IMAGES, CASE_STUDIES } from '../data/content';
import { RevealOnScroll } from './RevealOnScroll';

export const CaseStudySection: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<number>(0);

  return (
    <section id="case-studies" className="py-16 sm:py-24 bg-[#0d0a1b]/60 backdrop-blur-[2px] border-t border-[#755FBE]/20 relative overflow-hidden">
      {/* Background cyan/violet soft spotlight */}
      <div className="absolute right-1/4 bottom-1/4 w-96 h-96 bg-[#00B8FF]/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with exact planned texts */}
        <RevealOnScroll direction="up">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#755FBE]/20 border border-[#755FBE]/40 text-[#00B8FF] text-xs font-semibold mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              <span>CASE STUDIES & TIMELINE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
              메시지가 콘텐츠가 되는 과학
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300 font-normal">
              AI 데이터 분석과 입체적 스토리텔링으로 어려운 정보를 전환시킨 사례입니다.
            </p>
          </div>
        </RevealOnScroll>

        {/* Feature Visual Showcase: case_study_timeline.png */}
        <RevealOnScroll direction="up" delayMs={100} className="mb-12">
          <div className="rounded-2xl overflow-hidden border border-[#755FBE]/30 bg-[#141026] shadow-xl group">
            <div className="aspect-video w-full overflow-hidden bg-[#100d20]">
              <img
                src={IMAGES.cases}
                alt="과학적 제작 타임라인 및 인터랙티브 레이어 분석"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
              />
            </div>
            <div className="p-4 sm:p-5 bg-gradient-to-r from-[#141026] to-[#1a1435] border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono text-[#00B8FF]">SCIENTIFIC JOURNAL METHODOLOGY</span>
                <p className="text-xs sm:text-sm text-slate-200 font-medium mt-0.5">
                  데이터 정밀 분석 → 내러티브 구조화 → 멀티미디어 인터랙티브 프로덕션 파이프라인
                </p>
              </div>
              <a
                href={GLOBAL_CTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-[#755FBE] to-[#00B8FF] hover:opacity-90 rounded-lg shadow-md transition-all whitespace-nowrap min-h-[44px]"
              >
                <span>사례 분석 보기</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </RevealOnScroll>

        {/* Interactive Case Studies Tabs & Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Case Navigation Buttons */}
          <div className="lg:col-span-5 space-y-3">
            <RevealOnScroll direction="up" delayMs={150}>
              <div className="space-y-3">
                {CASE_STUDIES.map((c, idx) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setSelectedCase(idx)}
                    className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all touch-manipulation ${
                      selectedCase === idx
                        ? 'bg-[#181333] border-[#00B8FF] shadow-[0_0_20px_rgba(0,184,255,0.15)] text-white'
                        : 'bg-[#120e24] border-white/10 text-slate-300 hover:border-[#755FBE]/50'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-mono text-[#00B8FF] font-semibold">{c.phase}</span>
                      <span className="text-slate-400">{c.category}</span>
                    </div>
                    <div className="text-xs text-slate-400 font-medium mb-1">{c.client}</div>
                    <div className="text-sm sm:text-base font-bold leading-snug">{c.title}</div>
                  </button>
                ))}
              </div>
            </RevealOnScroll>
          </div>

          {/* Active Case Study Detail Card */}
          <div className="lg:col-span-7">
            <RevealOnScroll direction="up" delayMs={200}>
              <div className="bg-[#141028] border border-[#755FBE]/40 rounded-2xl p-6 sm:p-8 shadow-xl">
                {(() => {
                  const current = CASE_STUDIES[selectedCase];
                  return (
                    <div className="space-y-6">
                      <div className="flex items-center justify-between pb-4 border-b border-white/10">
                        <div>
                          <span className="text-xs font-mono text-[#00B8FF] tracking-wider uppercase">
                            {current.phase} · {current.category}
                          </span>
                          <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                            {current.client}
                          </h3>
                        </div>
                        <div className="w-10 h-10 rounded-xl bg-[#755FBE]/20 border border-[#755FBE]/40 flex items-center justify-center shrink-0">
                          <Sparkles className="w-5 h-5 text-[#00B8FF]" />
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-slate-300 mb-2">프로젝트 핵심 내용</h4>
                        <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                          {current.details}
                        </p>
                      </div>

                      {/* Highlighted Result Box */}
                      <div className="p-4 rounded-xl bg-gradient-to-r from-[#755FBE]/20 to-[#00B8FF]/20 border border-[#00B8FF]/40 flex items-start gap-3">
                        <TrendingUp className="w-5 h-5 text-[#00B8FF] shrink-0 mt-0.5" />
                        <div>
                          <div className="text-xs font-semibold text-[#00B8FF]">검증된 성과 지표</div>
                          <div className="text-sm sm:text-base font-bold text-white mt-0.5">
                            {current.result}
                          </div>
                        </div>
                      </div>

                      {/* Action Link with exact label */}
                      <div className="pt-2 flex justify-end">
                        <a
                          href={GLOBAL_CTA_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#755FBE] to-[#00B8FF] rounded-xl hover:opacity-90 shadow-md transition-all min-h-[44px]"
                        >
                          <span>사례 분석 보기</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  );
                })()}
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};
