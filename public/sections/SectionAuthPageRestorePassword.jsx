class SectionAuthPageRestorePassword extends React.PureComponent {
    static propTypes = {
        email: PropTypes.string,
    };

    static defaultProps = {
        email: '',
    };

    render() {
        return (
            <div className="section-container">
                <div className="section-header">
                    <Logo />
                </div>
                <div className="section-body">
                    <FormRestorePassword
                        email={this.props.email}
                    />
                </div>
            </div>
        );
    }
}
