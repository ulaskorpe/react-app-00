import React, { Component } from "react";
import SeriesList from "../../components/SeriesList";
import Loader from "../../components/Loader";
import Intro from "../../components/Intro";
class Series extends Component {


    state ={
        series: [ ],
        seriesName : '',
        isFetching : false
      }
      
      
      componentDidMount(){
        // const series = ["vikings","gameofthrones"];
        // setTimeout(() => {
        //    // this.setState({series:series})
        //     this.setState({series})
        // }, 2000);
      
        //fetch('https://api.tvmaze.com/singlesearch/shows?q=Vikings').then((response)=>{ console.log(response)});
        // fetch('https://api.tvmaze.com/search/shows?q=Vikings')
        // .then( response => response.json() )
        // //.then( json =>  console.log(json) )
        // .then(json => this.setState({ series: json })  );
        
      }

      onSeriesInputChange = e =>{
        this.setState({seriesName: e.target.value , isFetching: true})
        fetch(`https://api.tvmaze.com/search/shows?q=${e.target.value}`)
        .then( response => response.json() )
        //.then( json =>  console.log(json) )
        .then(json => this.setState({ series: json, isFetching:false })  );
            //console.log(e);
           // console.log(e.target.value);

      }

    render() {
        const {series,seriesName,isFetching }  = this.state ;

        return (
            <div> 
               the length of series : {this.state.series.length}

               <Intro msg="king ragnar"/>
            <div>
            <input type="text" value={seriesName} onChange={this.onSeriesInputChange} />
            </div>
            { 
            !isFetching && series.length === 0 && seriesName.trim() === '' 
            && 
                <p>Plz enter name</p>
            }

            { 
             !isFetching && series.length === 0 && seriesName.trim() !== '' 
            && 
                <p>Nothing found</p>
            }

            {
            isFetching &&  <Loader/>
            }

            {
            !isFetching && <SeriesList list= {this.state.series}/>
            }
            
            </div>
            
            )
    }
}

export default Series;