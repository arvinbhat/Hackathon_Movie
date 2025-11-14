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


[
  {
    "movie_title": "Inception",
    "category_id": 1,
    "movie_details": "A thief who enters the dreams of others to steal secrets from their subconscious.",
    "movie_image": "inception.jpg"
  },
  {
    "movie_title": "The Dark Knight",
    "category_id": 1,
    "movie_details": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    "movie_image": "dark_knight.jpg"
  },
  {
    "movie_title": "Interstellar",
    "category_id": 3,
    "movie_details": "A team of explorers travel through a wormhole in space in an attempt to ensure humanitys survival.",
    "movie_image": "interstellar.jpg"
  },
  {
    "movie_title": "Pulp Fiction",
    "category_id": 2,
    "movie_details": "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    "movie_image": "pulp_fiction.jpg"
  },
  {
    "movie_title": "The Matrix",
    "category_id": 1,
    "movie_details": "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the world he knows is a digital deception.",
    "movie_image": "the_matrix.jpg"
  },
  {
    "movie_title": "Avatar",
    "category_id": 3,
    "movie_details": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "movie_image": "avatar.jpg"
  },
  {
    "movie_title": "Titanic",
    "category_id": 2,
    "movie_details": "A seventeen-year-old aristocrat falls in love with a kind, poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
    "movie_image": "titanic.jpg"
  },
  {
    "movie_title": "The Shawshank Redemption",
    "category_id": 2,
    "movie_details": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    "movie_image": "shawshank.jpg"
  },
  {
    "movie_title": "Jurassic Park",
    "category_id": 3,
    "movie_details": "A pragmatic paleontologist touring an almost complete theme park on an island in Central America is tasked with protecting a couple of kids after a power failure causes the park''s cloned dinosaurs to run loose.",
    "movie_image": "jurassic_park.jpg"
  },
  {
    "movie_title": "Finding Nemo",
    "category_id": 4,
    "movie_details": "After his son is captured in the Great Barrier Reef and taken to Sydney, a timid clownfish sets out on a journey to bring him home.",
    "movie_image": "finding_nemo.jpg"
  }
]
