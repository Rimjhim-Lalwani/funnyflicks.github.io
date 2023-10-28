import './styles/Landing.css';
import eye from "./images/eye.gif"
function Landing(){
    return(
        <div className='landing'>
        <img src={eye} height="300px" width="300px" />
            <h1>
                Funny Flicks
            </h1>
            <p>
                Games, Anime and much more...
            </p>
        </div>
    )
}
export default Landing;