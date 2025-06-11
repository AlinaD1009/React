import { connect } from "react-redux"
import { minus } from '../store/actions/counter.action'

export function Minus ({minusNum}) {
    console.log(minusNum);
    
    return(
        <>
            <hr />
            <h3>
                Minus
            </h3>
            <button onClick={minusNum}> - </button>

        </>
    )
}
const mapDispatchToProps = (dispatch) => ({
    minusNum: () => dispatch(minus())
})
export default connect(null, mapDispatchToProps )(Minus)