import './styles/manga.css';
import one from "./images/1.jpeg";
import two from "./images/2.jpeg";
import three from "./images/3.jpeg";
import four from "./images/4.jpeg";
import strip from "./images/strip.png";
import i from "./images/i1.png"
function Manga(){
    return(
        <div>
            <img src={strip} className='image'/>
             <div className="heading">
            Watch Animes<div className='imagei'>
        <img src={i} height="300px" width="300px"  />
        </div>
            </div>
            <div className="line">
                <hr/>
                </div>
      
        <div className="gallery-container">
            <div className='gallery-item1'>
                <div className="gallery-item" >
                <img src={one} />
                <div className="b"><h2>Demon Slayer</h2>
                <p>
                Demon Slayer: Kimetsu no Yaiba is a Japanese manga series written and illustrated by Koyoharu Gotouge. It was serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump from February 2016 to May 2020, with its chapters collected in 23 tankōbon volumes </p><a href="https://aniwave.to/watch/demon-slayer-kimetsu-no-yaiba-siblings-bond.o1mj/ep-1">Watch</a></div>
              
            </div>
            {/* <button>Add To Library</button> */}
            </div>
            
            <div className='gallery-item1'>
                <div className="gallery-item" >
                <img src={two} />
                <div className="b"><h2>One Piece</h2><p>
                One Piece is a Japanese manga series written and illustrated by Eiichiro Oda. It has been serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump since July 1997, with its individual chapters compiled into 106 tankōbon volumes as of July 2023 </p><a href="https://aniwave.to/watch/one-piece.ov8/ep-1">Watch</a></div>
          
            </div>
            {/* <button>Add To Library</button> */}
            </div>
            <div className='gallery-item1'>
                <div className="gallery-item" >
                <img src={three} />
                <div className="b"><h2>Naruto</h2><p>
                Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village.</p><a href="https://aniwave.to/watch/naruto.xx8z/ep-1">Watch</a></div>
                
            </div>
            {/* <button>Add To Library</button> */}
            </div>
            <div className='gallery-item1'>
                <div className="gallery-item" >
                <img src={four} />
                <div className="b"><h2>Jujutsu Kaisen</h2><p>
                Jujutsu Kaisen is a Japanese manga series written and illustrated by Gege Akutami. It has been serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump since March 2018, with its chapters collected and published in 24 tankōbon volumes as of October 2023</p><a href="https://aniwave.to/watch/jujutsu-kaisen.32n8/ep-1">Watch</a></div>
                
            </div>
            {/* <button>Add To Library</button> */}
            </div>
            
        </div>
        
       
        </div>
       
    )
}
export default Manga;