import {connect} from 'react-redux'
import actionCreator from '../../store/template/actionCreator'
import { bindActionCreators } from 'redux'

const GroupTemplate = connect(state => state.templateDate,
        dispatch => bindActionCreators(actionCreator,dispatch)
    )

    export default GroupTemplate
