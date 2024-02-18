/* eslint-disable react/prop-types */
import {
  Body,
  Card,
  Date,
  Degree,
  Image,
  Name,
  Top,
} from "./EducationCardStyle";

const EducationCard = ({ education }) => {
  return (
    <Card>
      <Top>
        <Image src={education.img} />
        <Body>
          <Name>{education.school}</Name>
          <Degree>{education.degree}</Degree>
          <Date>{education.date}</Date>
        </Body>
      </Top>
    </Card>
  );
};

export default EducationCard;
