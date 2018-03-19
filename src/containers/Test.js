import React from 'react';
//props에 router정보를넣어줌
// import { withRouter } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import { 
    testRequest,
} from '../actions/test'

const styles = theme =>  ({
    root: {
        flexGrow: 1,
        position: 'absolute',
        top: '40%',
        left: '40%',
        width: '200px',
        display: 'flex',
        alignItems: 'center',
    },
    root2: {
        position: 'absolute',
        top: '30%',
        left: '40%',
        width: '200px',
        display: 'flex',
        alignItems: 'center',
    },
});

class Test extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.handelOnTestBtn = this.handelOnTestBtn.bind(this);
    }

    handelOnTestBtn(Msg) {
        Msg = "hi server"
        return this.props.testRequest( Msg ).then(
            () => {
                if(this.props.test.status === "SUCCESS") {
                    console.log("test.status", this.props.test);
                }
            }
        );
    }

    render() {
        const { classes, test } = this.props;
        
        return (
            <div>
                <div className={classes.root2}>
                    {test.Message !== '' ? "server message: " + test.Message : null}
                </div>
                <div className={classes.root} > 
                <a className="waves-effect waves-light btn" onClick={this.handelOnTestBtn}>TestBtn</a>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        test: state.test
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
         testRequest: (Msg) => {
            return dispatch(testRequest(Msg));
         },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(Test));
