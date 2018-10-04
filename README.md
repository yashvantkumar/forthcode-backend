# forthcode-backend
Sorting movie titles

# Steps to execute

1. Clone the repository
2. Install all the dependencies using 'npm i'
3. Exexute in the following way 
  <br>-node index.js <movie_name> <br>-node index.js <movie_name> <page_number>

# Explanation

I have used request library of NodeJS to make the HTTP calls to the given API.

Using process.argv which is attached to the program in run time, I am fetching values of movie name and page number from command line and making request to the given API.

Once the response is received callback executes and necessary validations are made. Using the validated data I'm mapping the titles in a separate array and using sort method of array sorting the entire titles array.
