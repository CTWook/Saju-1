export interface TarotCard {
  index: number;
  name: string;
  koreanName: string;
  keywords: string[];
  uprightMeaning: string;
  reversedMeaning: string;
}

export const TAROT_CARDS: TarotCard[] = [
  { index: 0, name: 'The Fool', koreanName: '광대', keywords: ['모험', '자유', '순수'], uprightMeaning: '새로운 시작, 모험심, 무한한 가능성', reversedMeaning: '무모함, 부주의, 방향 상실' },
  { index: 1, name: 'The Magician', koreanName: '마법사', keywords: ['창의성', '능력', '자신감'], uprightMeaning: '잠재력 발휘, 창조적인 능력, 주도권', reversedMeaning: '속임수, 능력의 남용, 계획의 지연' },
  { index: 2, name: 'The High Priestess', koreanName: '여사제', keywords: ['지혜', '신비', '직관'], uprightMeaning: '비밀스러운 지식, 내면의 소리, 여성적 직관', reversedMeaning: '피상적인 지식, 직관의 부재, 비밀의 탄로' },
  { index: 3, name: 'The Empress', koreanName: '여황제', keywords: ['풍요', '모성', '아름다움'], uprightMeaning: '번영과 풍요, 창의적 성과, 자연의 생명력', reversedMeaning: '창의성의 정체, 의존성, 낭비' },
  { index: 4, name: 'The Emperor', koreanName: '황제', keywords: ['권위', '질서', '책임'], uprightMeaning: '강력한 지도력, 구조와 안정, 실무적 능력', reversedMeaning: '독단적 권위, 비효율성, 지배욕' },
  { index: 5, name: 'The Hierophant', koreanName: '교황', keywords: ['전통', '가르침', '영성'], uprightMeaning: '윤리적 규범, 스승의 인도, 조직의 가치', reversedMeaning: '고정관념, 위선, 기존 틀에서의 탈피' },
  { index: 6, name: 'The Lovers', koreanName: '연인', keywords: ['사랑', '선택', '조화'], uprightMeaning: '깊은 유대감, 올바른 선택, 매력과 끌림', reversedMeaning: '관계의 불협화음, 그릇된 선택, 자기애 결핍' },
  { index: 7, name: 'The Chariot', koreanName: '전차', keywords: ['승리', '의지', '돌파'], uprightMeaning: '목표 달성, 역경 극복, 강한 추진력', reversedMeaning: '통제 불능, 방향 상실, 무리한 전진' },
  { index: 8, name: 'Strength', koreanName: '힘', keywords: ['용기', '인내', '자제력'], uprightMeaning: '부드러운 카리스마, 내면의 힘, 열정의 승화', reversedMeaning: '자신감 결여, 무력감, 공격적인 성향' },
  { index: 9, name: 'The Hermit', koreanName: '은둔자', keywords: ['탐구', '고독', '성찰'], uprightMeaning: '자기 성찰의 시간, 내면의 진실, 신중한 조언', reversedMeaning: '고립, 외로움, 현실 회피' },
  { index: 10, name: 'Wheel of Fortune', koreanName: '운명의 수레바퀴', keywords: ['변화', '운명', '행운'], uprightMeaning: '인생의 전환점, 운명의 흐름, 피할 수 없는 변화', reversedMeaning: '불운, 예상치 못한 저항, 정체기' },
  { index: 11, name: 'Justice', koreanName: '정의', keywords: ['공정', '균형', '결정'], uprightMeaning: '객관적인 판단, 인과응보, 법적/계약적 성과', reversedMeaning: '불공정, 편견, 결정의 번복' },
  { index: 12, name: 'The Hanged Man', koreanName: '매달린 사람', keywords: ['희생', '새로운 시각', '인내'], uprightMeaning: '관점의 전환, 자발적 희생, 멈춤의 지혜', reversedMeaning: '무의미한 희생, 고정관념, 저항' },
  { index: 13, name: 'Death', koreanName: '죽음', keywords: ['종결', '새로운 탄생', '변형'], uprightMeaning: '과거와의 단절, 급격한 변화, 새로운 주기의 시작', reversedMeaning: '변화에 대한 두려움, 정체, 과거에 집착' },
  { index: 14, name: 'Temperance', koreanName: '절제', keywords: ['조화', '균형', '인내'], uprightMeaning: '중용의 미덕, 서로 다른 것의 융합, 정서적 안정', reversedMeaning: '불균형, 극단적인 선택, 소통의 부재' },
  { index: 15, name: 'The Devil', koreanName: '악마', keywords: ['속박', '중독', '유혹'], uprightMeaning: '물질적 집착, 거부할 수 없는 유혹, 부정적인 영향', reversedMeaning: '속박에서의 해방, 자각, 유혹을 이겨냄' },
  { index: 16, name: 'The Tower', koreanName: '탑', keywords: ['파괴', '충격', '각성'], uprightMeaning: '갑작스러운 붕괴, 충격적인 사건, 거짓된 토대의 붕괴', reversedMeaning: '재난의 모면, 지연된 변화, 충격의 여파' },
  { index: 17, name: 'The Star', koreanName: '별', keywords: ['희망', '치유', '영감'], uprightMeaning: '긍정적인 전망, 마음의 안식, 영적 인도', reversedMeaning: '절망, 믿음의 상실, 비관적인 생각' },
  { index: 18, name: 'The Moon', koreanName: '달', keywords: ['불안', '무의식', '환영'], uprightMeaning: '심리적 불안정, 드러나지 않은 위험, 내면의 공포', reversedMeaning: '불안의 해소, 혼란의 끝, 진실의 규명' },
  { index: 19, name: 'The Sun', koreanName: '태양', keywords: ['성공', '기쁨', '활력'], uprightMeaning: '밝은 미래, 성취와 보상, 생명력 넘치는 기운', reversedMeaning: '일시적인 지연, 과도한 낙관, 활력의 저하' },
  { index: 20, name: 'Judgement', koreanName: '심판', keywords: ['부활', '보상', '결단'], uprightMeaning: '과거에 대한 평가, 새로운 소명, 최종적인 결정', reversedMeaning: '지연된 소식, 후회, 잘못된 판단' },
  { index: 21, name: 'The World', koreanName: '세계', keywords: ['완성', '통합', '성취'], uprightMeaning: '목표의 완수, 조화로운 마무리, 해외와의 인연', reversedMeaning: '미완성, 성급한 결말, 한계의 부딪힘' },
];
