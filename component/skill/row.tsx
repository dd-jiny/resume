import { Col, Row } from 'reactstrap';
import { PropsWithChildren } from 'react';

import { ISkill } from './ISkill';
import { Style } from '../common/Style';

/** 기술 이름을 bullet 없이 쉼표로 이어 한 줄로 표시 */
export default function SkillRow({
  skill,
  index,
}: PropsWithChildren<{ skill: ISkill.Skill; index: number }>) {
  return (
    <div>
      {index > 0 ? <hr /> : ''}
      <Row>
        <Col sm={12} md={3} className="text-md-right">
          <h4 style={Style.gray}>{skill.category}</h4>
        </Col>
        <Col sm={12} md={9} className="d-flex align-items-center">
          <span>{skill.items.map((item) => item.title).join(', ')}</span>
        </Col>
      </Row>
    </div>
  );
}
