import React, { Component } from 'react';
import { Link } from 'react-router-dom';




  class HomePage extends Component {
      state = {
          items: [],
      };

     async  componentDidMount() {
         try {
             const response = await fetch(
                 `https://api.themoviedb.org/3/trending/all/day?api_key=b42fcc4cb047a9aa884c69051a0d1c53`
                 
             );
             console.log(response);
             const data = await response.json();
             this.setState({ items: data.results });
             console.log(data);
         } catch (error) { }
      }

      render() {
          return (
                  <>
                  <h1 className="titleTrending">Trending today</h1>
              <ul>
                  {this.state.items.map((item) => (
                      <li key={item.id}>
                          <Link className="itemList" to={`/movies/${item.id}`}>{item.title || item.name}</Link>
                      </li>
                  ))}
                  </ul>
                  </>
             
          );
     
          
          
      }
}

export default HomePage;

