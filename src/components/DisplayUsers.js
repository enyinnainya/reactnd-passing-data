import React, {Component} from 'react';
import '../DisplayUsers.css';

class DisplayUsers extends Component{
  
 	render(){
      
     	return (
          	<ul className="user-list">
          		{console.log(this.props)}
  				{this.props.profiles.map((profile)=>{
                  	let user_name=this.props.users[profile.userID].name;
					let favorite_movie=this.props.movies[profile.favoriteMovieID].name;
					
					return (
                    	<li className="user-list-item"  key={profile.id}>
						<p> {user_name}'s favorite movie is {favorite_movie}.</p>
						</li>
                    );
				
                })
				}
  				
          	</ul>
          );
    }
  
}


export default DisplayUsers;