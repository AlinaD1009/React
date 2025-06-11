import { connect } from "react-redux"
import { plus } from '../store/actions/counter.action'


function Plus (props) {

    return(
        <>

            <h3>
                Plus
            </h3>
            <button onClick={props.plusNum}> + </button>
            <hr />
        </>
    )
}

const mapStateFromProps = (state) => ({ countField: state.count})

const mapDispatchToProps = (dispatch) => ({
    plusNum: () => dispatch(plus())
})

export default connect(mapStateFromProps, mapDispatchToProps)(Plus)