class FormLogin extends React.PureComponent {
    static propTypes = {
        className: PropTypes.string,
        email: PropTypes.string,
        password: PropTypes.string,
    };

    static defaultProps = {
        className: 'block-login',
        email: '',
        password: '',
    };

    constructor(props) {
        super(props);

        this.state = {
            email: props.email,
            password: props.password,
            errors: null,
            running: false,
        };

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    hasErrors() {
        return !!this.state.errors?.size;
    }

    getErrors() {
        if (this.hasErrors()) {
            const errors = [];
            this.state.errors.forEach((value) => errors.push(value));
            return errors.filter((item) => !!item).join(', ');
        }
        return null;
    }

    onChangeEmail(event) {
        this.setState({ email: event.target.value, errors: null });
    }

    onChangePassword(event) {
        this.setState({ password: event.target.value, errors: null });
    }

    onSubmit() {
        if (!this.validate()) {
            return;
        }

        this.setState({ running: true });

        BackendHelper.login(this.state.email, this.state.password)
            .then((success) => {
                this.setState({ running: false });
                if (success) {
                    alert('Welcome aboard!'); // Here user is logged in
                } else {
                    this.setState({
                        errors: new Map([
                            ['form', 'Неверный еmail или пароль'],
                            ['email', null],
                            ['password', null],
                        ])
                    });
                }
            });
    }

    validate() {
        const errors = new Map();
        if (this.state.email.trim() === '') {
            errors.set('email', 'Введите email');
        } else if (!ValidateHelper.validateEmail(this.state.email)) {
            errors.set('email', 'Введите корректный email');
        }
        if (this.state.password.trim() === '') {
            errors.set('password', 'Введите пароль');
        } else if (!ValidateHelper.validatePassword(this.state.password)) {
            errors.set('password', 'Введите корректный пароль');
        }
        this.setState({ errors });
        return !errors.size;
    }

    render() {
        return (
            <div className={this.props.className}>
                <div className="caption">Войти</div>
                <div className="caption-details">Добро пожаловать, рады видеть вас снова 👋</div>
                <div className="social-network-login">
                    <SocialNetworksLogin />
                </div>
                <div className="form-text">или</div>
                <div className="form-input">
                    <label>Email</label>
                    <input
                        className={this.state.errors?.has('email') ? 'error' : null}
                        type="text"
                        value={this.state.email}
                        placeholder="Email"
                        onChange={this.onChangeEmail}
                        disabled={this.state.running}
                    />
                </div>
                <div className="form-input">
                    <label>Password</label>
                    <input
                        className={this.state.errors?.has('password') ? 'error' : null}
                        type="password"
                        value={this.state.password}
                        placeholder="Пароль"
                        onChange={this.onChangePassword}
                        disabled={this.state.running}
                    />
                </div>
                {this.hasErrors() && (
                    <div className="form-error">
                        {this.getErrors()}
                    </div>
                )}
                <div className="form-submit">
                    <button
                        className={`${this.props.className}-submit`}
                        onClick={this.onSubmit}
                        disabled={this.state.running}
                    >
                        {this.state.running ? (
                            <>
                                <img src="images/loader.svg" />
                                <span>Отправка</span>
                            </>
                        ) : (
                            <span>Войти в аккаунт</span>
                        )}
                    </button>
                </div>
                <div className="form-question">
                    <a href="restore-password.html">Забыли пароль?</a>
                </div>
            </div>
        );
    }
}
