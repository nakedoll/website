import React, { useState } from 'react';
import { ArrowUpRight, Send, CheckCircle2, MessageSquare, PhoneCall, Mail } from 'lucide-react';
import { GLOBAL_CTA_URL, IMAGES, CONTACT_EMAIL, getInquiryMailtoUrl } from '../data/content';
import { RevealOnScroll } from './RevealOnScroll';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    contact: '',
    serviceType: '인터랙티브 웹 솔루션',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Trigger email client with prefilled project info to nakedoll@gmail.com
    const mailto = getInquiryMailtoUrl(formData);
    window.location.href = mailto;
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#0d0a1b]/60 backdrop-blur-[2px] border-t border-[#755FBE]/20 relative overflow-hidden">
      {/* Background radial spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-[#755FBE]/20 via-[#00B8FF]/15 to-transparent rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with exact planned texts */}
        <RevealOnScroll direction="up">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#755FBE]/20 border border-[#755FBE]/40 text-[#00B8FF] text-xs font-semibold mb-3">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>START A PROJECT</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
              지금 바로 기획을 시작하세요
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300 font-normal">
              풀고자 하는 고민을 남겨주시면 분야별 전문가가 최적의 솔루션을 제안합니다.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Visual Showcase: contact_form.png */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <RevealOnScroll direction="up" delayMs={100}>
              <div className="rounded-2xl overflow-hidden border border-[#755FBE]/30 bg-[#141026] shadow-xl group">
                <div className="aspect-video w-full overflow-hidden bg-[#100d20]">
                  <img
                    src={IMAGES.contact}
                    alt="퍼플문 미니멀 컨택트 콘솔 인터페이스"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                  />
                </div>

                <div className="p-5 border-t border-white/5 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#00B8FF]">
                    <span>PURPLE MOON DIRECT CHANNEL</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    퍼플문의 전문 디렉터가 기획 의도와 기술적 실현 가능성을 면밀히 검토한 후 24시간 내에 맞춤형 제안서를 회신해 드립니다.
                  </p>

                  <div className="pt-2 border-t border-white/5 flex flex-col gap-2 text-xs text-slate-400">
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-[#00B8FF]" />
                      <span>문의 이메일: <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#00B8FF] hover:underline font-medium">{CONTACT_EMAIL}</a></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <PhoneCall className="w-3.5 h-3.5 text-[#755FBE]" />
                      <span>공식 웹사이트: <a href={GLOBAL_CTA_URL} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white underline">www.purplemoon.co.kr</a></span>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Interactive Form Console */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <RevealOnScroll direction="up" delayMs={150}>
              <div className="bg-[#141028] border border-[#755FBE]/40 rounded-2xl p-6 sm:p-8 shadow-xl">
                {submitted ? (
                  <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                    <div className="w-16 h-16 bg-[#00B8FF]/20 border border-[#00B8FF] rounded-full flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(0,184,255,0.4)]">
                      <CheckCircle2 className="w-8 h-8 text-[#00B8FF]" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      문의가 성공적으로 전달되었습니다
                    </h3>
                    <p className="text-sm text-slate-300 max-w-md mx-auto">
                      {CONTACT_EMAIL}으로 메일 전송이 요청되었습니다. 담당 전문 기획자가 검토 후 24시간 이내에 최적의 솔루션과 함께 회신드립니다.
                    </p>
                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="px-5 py-2.5 text-xs text-slate-400 hover:text-white rounded-lg border border-white/10 hover:border-white/20 transition-colors"
                      >
                        다시 작성하기
                      </button>
                      {/* Direct mail action button */}
                      <a
                        href={getInquiryMailtoUrl(formData)}
                        className="inline-flex items-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#755FBE] to-[#00B8FF] rounded-lg shadow-md hover:opacity-90 transition-all min-h-[44px]"
                      >
                        <span>퍼플문에 문의하기</span>
                        <Mail className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1.5">
                          담당자명 / 직함 <span className="text-[#00B8FF]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="예: 홍길동 팀장"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-[#100d20] border border-white/10 text-white placeholder-slate-500 text-sm focus:border-[#00B8FF] focus:outline-none focus:ring-1 focus:ring-[#00B8FF] transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1.5">
                          소속 기관 / 기업명 <span className="text-[#00B8FF]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="예: 한국연구재단 / (주)퍼플테크"
                          value={formData.organization}
                          onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-[#100d20] border border-white/10 text-white placeholder-slate-500 text-sm focus:border-[#00B8FF] focus:outline-none focus:ring-1 focus:ring-[#00B8FF] transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1.5">
                          연락처 / 이메일 <span className="text-[#00B8FF]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="contact@company.com"
                          value={formData.contact}
                          onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-[#100d20] border border-white/10 text-white placeholder-slate-500 text-sm focus:border-[#00B8FF] focus:outline-none focus:ring-1 focus:ring-[#00B8FF] transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1.5">
                          관심 솔루션 분야
                        </label>
                        <select
                          value={formData.serviceType}
                          onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-[#100d20] border border-white/10 text-white text-sm focus:border-[#00B8FF] focus:outline-none focus:ring-1 focus:ring-[#00B8FF] transition-all"
                        >
                          <option value="인터랙티브 웹 솔루션">인터랙티브 웹 & 디지털 개발</option>
                          <option value="과학적 스토리텔링">과학적 스토리텔링 & 기획</option>
                          <option value="웹툰 & 인포그래픽">웹툰 & 비주얼 인포그래픽</option>
                          <option value="영상 & 모션그래픽">고화질 영상 & 모션 그래픽</option>
                          <option value="탐사 취재 및 데이터">탐사 취재 & 데이터 정밀 분석</option>
                          <option value="종합 솔루션 패키지">전체 통합 솔루션</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        해결하고자 하는 고민 / 프로젝트 개요 <span className="text-[#00B8FF]">*</span>
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder="현재 전하고자 하는 메시지, 주요 타깃, 희망 일정이나 예산 범위 등을 편하게 적어주세요."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#100d20] border border-white/10 text-white placeholder-slate-500 text-sm focus:border-[#00B8FF] focus:outline-none focus:ring-1 focus:ring-[#00B8FF] transition-all resize-none"
                      />
                    </div>

                    {/* Submit button with exact required label [퍼플문에 문의하기] and link */}
                    <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                      <p className="text-xs text-slate-400">
                        작성된 정보는 상담 목적 외에 절대 활용되지 않습니다.
                      </p>
                      <div className="flex items-center gap-3">
                        <button
                          type="submit"
                          className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#755FBE] to-[#00B8FF] hover:opacity-95 rounded-xl shadow-[0_0_20px_rgba(117,95,190,0.4)] transition-all min-h-[44px] cursor-pointer"
                        >
                          <span>퍼플문에 문의하기</span>
                          <Send className="w-4 h-4 text-white" />
                        </button>
                        <a
                          href={GLOBAL_CTA_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hidden sm:inline-flex items-center justify-center p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors"
                          title="공식 웹사이트 바로가기"
                        >
                          <ArrowUpRight className="w-4 h-4 text-[#00B8FF]" />
                        </a>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};
