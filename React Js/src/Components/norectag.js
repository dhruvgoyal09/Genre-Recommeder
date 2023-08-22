import sad from './sad.png'

function NoRecommendedTag(props){
    return (
        <div className = "norec_class">
            <div className = "yellow_black">
                <img className = "sad" src = {sad} alt = "BOT"/>
            </div>
            <div className = "norec_tag">
                No Recommendation!
            </div>
        </div>
    )
}

export default NoRecommendedTag;