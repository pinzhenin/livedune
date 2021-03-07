class NavBarAuth extends React.PureComponent {
    static propTypes = {
        className: PropTypes.string,
        labelText: PropTypes.string.isRequired,
        buttonText: PropTypes.string.isRequired,
        buttonHref: PropTypes.string.isRequired,
    };

    static defaultProps = {
        className: 'section-header-navbar-auth'
    };

    render() {
        return (
            <div className={this.props.className}>
                <label>
                    {this.props.labelText}
                </label>
                <button onClick={() => (document.location = this.props.buttonHref)}>
                    {this.props.buttonText}
                </button>
            </div>
        );
    }
}
