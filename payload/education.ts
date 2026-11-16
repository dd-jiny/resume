import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '스파르타 내일배움캠프',
      subTitle: '단기 엔지니어 취업 부트캠프 1회차',
      startedAt: '2026-10',
      endedAt: '2026-11',
    },
    {
      title: '루프팩 (Loopers)',
      subTitle: '백엔드 과정 · 경력 1년 이상 백엔드 개발자 대상',
      startedAt: '2026-01',
      endedAt: '2026-04',
    },
    {
      title: '삼육대학교',
      subTitle: '카메카트로닉스학과',
      startedAt: '2013-02',
      endedAt: '2020-02',
    },
  ],
};

export default education;
