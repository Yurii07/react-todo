import { bindActionCreators } from "redux";
import { completeTodo, removeTodo, editTodo } from "../../redux/actions/actionTodo";
import { connect } from "react-redux";
import TodoItem from "./TodoItem";

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        removeTodo,
        completeTodo,
        editTodo
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(TodoItem);