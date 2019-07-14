import {bindActionCreators} from "redux";
import {WATCH_LATER} from "../actions/HomePage";
import {connect} from "react-redux";
import ArticleDetails from "../components/ArticleDetails"


const mapDispatchToProps = dispatch => bindActionCreators(
    {
        WATCH_LATER
    }, dispatch)

const mapStateToProps = state => state.HomePage
  
export default connect(mapStateToProps, mapDispatchToProps)(ArticleDetails);