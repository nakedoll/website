import React from 'react';
import { ArrowUpRight, Activity } from 'lucide-react';
import { GLOBAL_CTA_URL } from '../data/content';

export const MobileBottomBar: React.FC = () => {
  return (
    <aside
      aria-label="모바일 빠른 실행 바"
      className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0d0a1b]/95 backdrop-blur-md border-t border-[#755FBE]/40 px-3 py-2.5 shadow-2xl"
    >
      <div className="flex items-center gap-2">
        <a
          href="#diagnosis"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-slate-200 active:bg-white/10 touch-manipulation min-h-[44px]"
        >
          <Activity className="w-3.5 h-3.5 text-[#00B8FF]" />
          <span>1분 맞춤 진단</span>
        </a>

        <a
          href={GLOBAL_CTA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-gradient-to-r from-[#755FBE] to-[#00B8FF] text-xs font-semibold text-white shadow-md active:opacity-90 touch-manipulation min-h-[44px]"
        >
          <span>프로젝트 문의하기</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </aside>
  );
};
