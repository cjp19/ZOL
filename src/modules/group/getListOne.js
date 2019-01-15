import actionCreator from '../../store/Home-List1/actionCreator'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'

const GroupListOne = connect(state => state.listone,
        dispatch => bindActionCreators(actionCreator,dispatch)
    )

    export default GroupListOne
