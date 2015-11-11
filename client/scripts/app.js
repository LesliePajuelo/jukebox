// Your ReactJS code here
// search box, results, playlist

SC.initialize({
client_id: 'c83ae0c3e8e136718f6d9a66049ff9db'
});




var App = React.createClass({

 render: function(){
  return(<div>
    <h1>App</h1>
  </div>)
 }

})


var trackArray = [];
var songs =[];

var SearchBox = React.createClass({

getInitialState: function(){
        return {
            songs:[]
        }
    },

  handleChange: function(e){
    this.setState({
      value: e.target.value
    });
  },

  handleSubmit : function(event){
    event.preventDefault();

  console.log(this.state.value);
  var self = this;
  var handled = SC.get('/tracks', {
      q: this.state.value
      }).then(function(tracks){
        console.log("PROMISE")
      
        tracks.forEach(function(track){
          //console.log(track.title);
          trackArray.push(track.title)

        });

      
        console.log(trackArray);
      self.setState({songs: trackArray}
      );
      })
       



  },

  render: function(){
    songs = [];
    for(var i =0; i < trackArray.length; i++){
      songs.push(<li> {this.state.songs[i]} </li>);
    }

    return (
      <div className="searchBox" className ='form-group'>
      <form className="searchForm" onSubmit={this.handleSubmit}>
        <input type="text" placeholder='Search for your jam' value={this.state.value} onChange={this.handleChange} />
        <input type="submit" value="Search"/>
      </form>
  
    <ul>{songs}</ul>
  
    </div>)

  }
});

React.render(
  <SearchBox />,
  document.getElementById('jukebox')
  );





