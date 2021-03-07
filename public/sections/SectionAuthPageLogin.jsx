class SectionAuthPageLogin extends React.PureComponent {
    static propTypes = {
        email: PropTypes.string,
        password: PropTypes.string,
    };

    static defaultProps = {
        email: '',
        password: '',
    };

    render() {
        return (
            <div className="section-container">
                <div className="section-header">
                    <Logo />
                    <NavBar>
                        <NavBarAuth
                            labelText="У вас нет аккаунта?"
                            buttonText="Регистрация"
                            buttonHref="registration.html"
                        />
                    </NavBar>
                </div>
                <div className="section-body">
                    <FormLogin
                        email={this.props.email}
                        password={this.props.password}
                    />
                </div>
            </div>
        );
    }
}
