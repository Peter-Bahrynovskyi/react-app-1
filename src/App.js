import './App.css';
const App = ({author, content, image, date}) => {  
  const { photo, name, nickname } = author;

  return (
        <div className="wrapper">
          <div className="top" >
            <div className="top_1">
            <p> <img src={photo} className="top-img"/></p>
            <p>{name}</p>
            <p className="nickname">{nickname}</p>
            <p className="date">{date}</p>
            </div>
            <div className="top_2">
            <p>{content}</p>
            </div>
          </div>
          <div className="center">
          <div> <img src={image} className="mid-img"/></div>
          </div>
          <div className="bottom">
          <i class="fas fa-thumbs-up"><span className="fa_text">37</span></i>
          <i class="fas fa-thumbs-down"><span className="fa_text">37</span></i>
          <i class="fas fa-star"><span className="fa_text">37</span></i>
          <i class="fas fa-comment-alt"><span className="fa_text">37</span></i>
          </div>
        </div>
    );
};
export default App;
