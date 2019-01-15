import actionCreator from '../../store/Type/actionCreator'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'

const GrouptypeContent = connect(state => state.typeContent,
        dispatch =>bindActionCreators(actionCreator,dispatch)
    )

    export default GrouptypeContent
