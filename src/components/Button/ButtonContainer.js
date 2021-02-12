import { bindActionCreators } from "redux";
import {
    removeAllCompleteTodos, removeAllTodos,
} from "../../redux/actions/actionTodo";
import { connect } from "react-redux";
import Button from "./Button";

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        removeAllCompleteTodos,
        removeAllTodos
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(Button);