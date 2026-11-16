import favicon from '../asset/favicon.ico';
import { IGlobal } from '../component/common/IGlobal';

const title = '김대진 | Backend Engineer';
const description =
  '국가 단위 데이터 연계 플랫폼에서 Kafka 기반 데이터 파이프라인을 개발하고 운영해온 백엔드 엔지니어 김대진의 이력서';

export const _global: IGlobal.Payload = {
  favicon,
  headTitle: title,
  seo: {
    title,
    description,
    // 검색엔진 수집을 막아 달라는 표시 (링크를 아는 사람만 보도록)
    noindex: true,
    nofollow: true,
    openGraph: {
      title,
      description,
      type: 'profile',
    },
  },
};
