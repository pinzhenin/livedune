class SectionAuthPageRegistration extends React.PureComponent {
    static propTypes = {
        name: PropTypes.string,
        email: PropTypes.string,
        password: PropTypes.string,
    };

    static defaultProps = {
        name: '',
        email: '',
        password: '',
    };

    constructor(props) {
        super(props);

        this.state = {
            step: 'registration-form', // 'email-confirm', 'email-resend'
            name: props.name,
            email: props.email,
        };

        this.onSubmitFormRegistration = this.onSubmitFormRegistration.bind(this);
        this.onEmailConfirm = this.onEmailConfirm.bind(this);
        this.onEmailResend = this.onEmailResend.bind(this);
    }

    /**
     * @param {Object} result
     */
    onSubmitFormRegistration(result) {
        if (result.success) {
            this.setState({ step: 'email-confirm', name: result.user.name, email: result.user.email });
        } else {
            alert('Registration failed');
        }
    }

    onEmailConfirm(result) {
        if (result.success) {
            alert('Clicked Confirm Email');
        } else {
            this.setState({ step: 'email-resend' });
        }
    }

    onEmailResend(result) {
        if (result.success) {
            alert('Clicked Resend Email');
        } else {
            this.setState({ step: 'email-confirm' });
        }
    }

    renderRegistrationForm() {
        return (
            <div className="section-container">
                <div className="section-header">
                    <Logo />
                    <NavBar>
                        <NavBarAuth
                            labelText="Уже есть аккаунт?"
                            buttonText="Вход"
                            buttonHref="login.html"
                        />
                    </NavBar>
                </div>
                <div className="section-body">
                    <FormRegistration
                        name={this.props.name}
                        email={this.props.email}
                        password={this.props.password}
                        callback={this.onSubmitFormRegistration}
                    />
                </div>
            </div>
        );
    }

    renderEmailConfirm() {
        return (
            <div className="section-container">
                <div className="section-header">
                    <Logo />
                    <NavBar>
                        <NavBarExit />
                    </NavBar>
                </div>
                <div className="section-body">
                    <FormConfirmEmail
                        name={this.state.name}
                        email={this.state.email}
                        callback={this.onEmailConfirm}
                    />
                </div>
            </div>
        );
    }

    renderEmailResend() {
        return (
            <div className="section-container">
                <div className="section-header">
                    <Logo />
                    <NavBar>
                        <NavBarExit />
                    </NavBar>
                </div>
                <div className="section-body">
                    <FormResendEmail
                        name={this.state.name}
                        email={this.state.email}
                        callback={this.onEmailResend}
                    />
                </div>
            </div>
        );
    }

    render() {
        switch (this.state.step) {
            case 'email-confirm':
                return this.renderEmailConfirm();
            case 'email-resend':
                return this.renderEmailResend();
            case 'registration-form':
            default:
                return this.renderRegistrationForm();
        }
    }
}
