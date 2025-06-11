import { connect } from "react-redux"
import { minus } from "../store/actions/counter.action"

export function Content ({count}){

    return(
        <>
            <hr />
                <h3>
                    Content
                </h3>
                <div>
                    { count }
                </div>
            <hr />
        </>
    )
}
const mapStatetoProps = (state) => ({ count: state.count.count})

export default connect(mapStatetoProps, null)(Content)