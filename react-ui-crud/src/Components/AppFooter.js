import React, { Fragment } from 'react';
class AppFooter extends React.Component {
    render() {
        return <Fragment>
            <hr className="featurette-divider" />
            <footer style={{ padding: "0 50px" }} className="navbar fixed-bottom">
                <p className="float-right"><a href="/">Back to the Top</a></p>
                <p style={{color:'white'}}>© 2020 VoodooChum Build <a href="/">Terms and Conditions</a></p>
            </footer>
        </Fragment>;
    }
}
export default AppFooter;