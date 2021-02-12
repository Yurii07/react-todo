import { bindActionCreators } from "redux";
import {
    addTask,
    changeFilter,

} from "../../redux/actions/actionTodo";
import { connect } from "react-redux";
import { Todo } from "./index";
import { darkModeAction } from "../../redux/actions/actionDarkMode";

function mapStateToProps(state) {
    return {
        tasks: state.tasks,
        filters: state.filters,
        config: state.config
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        addTask,
        changeFilter,
        darkModeAction,

    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);