import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Activity } from 'lucide-react';
import { GLOBAL_CTA_URL, IMAGES } from '../data/content';
import { RevealOnScroll } from './RevealOnScroll';

interface GoalOption {
  id: string;
  label: string;
  format: string;
}

interface PainOption {
  id: string;
  label: string;
}

const GOAL_OPTIONS: GoalOption[] = [
  { id: 'tech', label: '난해한 첨단 과학·기술·연구 성과의 대중화', format: '인터랙티브 웹 다큐 & 3D 데이터 시각화' },
  { id: 'policy', label: '공공 정책 및 시민 혜택의 직관적 이해와 확산', format: '스토리텔링 브랜드 웹툰 & 카드뉴스' },
  { id: 'biz', label: '기업 ESG 보고서 및 신뢰도 높은 브랜드 커뮤니케이션', format: '디지털 인터랙티브 리포트 & 시네마틱 영상' }
];

const PAIN_OPTIONS: PainOption[] = [
  { id: 'hard', label: '정보가 전문적이고 복잡하여 일반 대중의 이탈이 심함' },
  { id: 'boring', label: '기존 PDF 보고서나 텍스트가 방대하여 아무도 끝까지 안 읽음' },
  { id: 'visual', label: '전문 지식을 세련되게 시각화할 기획자와 디자이너 부재' }
];

export const DiagnosticSection: React.FC = () => {
  const [selectedGoal, setSelectedGoal] = useState<number>(0);
  const [selectedPain, setSelectedPain] = useState<number>(0);
  const [showResult, setShowResult] = useState<boolean>(true);

  const currentRecommendation = GOAL_OPTIONS[selectedGoal].format;

  return (
    <section id="diagnosis" className="py-16 sm:py-24 bg-[#0d0a1b]/60 backdrop-blur-[2px] border-t border-[#755FBE]/20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#00B8FF]/10 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with exact planned texts */}
        <RevealOnScroll direction="up">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#755FBE]/20 border border-[#755FBE]/40 text-[#00B8FF] text-xs font-semibold mb-3">
              <Activity className="w-3.5 h-3.5" />
              <span>CUSTOM DIAGNOSIS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
              우리 조직 맞춤 콘텐츠 진단
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300 font-normal">
              1분 진단으로 해결 과제에 딱 맞는 최적의 스토리텔링 포맷을 찾아드립니다.
            </p>
          </div>
        </RevealOnScroll>

        {/* Content Layout: Diagnostic Interactive Widget + quiz_dashboard.png */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Visual Showcase: quiz_dashboard.png */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <RevealOnScroll direction="up" delayMs={100}>
              <div className="rounded-2xl overflow-hidden border border-[#755FBE]/30 bg-[#141026] shadow-xl group">
              <div className="aspect-video w-full overflow-hidden bg-[#100d20]">
                <img
                  src={IMAGES.quiz}
                  alt="고객 자가진단 분석 대시보드 인터페이스"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                />
              </div>
              <div className="p-4 sm:p-5 border-t border-white/5 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-[#00B8FF]">
                  <span>DIAGNOSTIC ALGORITHM v3.2</span>
                  <span>ACCURACY 99.2%</span>
                </div>
                <p className="text-xs text-slate-400">
                  퍼플문의 150여 건 프로젝트 실행 데이터를 기반으로 조직의 콘텐츠 병목을 정밀 분석합니다.
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* Interactive Diagnosis Stepper Console */}
        <div className="lg:col-span-7 order-1 lg:order-2">
          <RevealOnScroll direction="up" delayMs={150}>
            <div className="bg-[#141028] border border-[#755FBE]/40 rounded-2xl p-5 sm:p-7 shadow-xl">
            <div className="space-y-6">
              {/* Question 1 */}
              <div>
                <h3 className="text-sm sm:text-base font-semibold text-white mb-3">
                  1. 조직에서 전달하고자 하는 핵심 목표는 무엇인가요?
                </h3>
                <div className="grid grid-cols-1 gap-2.5">
                  {GOAL_OPTIONS.map((opt, idx) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => {
                        setSelectedGoal(idx);
                        setShowResult(true);
                      }}
                      className={`text-left p-3.5 rounded-xl border text-xs sm:text-sm font-medium transition-all flex items-start gap-3 touch-manipulation ${
                        selectedGoal === idx
                          ? 'bg-[#755FBE]/25 border-[#00B8FF] text-white shadow-[0_0_15px_rgba(0,184,255,0.2)]'
                          : 'bg-[#100d20] border-white/10 text-slate-300 hover:border-[#755FBE]/60'
                      }`}
                    >
                      <div className={`mt-0.5 w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                        selectedGoal === idx ? 'border-[#00B8FF] bg-[#00B8FF]' : 'border-slate-500'
                      }`}>
                        {selectedGoal === idx && <div className="w-1.5 h-1.5 bg-black rounded-full" />}
                      </div>
                      <span className="leading-snug">{opt.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 2 */}
              <div>
                <h3 className="text-sm sm:text-base font-semibold text-white mb-3">
                  2. 현재 콘텐츠 제작 및 소통에서 겪는 가장 큰 장벽은 무엇인가요?
                </h3>
                <div className="grid grid-cols-1 gap-2.5">
                  {PAIN_OPTIONS.map((opt, idx) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => {
                        setSelectedPain(idx);
                        setShowResult(true);
                      }}
                      className={`text-left p-3.5 rounded-xl border text-xs sm:text-sm font-medium transition-all flex items-start gap-3 touch-manipulation ${
                        selectedPain === idx
                          ? 'bg-[#755FBE]/25 border-[#00B8FF] text-white shadow-[0_0_15px_rgba(0,184,255,0.2)]'
                          : 'bg-[#100d20] border-white/10 text-slate-300 hover:border-[#755FBE]/60'
                      }`}
                    >
                      <div className={`mt-0.5 w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                        selectedPain === idx ? 'border-[#00B8FF] bg-[#00B8FF]' : 'border-slate-500'
                      }`}>
                        {selectedPain === idx && <div className="w-1.5 h-1.5 bg-black rounded-full" />}
                      </div>
                      <span className="leading-snug">{opt.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Diagnosis Recommendation Box */}
              {showResult && (
                <div className="mt-4 p-4 sm:p-5 rounded-xl bg-gradient-to-r from-[#755FBE]/20 via-[#181335] to-[#00B8FF]/15 border border-[#00B8FF]/50 animate-in fade-in duration-300">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#00B8FF] mb-1">
                    <CheckCircle2 className="w-4 h-4 text-[#00B8FF]" />
                    <span>진단 결과 맞춤 추천 포맷</span>
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-white mt-1">
                    {currentRecommendation}
                  </h4>
                  <p className="mt-1 text-xs text-slate-300">
                    난이도 높은 정보를 직관적인 인터랙션과 과학적 스토리라인으로 재구성하여 사용자의 몰입 시간을 극대화합니다.
                  </p>

                  <div className="mt-4 pt-3 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                    <span className="text-xs text-slate-400">
                      실제 적용 상담 및 상세 기획서가 필요하신가요?
                    </span>
                    {/* Exact button label and global link */}
                    <a
                      href={GLOBAL_CTA_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#00B8FF] to-[#755FBE] hover:opacity-90 rounded-lg shadow-md transition-all whitespace-nowrap min-h-[44px]"
                    >
                      <span>맞춤 솔루션 진단</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  </div>
</section>
  );
};
