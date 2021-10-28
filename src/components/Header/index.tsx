import { HeaderContainer, Wrapper, HeaderActions } from './styles';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Wrapper>
        <strong>
          Free<span>NET</span>
        </strong>

        <HeaderActions>
          <h3>11 3601-3601</h3>
          <button type="button">CONTRATE</button>
        </HeaderActions>
      </Wrapper>
    </HeaderContainer>
  );
};

export { Header };
