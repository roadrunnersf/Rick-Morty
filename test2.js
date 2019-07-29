class AcceptCookies extends React.Component {
  state = {
    hideAcceptCookies: !!getCookie(HIDE_ACCEPT_COOKIES)
  };

  handleClick = () => {
    setCookie(HIDE_ACCEPT_COOKIES, true);
    this.setState({ hideAcceptCookies: true });
  };

  render() {
    const { hideAcceptCookies } = this.state;
    const { handleClick } = this;

    return hideAcceptCookies ? null : (
      <CookiesNotificationWrapper>
        <StyledCookiesNotification>
          <div>
            Using our site means you consent to our use of cookies. Find out
            more in our <Link to="/privacy-policy">privacy policy</Link>.
          </div>
          <button onClick={handleClick}>⨯</button>
        </StyledCookiesNotification>
      </CookiesNotificationWrapper>
    );
  }
}

const AcceptCookies = () => {
  const [hideAcceptCookies, setHideAcceptCookies] = useState(
    !!getCookie(HIDE_ACCEPT_COOKIES)
  );

  handleClick = () => {
    setCookie(HIDE_ACCEPT_COOKIES, true);
    setHideAcceptCookies(true);
  };
};
