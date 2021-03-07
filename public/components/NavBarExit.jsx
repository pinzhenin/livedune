class NavBarExit extends React.PureComponent {
    static propTypes = {
        className: PropTypes.string,
    };

    static defaultProps = {
        className: 'section-header-navbar-exit'
    };

    render() {
        return (
            <div className={this.props.className}>
                <a href="login.html">Выход</a>
            </div>
        );
    }
}
