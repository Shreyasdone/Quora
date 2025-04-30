# REST Post Management App

A simple RESTful web application for managing posts, built with Node.js, Express, and EJS.

## Features

- **View All Posts**: Displays a list of all posts with options to view, edit, or delete.
- **Create New Post**: Add a new post with a username and description.
- **Edit Post**: Update the description of an existing post.
- **Delete Post**: Remove a post from the list.
- **View Post Details**: See detailed information about a specific post.

## Technologies Used

- **Backend**: Node.js, Express
- **Frontend**: EJS templates, CSS
- **Middleware**: `method-override` for supporting PATCH and DELETE methods
- **UUID**: For generating unique IDs for posts

## File Structure

- `server.js`: Main server file with routes and logic.
- `views/`: Contains EJS templates for rendering pages.
  - `index.ejs`: Displays all posts.
  - `newpost.ejs`: Form for creating a new post.
  - `edit.ejs`: Form for editing a post.
  - `detail.ejs`: Displays detailed information about a post.
  - `includes/header.ejs`: Shared header for all pages.
- `public/style.css`: CSS for styling the application.

## How to Run

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd REST
   ```
