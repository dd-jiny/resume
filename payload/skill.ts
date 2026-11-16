import { ISkill } from '../component/skill/ISkill';

const skill: ISkill.Payload = {
  disable: false,
  skills: [
    { category: 'Language', items: [{ title: 'Java' }] },
    {
      category: 'Framework',
      items: [
        { title: 'Spring Boot' },
        { title: 'Spring Batch' },
        { title: 'JPA' },
        { title: 'MyBatis' },
      ],
    },
    { category: 'Web', items: [{ title: 'JSP' }, { title: 'jQuery' }] },
    { category: 'Infra', items: [{ title: 'Kafka' }] },
    { category: 'DB', items: [{ title: 'MySQL' }, { title: 'PostgreSQL' }, { title: 'Oracle' }] },
  ],
};

export default skill;
