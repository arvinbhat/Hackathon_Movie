DROP DATABASE IF EXISTS movies_db;
create database movies_db;
use movies_db;


create table users(
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    firstName varchar(20),
    lastName varchar(20),
    email varchar(50),
    password varchar(100),
    phoneNumber varchar(15),
    isDeleted BOOLEAN default FALSE,
    createdTimestamp DATETIME default CURRENT_TIMESTAMP
);

create table category (
    category_id int PRIMARY KEY AUTO_INCREMENT,
    title varchar(20),
    details varchar(1000),
    image varchar(200),
    createdTimestamp DATETIME default CURRENT_TIMESTAMP
);

create table movies (
    movie_id INT PRIMARY KEY AUTO_INCREMENT,
    movie_title varchar(100),
    category_id int,
    movie_details varchar(1000),
    movie_image varchar(100),
    createdTimestamp DATETIME default CURRENT_TIMESTAMP,
    constraint fk_cat_id foreign key(category_id) references category(category_id)
);


create table reviews(
    review_id int PRIMARY KEY AUTO_INCREMENT,
    movie_id int,
    review varchar(500),
    rating int,
    user_id int,
    modified DATETIME default CURRENT_TIMESTAMP,
    constraint fk_user_id FOREIGN KEY (user_id) references users(user_id),
    constraint fk_movie_id FOREIGN KEY (movie_id) references movies(movie_id)
);