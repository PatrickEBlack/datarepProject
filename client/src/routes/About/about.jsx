import React from "react";

const About = () => {
  return (
    <div>
      <h2>Movie Database App</h2>
      <h3>Created by G00410388 - Patrick Black</h3>
      <br></br>
      <p>
        This app works by storing data for movies in a MongoDB Database. The
        data is fetched by the server side of the app and displayed using the
        client side. The user has the ability to view current movies in the
        database, add new movies to the database, edit movies currently in the
        database, and delete movies currently in the database. This app was made
        using the MERN stack as requested. I encountered some problems while
        developing this app such as displaying images for new movies added by
        the user. I tried many fixes for this, but no matter what I did, the
        images would not be posted to the database. This meant that they could
        not be retrieved when the app tried to display them in the movies page.
      </p>
    </div>
  );
};

export default About;
