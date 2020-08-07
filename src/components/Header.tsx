import React from 'react';
import styled from 'styled-components';
import { PageHeader, Button } from 'antd';
import { useAuth } from 'services/auth';
import { Container } from '.';

const Header = styled.div`
  box-shadow: 0 0 10px rgba(32, 45, 74, 0.2);
`;

const StatusTag = styled.div`
  font-size: 12px;
  color: white;
  background-color: #3e90fe;
  padding: 2px 6px;
  border-radius: 4px;
`;

const StyledPageHeader = styled(PageHeader)`
  padding: 16px 0;
`;

export default () => {
  const { isAuth, logout, goToLoginPage } = useAuth();

  const loggedOutFragment = [
    <Button key="1" onClick={goToLoginPage}>
      Login
    </Button>,
  ];
  const loggedInFragment = [
    <span key="1">Welcome</span>,
    <Button key="2" type="default" onClick={logout}>
      Logout
    </Button>,
  ];

  return (
    <Header>
      <Container>
        <StyledPageHeader
          title="Forests LTD"
          tags={<StatusTag>Inprogress</StatusTag>}
          extra={isAuth ? loggedInFragment : loggedOutFragment}
        />
      </Container>
    </Header>
  );
};
