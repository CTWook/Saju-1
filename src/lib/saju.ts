export const getZodiac = (year: number): string => {
  const animals = ['쥐', '소', '호랑이', '토끼', '용', '뱀', '말', '양', '원숭이', '닭', '개', '돼지'];
  return animals[(year - 4) % 12];
};

export const getStem = (year: number): string => {
  const stems = ['갑', '을', '병', '정', '무', '기', '경', '신', '임', '계'];
  return stems[(year - 4) % 10];
};

export const getBranch = (year: number): string => {
  const branches = ['자', '축', '인', '묘', '진', '사', '오', '미', '신', '유', '술', '해'];
  return branches[(year - 4) % 12];
};

export const getElement = (year: number): string => {
  const elements = ['목', '화', '토', '금', '수'];
  return elements[Math.floor(((year - 4) % 10) / 2)];
};
