class FormResendEmail extends React.PureComponent {
    static propTypes = {
        className: PropTypes.string,
        name: PropTypes.string,
        email: PropTypes.string,
        callback: PropTypes.func.isRequired,
    };

    static defaultProps = {
        className: 'block-login',
        name: 'Username',
        email: '',
    };

    constructor(props) {
        super(props);

        this.state = {
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

        BackendHelper.resendEmail(this.state.email)
            .then((success) => {
                this.setState({ running: false });
                this.props.callback({ success });
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

    render() {
        return (
            <div className={`${this.props.className} wide`}>
                <div className="caption">Мне не пришло письмо</div>
                <div className="caption-details">
                    Письмо может прийти с задержкой в 5-10 минут.<br /> Также проверьте разные папки почтового ящика
                    (актуально для gmail.com) и папку "Спам". Если письмо все же не пришло, повторите попытку или
                    напишите об этом в тех.поддержку
                    &nbsp;<a className="form-question" href="mailto:support@livedune.ru">support@livedune.ru</a>&nbsp;
                    и мы активируем ваш аккаунт.
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
                                <img src="/images/loader.svg" />
                                <span>Отправка</span>
                            </>
                        ) : (
                            <span>Отправить заново</span>
                        )}
                    </button>
                </div>
                <div className="form-question gray">
                    <span onClick={() => this.props.callback({ success: false })}>
                        Отменить
                    </span>
                </div>
            </div>
        );
    }
}
