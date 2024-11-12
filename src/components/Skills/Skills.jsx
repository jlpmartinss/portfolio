import { skills } from "../../data/constants";
import {
  Container,
  Description,
  Skill,
  SkillImage,
  SkillItem,
  SkillList,
  SkillTitle,
  Title,
  Wrapper,
} from "./SkillsStyle";

const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <Description>
          Here are some of my skills and my prefered technologies.
        </Description>
        {skills.map((skill) => (
          <Skill key={skill.title}>
            <SkillTitle>{skill.title}</SkillTitle>
            <SkillList>
              {skill.skills.map((item) => (
                <SkillItem key={item.name}>
                  <SkillImage src={item.image} alt={item.name} />
                  {item.name}
                </SkillItem>
              ))}
            </SkillList>
          </Skill>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Skills;
