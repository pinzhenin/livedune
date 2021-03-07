class NavBar extends React.PureComponent {
    static propTypes = {
        className: PropTypes.string,
    };

    static defaultProps = {
        className: 'section-header-navbar'
    };

    render() {
        return (
            <div className={this.props.className}>
                {this.props.children}
            </div>
        );
    }
}
