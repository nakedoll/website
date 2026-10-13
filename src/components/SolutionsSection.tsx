import React from 'react';
import { ArrowUpRight, Check, Layers, Cpu, Compass, Code, Palette, Video } from 'lucide-react';
import { GLOBAL_CTA_URL, IMAGES, SOLUTIONS_LIST } from '../data/content';
import { RevealOnScroll } from './RevealOnScroll';

const ICONS = [Compass, Cpu, Code, Palette, Video];

export const SolutionsSection: React.FC = () => {
  return (
    <section id="solutions" className="py-16 sm:py-24 bg-[#0b0916]/60 backdrop-blur-[2px] border-t border-[#755FBE]/20 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute left-1/4 top-1/3 w-80 h-80 bg-[#755FBE]/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with exact planned texts */}
        <RevealOnScroll direction="up">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#755FBE]/20 border border-[#755FBE]/40 text-[#00B8FF] text-xs font-semibold mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>SYNERGY SOLUTIONS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
              AI와 전문가의 시너지 솔루션
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300 font-normal">
              취재, 스토리텔링, 웹, 만화, 영상까지 분야별 전문가가 협력하여 제작합니다.
            </p>
          </div>
        </RevealOnScroll>

        {/* Feature Visual Showcase: expert_solutions.png */}
        <RevealOnScroll direction="up" delayMs={100} className="mb-12">
          <div className="rounded-2xl overflow-hidden border border-[#755FBE]/30 bg-[#141026] shadow-xl group">
            <div className="aspect-video w-full overflow-hidden bg-[#100d20]">
              <img
                src={IMAGES.solutions}
                alt="AI와 전문가 그룹의 시너지 솔루션 아키텍처"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
              />
            </div>
            <div className="p-4 sm:p-6 bg-gradient-to-r from-[#141026] via-[#1b1535] to-[#141026] border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-bold text-white">5대 핵심 전문 분야 통합 파이프라인</h3>
                <p className="text-xs text-slate-300 mt-0.5">각 분야 10년 차 이상 베테랑과 최신 AI 분석 엔진의 완벽한 앙상블</p>
              </div>
              <a
                href={GLOBAL_CTA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-[#755FBE] to-[#00B8FF] hover:opacity-90 rounded-lg shadow-md transition-all whitespace-nowrap min-h-[44px]"
              >
                <span>전체 솔루션 보기</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </RevealOnScroll>

        {/* 5-Discipline Bento Grid / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SOLUTIONS_LIST.map((sol, index) => {
            const IconComponent = ICONS[index] || Cpu;
            const isMarquee = index === 0 || index === 2;
            return (
              <RevealOnScroll key={sol.id} direction="up" delayMs={index * 50}>
                <div
                  className={`h-full p-6 rounded-2xl border transition-all duration-300 relative group flex flex-col justify-between ${
                    isMarquee
                      ? 'bg-[#15112b] border-[#755FBE]/50 hover:border-[#00B8FF] shadow-[0_4px_25px_rgba(117,95,190,0.15)]'
                      : 'bg-[#120e24] border-white/10 hover:border-[#755FBE]/60'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-semibold text-[#00B8FF] tracking-wider">
                        {sol.number}. {sol.tag}
                      </span>
                      <div className="w-9 h-9 rounded-xl bg-white/5 group-hover:bg-[#755FBE]/30 flex items-center justify-center transition-colors">
                        <IconComponent className="w-4 h-4 text-[#00B8FF]" />
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00B8FF] transition-colors">
                      {sol.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                      {sol.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5 space-y-2">
                    {sol.items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-[#00B8FF] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}

          {/* Direct CTA Card */}
          <RevealOnScroll direction="up" delayMs={SOLUTIONS_LIST.length * 50}>
            <div className="h-full p-6 rounded-2xl border border-dashed border-[#755FBE]/50 bg-gradient-to-br from-[#755FBE]/15 to-transparent flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-[#00B8FF]">PARTNERSHIP</span>
                <h3 className="text-lg font-bold text-white mt-2 mb-2">
                  맞춤형 팀 빌딩 문의
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  조직의 프로젝트 성격과 일정에 맞추어 최적의 전문 제작 TF를 구성해 드립니다.
                </p>
              </div>
              <div className="pt-6">
                <a
                  href={GLOBAL_CTA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#755FBE] to-[#00B8FF] rounded-xl hover:opacity-90 shadow-md transition-all min-h-[44px]"
                >
                  <span>전체 솔루션 보기</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};
