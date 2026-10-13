/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { FlowingBackground } from './components/FlowingBackground';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { DiagnosticSection } from './components/DiagnosticSection';
import { SolutionsSection } from './components/SolutionsSection';
import { CaseStudySection } from './components/CaseStudySection';
import { MetricsSection } from './components/MetricsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0b0916] text-[#f1f0f8] flex flex-col font-sans selection:bg-[#755FBE] selection:text-white">
      {/* Ambient Flowing Gradient & Cursor Ripple Canvas */}
      <FlowingBackground />

      {/* Top Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10 flex-1">
        {/* 1. 메인 헤더 */}
        <HeroSection />

        {/* 2. 고객 자가진단 */}
        <DiagnosticSection />

        {/* 3. 전문가 그룹 & 솔루션 안내 */}
        <SolutionsSection />

        {/* 4. 제작 비하인드 & 사례 분석 */}
        <CaseStudySection />

        {/* 5. 성과 지표 & 숫자 증거 */}
        <MetricsSection />

        {/* 6. 간편 문의 신청 */}
        <ContactSection />
      </main>

      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>

      {/* Mobile-First Sticky Action Bar */}
      <MobileBottomBar />
    </div>
  );
}
