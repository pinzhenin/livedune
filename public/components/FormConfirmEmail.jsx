class FormConfirmEmail extends React.PureComponent {
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

    render() {
        return (
            <div className={`${this.props.className} wide`}>
                <div className="caption">Подтвердите ваш e-mail</div>
                <div className="caption-details">
                    {StringHelper.ucfirst(this.props.name)}, на ваш e-mail отправлено письмо со ссылкой для подтверждения.
                    Перейдите по ней, чтобы активировать вашу учетную запись и получить 7 дней бесплатного доступа.
                </div>
                <div className="form-submit">
                    <button
                        className={`${this.props.className}-submit medium`}
                        onClick={() => this.props.callback({ success: true })}
                    >
                        <span>Перейти к почте</span>
                    </button>
                </div>
                <div className="form-question">
                    <a href="#" onClick={() => this.props.callback({ success: false })}>
                        Мне не пришло письмо
                    </a>
                </div>
            </div>
        );
    }
}
