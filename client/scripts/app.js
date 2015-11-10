// Your ReactJS code here
// search box, results, playlist

SC.initialize({
client_id: 'c83ae0c3e8e136718f6d9a66049ff9db'
});

var trackArray = ["song"];
var SearchBox = React.createClass({


getInitialState: function(){
        return {
            songs:[]
        }
    },
//HERA
//search input to q: works!
  handleChange: function(e){
    this.setState({
      value:e.target.value
    });
  },

  handleSubmit : function(){
  console.log(this.state.value);

      SC.get('/tracks', {
      q: this.state.value
      }).then(function(tracks){
        console.log("PROMISE")
      
        tracks.forEach(function(track){
          trackArray.push(track)
        });
      alert("boo "+trackArray[0].title);

      this.setState(function(){
      return {songs: trackArray[0].title}
      });

      console.log(trackArray);
      })//then



  },

  render: function(){
    return (
      <div className="searchBox" className ='form-group'>
      <form className="searchForm" onSubmit={this.handleSubmit}> //HERA!
        <input type="text" placeholder='Search for your jam' value={this.state.value} onChange={this.handleChange} />
        <input type="submit" value="Search"/>
      </form>
    </div>)
  }
});

React.render(
  <SearchBox />,
  document.getElementById('jukebox')
  );

var Results = React.createClass({

  getResults: function(){
    console.log('getResults');

  // });
  },

  render: function(){
    return (<p>{trackArray}</p>)
}

})

React.render(
  <Results />,
  document.getElementById('results')
  );
// var Tracker = React.createClass({
  
//   render:function(){
//     return(
//       <div class="title">{this.props.track.title}</div>
//       )
//   }
// })
  
// var Playlist = React.createClass({

// })