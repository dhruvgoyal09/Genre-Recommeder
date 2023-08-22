import { useLocation , Link } from "react-router-dom";

function RecommendedTag(){
    const location = useLocation();

    return (
        <div className = {location.state.data.Recommended}>
            <div className = "suggested_tag">
                SUGGESTED TAG
            </div>
            <div className = "rec_tag">
                {location.state.data.Recommended}
            </div>

            <Link to = "/movielist" class = "showlist" state = {{genre : location.state.data.Recommended}}>
                Recommended Movies &rarr;
            </Link>
        </div>
    )
}

export default RecommendedTag;