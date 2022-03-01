import React from "react";
import './Detail.css';

class Detail extends React.Component{
    componentDidMount(){
        const { location, history} = this.props;
        if (location.state === undefined){
            history.push('/');
        }
    }

    render(){
        const { location } = this.props;
        if(location.state){
            return <ul>
                        <span className="span1">영화제목: {location.state.title}</span><br/>
                        <span className="span2">영화개봉년도: {location.state.year}</span><br/>
                        <span className="span3">영화장르: {location.state.genres}</span>
                  </ul>
        }else{
            return null;
        }
    }
}

export default Detail;