import styled from "styled-components";

export const Container = styled.section`
  padding: 2rem;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  max-width: 100%;
  width: 100%;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #333;
`;

export const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: #666;
`;

export const Skill = styled.div`
  margin-bottom: 2rem;
`;

export const SkillTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

export const SkillList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const SkillItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start; /* Align items to the left */
  gap: 0.5rem;
  font-size: 1rem;
  color: #555;
  background-color: #fff;
  padding: 0.8rem 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  flex: 1 1 calc(25% - 1rem); /* Each item will take 25% of the row width minus the gap */
  max-width: calc(25% - 1rem); /* Keep the item width at 25% */
  text-align: left; /* Ensure text is aligned to the left */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 1200px) {
    flex: 1 1 calc(33% - 1rem); /* On medium screens, let each item take 33% */
    max-width: calc(33% - 1rem);
  }

  @media (max-width: 900px) {
    flex: 1 1 calc(50% - 1rem); /* On smaller screens, each item takes 50% */
    max-width: calc(50% - 1rem);
  }

  @media (max-width: 600px) {
    flex: 1 1 100%; /* On mobile, each item takes full width */
    max-width: 100%;
  }
`;

export const SkillImage = styled.img`
  width: 32px; /* Icon size */
  height: 32px; /* Icon size */
  margin-right: 0.5rem; /* Space between image and text */
`;
