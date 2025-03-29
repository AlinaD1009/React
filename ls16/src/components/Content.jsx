import { connect } from "react-redux"


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
const mapStatetoProps = (state) => ({ count: state.count})

export default connect(mapStatetoProps, null)(Content)