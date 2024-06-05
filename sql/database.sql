create database usuarios_random

create table users (
id serial primary key,
name varchar(50) not null,
lastname varchar(50) not null,
email varchar(50) not null unique,
password varchar(60) not null,
createAt timestamp with time zone default now()
);

select * from users