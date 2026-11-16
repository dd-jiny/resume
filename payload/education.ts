import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '스파르타 내일배움캠프',
      subTitle: '단기 엔지니어 양성 심화과정',
      note:
        '백엔드 엔지니어 심화 부트캠프. 대용량 트래픽 환경의 성능 개선과 안정적인 운영, AI 도구를 활용한 개발 실무 학습',
      startedAt: '2026-10',
      endedAt: '2026-11',
    },
    {
      title: '루퍼스 부트캠프',
      subTitle: '루프팩 백엔드 3기',
      note:
        '재직자 대상 백엔드 부트캠프. 대규모 트래픽에 대비한 서버 설계와 운영, AI를 활용한 개발 방식 학습',
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
