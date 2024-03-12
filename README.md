<h1 align="center">URL SHORTNER</h1>


## Overview

The URL shortener is a web application that allows users to shorten long URLs into shorter, more manageable links. It provides a simple and efficient way to share links while also tracking the number of visits to each shortened URL.

## Installation

- Clone the repository: git clone <repository-url>
- Navigate to the project directory: cd url-shortener
- Install backend dependencies: composer install
- Install frontend dependencies: npm install
- Create a copy of the .env.example file and rename it to .env
  (although .env push in github is not good practice, as a testing purpose i push it in github)
- Generate application key: php artisan key:generate
- Configure your database settings in the .env file
- Run migrations: php artisan migrate
- Start the development server: php artisan serve
- Compile frontend assets: npm run dev

## Usage

- Access the application in your web browser.
- Enter a long URL in the input field and click "Shorten".
- Copy the generated shortened URL and share it as needed.
- Use the shortened URL to redirect to the original long URL.

## Technologies Used

- Laravel
- MySql
- ReactJS
- Inertia
- Tailwind CSS





