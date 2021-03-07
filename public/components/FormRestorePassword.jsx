class FormRestorePassword extends React.PureComponent {
    static propTypes = {
        className: PropTypes.string,
        email: PropTypes.string,
    };

    static defaultProps = {
        className: 'block-login',
        email: '',
    };

    constructor(props) {
        super(props);

        this.state = {
            step: 'form',
            email: props.email,
            error: null,
            running: false,
        }

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeEmail(event) {
        this.setState({ email: event.target.value, error: null });
    }

    onSubmit() {
        if (!this.validate()) {
            return;
        }

        this.setState({ running: true });

        BackendHelper.restorePassword(this.state.email)
            .then((success) => {
                this.setState({ running: false });
                if (success) {
                    this.setState({ step: 'result' });
                } else {
                    this.setState({ error: 'Неверный еmail' });
                }

            });
    }

    validate() {
        let error = null;
        if (this.state.email.trim() === '') {
            error = 'Введите email';
        } else if (!ValidateHelper.validateEmail(this.state.email)) {
            error = 'Введите корректный email';
        }
        this.setState({ error });
        return !error;
    }

    renderForm() {
        return (
            <div className={`${this.props.className} wide`}>
                <div className="caption">
                    <img src="images/icon-lock.svg" />
                </div>
                <div className="caption-medium">
                    Восстановить пароль
                </div>
                <div className="caption-details">
                    Введите e-mail, на который регистрировались ранее
                </div>
                <div className="form-input">
                    <label>Email</label>
                    <input
                        className={`medium ${this.state.error ? 'error' : ''}`}
                        type="text"
                        value={this.state.email}
                        placeholder="Email"
                        onChange={this.onChangeEmail}
                        disabled={this.state.running}
                    />
                </div>
                {this.state.error && (
                    <div className="form-error">
                        {this.state.error}
                    </div>
                )}
                <div className="form-submit">
                    <button
                        className={`${this.props.className}-submit medium`}
                        onClick={this.onSubmit}
                        disabled={this.state.running}
                    >
                        {this.state.running ? (
                            <>
                                <img src="images/loader.svg" />
                                <span>Отправка</span>
                            </>
                        ) : (
                            <span>Отправить</span>
                        )}
                    </button>
                </div>
                <div className="form-question gray">
                    <span onClick={() => document.location = 'login.html'}>
                        Отменить
                    </span>
                </div>
            </div>
        );
    }

    renderResult() {
        return (
            <div className={`${this.props.className} wide`}>
                <div className="caption">
                    <img src="images/icon-mail.svg" />
                </div>
                <div className="caption-medium">
                    Письмо отправлено
                </div>
                <div className="caption-details">
                    На указанный вами e-mail было отправлено письмо для смены пароля
                </div>
                <div className="form-submit">
                    <button
                        className={`${this.props.className}-submit medium`}
                        onClick={() => document.location = 'login.html'}
                    >
                        <span>Вернуться на главную</span>
                    </button>
                </div>
            </div>
        );
    }

    render() {
        switch (this.state.step) {
            case 'result':
                return this.renderResult();
            case 'form':
            default:
                return this.renderForm();
        }
    }
}
