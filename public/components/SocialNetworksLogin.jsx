class SocialNetworksLogin extends React.PureComponent {
    render() {
        return (
            <div className="social-network-buttons">
                <div onClick={() => alert('Clicked Facebook')}>
                    <img src="/images/logo-facebook.svg" />
                    Войти через Facebook
                </div>
                <div onClick={() => alert('Clicked Google')}>
                    <img src="/images/logo-google.svg" />
                    Войти через Google
                </div>
            </div>
        );
    }
}
