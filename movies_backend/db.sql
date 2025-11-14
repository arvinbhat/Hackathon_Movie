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

CREATE TABLE shares (
    share_id INT PRIMARY KEY AUTO_INCREMENT,
    review_id INT,
    user_id INT,
    CONSTRAINT fk_review_id FOREIGN KEY (review_id) 
        REFERENCES reviews(review_id) 
        ON DELETE CASCADE,
    CONSTRAINT fk_users_id FOREIGN KEY (user_id) 
        REFERENCES users(user_id)
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


INSERT INTO category (title, details, image)
VALUES
('Action', 'High-energy films focusing on physical feats, combat, and dynamic chase sequences.', 'action.jpg'),
('Drama', 'Serious, realistic films that focus on depth of character, emotion, and interpersonal conflict.', 'drama.jpg'),
('Adventure', 'Exciting stories featuring travel, exploration, quests, and risk-taking.', 'adventure.jpg'),
('Animation', 'Films using animated images rather than live actors, often targeting family audiences.', 'animation.jpg');
