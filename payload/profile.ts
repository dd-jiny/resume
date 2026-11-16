import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  name: {
    title: '김대진',
    small: 'Backend Engineer',
  },
  contact: [
    {
      title: 'daejinnim@gmail.com',
      link: 'mailto:daejinnim@gmail.com',
      icon: faEnvelope,
    },
    {
      title: 'github.com/dd-jiny',
      link: 'https://github.com/dd-jiny',
      icon: faGithub,
    },
    {
      title: 'velog.io/@dd_jiny',
      link: 'https://velog.io/@dd_jiny/posts',
      icon: faEdit,
    },
  ],
};

export default profile;
