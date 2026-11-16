import { IExperience } from '../component/experience/IExperience';
import diagram from '../asset/arch-diagram.svg';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: true,
  list: [
    {
      title: '브이티더블유',
      positions: [
        {
          title: 'Backend Engineer',
          startedAt: '2021-12',
          endedAt: '2026-02',
          summary:
            '기관마다 따로 관리하는 데이터를 모아 검증한 뒤 필요한 기관에 전달하는 국가 단위 데이터 연계 플랫폼에서, 데이터 추출과 수집부터 정합성 검증, 모니터링, 배치 운영까지 전 과정의 개발과 운영을 담당',
          diagram,
          descriptions: [
            '추출과 수집: 장애를 유형별로 나눠 대응해, 하루 약 5,000만 건의 데이터 수집을 중단 없이 유지. 기관 DB 변동분을 Kafka로 보내는 추출 에이전트와 수집 컨슈머 개발.',
            '정합성 검증: 망이 나뉜 원천과 수집 데이터를 주기적으로 대조. 원본 대신 원천 쪽 건수, 합계 등 검증 결과만 받아 비교하는 기능 개발.',
            '운영 관리: 원천 기관 문의로 뒤늦게 알던 장애를 자동 감지로 전환. 서버 상태를 주기적으로 확인해, 신호가 끊기면 장애로 기록.',
          ],
          skillKeywords: [
            'Java',
            'Spring Boot',
            'Spring Batch',
            'JPA',
            'MyBatis',
            'JSP',
            'jQuery',
            'Kafka',
            'MySQL',
            'PostgreSQL',
            'Oracle',
          ],
        },
      ],
    },
  ],
};

export default experience;
