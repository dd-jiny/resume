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
      title: '루퍼스 부트캠프',
      subTitle: '루프팩 백엔드 3기',
      note:
        '재직자 대상 백엔드 부트캠프 과정. 대규모 트래픽에 대비해 AI와 설계의 기본기, 데이터 정합성과 성능, 안정성과 확장 구조, 집계와 운영 설계를 다룸',
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
