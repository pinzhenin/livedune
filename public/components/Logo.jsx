class Logo extends React.PureComponent {
    static propTypes = {
        className: PropTypes.string
    };

    static defaultProps = {
        className: 'site-logo'
    };

    render() {
        return (
            <div className={this.props.className}>
                LIVEDUNE
            </div>
        );
    }
}
