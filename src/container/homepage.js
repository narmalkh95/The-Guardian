import HomePage from "../components/HomePage";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {SAVE_NEW_ARTICLES, SAVE_HIGHLIGHTED_ARTICLES, PAGE_UP, NEW_DATE, WATCHED, WATCH_LATER} from "../actions/HomePage";

  function mapDispatchToProps(dispatch) {
    return bindActionCreators({ 
      SAVE_NEW_ARTICLES,
      PAGE_UP,
      SAVE_HIGHLIGHTED_ARTICLES,
      NEW_DATE,
      WATCHED,
      WATCH_LATER
    }, dispatch)
  }
  
  function mapStateToProps(state) {
    return { state: state.HomePage }
  }



  export default connect(mapStateToProps, mapDispatchToProps)(HomePage);