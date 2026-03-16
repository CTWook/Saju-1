export interface Category {
  slug: string;
  label: string;
  tagline: string;
  icon: string;
  color: string;
  textColor: string;
  badge: string | null;
  href: string;
}

export const CATEGORIES: Category[] = [
  { slug: 'love',   label: '연애·궁합운', tagline: '두 사람의 인연을 읽다',   icon: '♡', color: '#FBEAF0', textColor: '#993556', badge: 'BEST', href: '/fortune/love'   },
  { slug: 'yearly', label: '신년·총운',   tagline: '2026년 나의 큰 흐름',     icon: '★', color: '#FAEEDA', textColor: '#854F0B', badge: '인기', href: '/fortune/yearly' },
  { slug: 'tarot',  label: '타로점',      tagline: '카드로 묻고 답하다',       icon: '◈', color: '#EEEDFE', textColor: '#534AB7', badge: null,   href: '/tarot'          },
  { slug: 'today',  label: '오늘의 운세', tagline: '오늘 하루의 흐름',         icon: '☀', color: '#FFF8E6', textColor: '#854F0B', badge: '매일', href: '/today'          },
  { slug: 'career', label: '취업·직장운', tagline: '커리어의 흐름을 파악',     icon: '▲', color: '#E6F1FB', textColor: '#185FA5', badge: null,   href: '/fortune/career' },
  { slug: 'wealth', label: '재물·금전운', tagline: '돈의 흐름을 읽다',         icon: '◉', color: '#E1F5EE', textColor: '#0F6E56', badge: null,   href: '/fortune/wealth' },
  { slug: 'study',  label: '학업·수험운', tagline: '공부와 시험의 기운',       icon: '✦', color: '#F1EFE8', textColor: '#5F5E5A', badge: null,   href: '/fortune/study'  },
];
