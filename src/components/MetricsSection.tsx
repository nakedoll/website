import React from 'react';
import { BarChart3, Award, CheckCheck, Clock, Users, Mail } from 'lucide-react';
import { IMAGES, METRICS, getInquiryMailtoUrl } from '../data/content';
import { RevealOnScroll } from './RevealOnScroll';

const METRIC_ICONS = [Award, Clock, Users, CheckCheck];

export const MetricsSection: React.FC = () => {
  return (
    <section id="metrics" className="py-16 sm:py-24 bg-[#0b0916]/60 backdrop-blur-[2px] border-t border-[#755FBE]/20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#755FBE]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with exact planned texts */}
        <RevealOnScroll direction="up">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#755FBE]/20 border border-[#755FBE]/40 text-[#00B8FF] text-xs font-semibold mb-3">
              <BarChart3 className="w-3.5 h-3.5" />
              <span>METRIC EVIDENCE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
              숫자로 검증된 몰입과 성과
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300 font-normal">
              고도화된 스킬과 맞춤형 기획으로 입증해낸 퍼플문의 실행 기록입니다.
            </p>
          </div>
        </RevealOnScroll>

        {/* Feature Visual Showcase: metrics_dashboard.png */}
        <RevealOnScroll direction="up" delayMs={100} className="mb-12">
          <div className="rounded-2xl overflow-hidden border border-[#755FBE]/30 bg-[#141026] shadow-xl group">
            <div className="aspect-video w-full overflow-hidden bg-[#100d20]">
              <img
                src={IMAGES.metrics}
                alt="네온 사이언 디지털 카운터 미터 및 메트릭 게이지 대시보드"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
              />
            </div>
            <div className="p-4 sm:p-5 bg-[#120e24] border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-400">
              <span className="font-mono text-[#00B8FF]">VERIFIED PERFORMANCE INDEX 2026</span>
              <span>독자 이탈률 최소화 · 콘텐츠 잔존율 및 정보 회상률 94% 달성</span>
            </div>
          </div>
        </RevealOnScroll>

        {/* 4 Quantitative Rigor Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {METRICS.map((metric, idx) => {
            const Icon = METRIC_ICONS[idx] || Award;
            return (
              <RevealOnScroll key={metric.label} direction="up" delayMs={idx * 60}>
                <div className="h-full p-6 rounded-2xl bg-[#141026] border border-[#755FBE]/30 hover:border-[#00B8FF] transition-all duration-300 group shadow-lg flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-white/5 group-hover:bg-[#755FBE]/20 flex items-center justify-center transition-colors">
                        <Icon className="w-5 h-5 text-[#00B8FF]" />
                      </div>
                      <span className="font-mono text-xs text-slate-500">0{idx + 1}</span>
                    </div>

                    <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tabular-nums tracking-tight group-hover:text-[#00B8FF] transition-colors">
                      {metric.value}
                    </div>

                    <h3 className="mt-2 text-sm sm:text-base font-semibold text-slate-200">
                      {metric.label}
                    </h3>
                  </div>

                  <p className="mt-3 text-xs text-slate-400 leading-relaxed border-t border-white/5 pt-3">
                    {metric.desc}
                  </p>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>

        {/* Quantitative Context Box */}
        <RevealOnScroll direction="up" delayMs={200} className="mt-8">
          <div className="p-5 rounded-2xl bg-gradient-to-r from-[#755FBE]/15 via-[#16122d] to-[#00B8FF]/10 border border-[#755FBE]/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <span className="text-xs font-semibold text-[#00B8FF] block">성과 지표 보증</span>
              <span className="text-sm text-slate-200 font-medium">
                모든 기획물은 데이터 기반 사전 검증과 사용자 테스트를 거쳐 납품됩니다.
              </span>
            </div>
            <a
              href={getInquiryMailtoUrl()}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-[#755FBE] to-[#00B8FF] rounded-lg shadow-md hover:opacity-90 transition-all shrink-0 min-h-[44px]"
            >
              <span>퍼플문에 문의하기</span>
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
