import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CATEGORIES } from '../../lib/categories';

const CategoryGrid: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="py-5">
      <h2 className="text-[#2D1B69] text-base font-medium mb-4">무엇이 궁금하세요?</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {CATEGORIES.map((category) => (
          <div
            key={category.slug}
            onClick={() => {
              // GA4 event tracking
              if (typeof window !== 'undefined' && (window as any).gtag) {
                (window as any).gtag('event', 'category_click', {
                  category: category.slug,
                });
              }
              navigate(category.href);
            }}
            className="relative bg-white border border-[#E5E5EE] rounded-xl p-[14px] flex flex-row items-center gap-3 cursor-pointer transition-all hover:scale-[1.02] hover:shadow-[0_2px_8px_rgba(0,0,0,0.06)]"
          >
            <div
              className="w-9 h-9 flex items-center justify-center rounded-full text-lg flex-shrink-0"
              style={{ backgroundColor: category.color }}
            >
              {category.icon}
            </div>
            <div>
              <div className="text-[#2D1B69] text-[13px] font-medium leading-tight">{category.label}</div>
              <div className="text-[#888780] text-[11px] leading-tight mt-0.5">{category.tagline}</div>
            </div>
            {category.badge && (
              <span
                className="absolute top-[-2px] right-2 text-[9px] px-1.5 py-0.5 rounded-full font-bold"
                style={{ backgroundColor: category.color, color: category.textColor }}
              >
                {category.badge}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;
