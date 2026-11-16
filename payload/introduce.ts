import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '국가 단위 데이터 연계 플랫폼에서 Kafka 기반 데이터 파이프라인을 주로 개발하고 운영해온 백엔드 엔지니어 김대진입니다.',
    {
      bold: '데이터의 정합성과 신뢰성을 가장 중요하게 생각합니다.',
      text:
        '데이터는 "옮겨졌다"가 아니라 "맞게 옮겨졌다"가 증명되어야 하기에, 재처리가 일어나도 중복 없이 적재되는 구조를 만들었고 원천과 수집 데이터를 주기적으로 대조해 어긋난 곳을 기록하고 알리도록 했습니다.',
    },
    {
      bold: '모든 장애를 똑같이 처리하지 않습니다.',
      text:
        '증상보다 "무엇이 진짜 문제인가"를 먼저 정의하고, 재시도할 장애, 되돌릴 장애, 보관할 장애로 나눠 복구 방법을 설계했습니다.',
    },
    {
      bold: '동료에게 신뢰받는 개발자가 되는 것을 중요하게 생각합니다.',
      text:
        '데이터의 신뢰가 정합성에서 나온다면, 팀의 신뢰는 소통에서 나온다고 믿습니다. 진행 상황과 문제를 숨기지 않고 일찍 공유하며, 함께 일하는 사람이 다음 단계를 편하게 이어갈 수 있도록 일합니다.',
    },
  ],
  sign: '',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
