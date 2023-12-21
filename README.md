Title:
MERN Stack Movie Database.

App Purpose:
The purpose of this app is to allow users to view, add, edit, and delete movies from a
MongoDB database. Once the app is running, the user will be shown a "Home" page. The Navigation bar
at the top of the page contains 3 different routes, "Home", "Movies", and "About". Once the user 
clicks on Movies they will be redirected to the Movies page where they are shown 6 movies by default, 
including the movie thumbnail and it's title, set by me. If they click on either the movies thumbnail
or title, they will be redirected to a page containing all of the selected movies contents, including
a large thumbnail, movie title, description, rating in stars, and genre. Above the movie thumbnail will
be a "Movies" button with and arrow icon. If clicked, the user will be redirected back to the Movies page.
Below the Movies thumbnail will be a "Edit" button with a pencil icon. If clicked, the user will be redirected
to a page allowing them to edit the selected movies data, such as title, slug (a human readable identifier, such as
id, but easier to remember), star rating (0-5), a description, and genres (seperated by a comma). They can also
opt to change the thumbnail if they wish to do so, by clicking on the "choose file" button beneath the thumbnail.
Once clicked, the user will have the option to add either a jpeg, gif, or png image from their device. Once the 
user is happy with their changes, they can click on the "ADD MOVIE" button beneath the data fields and the movie
will be appended to the database and the user can view their changes by going back to the "Movies" page and clicking
the movie that they've edited to see their changes. Going back to the "Edit Movie" page, there is a blue 
"delete movie" button above the movies thumbnail. If this is clicked, the selected movie will be deleted from 
the database and will no longer show up in the "Movies" page (THIS CANNOT BE UNDONE). On the "Movies" page there is
also a function that allows the user to filter the content of the page based on the genre they would like to view.
Below the "Add New Movie" button there is a Genres tag with a dropdown menu below. By default the genres is set to all,
however, once clicked the user will be shown all different genres of movie in the dropdown menu. If they make a 
selection, the only movies that will appear on the page is the ones that match the genre selected. i.e. If the user
selects "drama", the only movies that will show are those that contain "drama" in their genre field within the
database. I faced some challenges while developing this app, such as the ability to add a new movie. I spent nearly 
3 days trying to add a movie to the database with no luck. I had thought that I was just doing everything wrong until
I realised I had not added the "thumbnail" to the Movie Schema in the models folder. However, overall I thouroughly enjoyed
the development of this assignment. I learned so much about the MERN Stack, and pushed myself hard to come up with the
best application I could. Overall, I am very pleased with how this turned out. In the near future I may even add a TV shows
page.

How to Run the Project:
Download the source code from the git Repo. Assuming you have NPM installed you should be fine. Open the code in your
desired IDE (vsCode in my case) and locate the terminal. type "cd server" and once in the server folder type "npm run dev".
You should see "Server is running on Port: 8000". Once this is done you can open a new terminal and type "cd client" to 
direct you to the client folder. Now type "npm run" and you should see a prompt saying "local: http://localhost:5173/".
click on the link and it should redirect you to your app in your default browser. From here you are free to roam the app#
and check out all the features available.
