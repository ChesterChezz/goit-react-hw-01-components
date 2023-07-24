import styled from '@emotion/styled';

export const ProfileCont = styled.div`
  width: 225px;
  margin: 0 auto;
  padding: 40px 40px;
  border-radius: 15px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.4);
  margin-bottom: 100px;
`;

export const DescriptionCont = styled.div`
  width: 181px;
    height: 220px;
    padding-right: 22px;
    padding-left: 22px;
    padding-top: 22px;
    margin: 0 auto;
    background-color: white;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    outline: 1px solid #92bbc9;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: stretch;
    justify-content: space-evenly;
    align-items: center;
}
`;

export const Avatar = styled.img`
  margin: 0 auto;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);
`;

export const Name = styled.p`
  margin: 0 0;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
`;

export const Tag = styled.p`
  margin: 0 0;
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  color: grey;
`;
export const Location = styled.p`
  margin: 0 0;
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  color: grey;
`;

export const StatsList = styled.ul`
  display: flex;
  width: 225px;
  margin: 0 auto;
  padding: 0;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  outline: 1px solid #9f9fba;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  text-align: center;
  background-color: #92bbc9;
  padding: 10px;
`;

export const Label = styled.span`
  margin-bottom: 5px;
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  color: grey;
`;

export const Quantity = styled.span`
  text-align: center;
  font-size: 14px;
  font-weight: 700;
`;
