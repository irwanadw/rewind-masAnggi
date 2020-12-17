drop database if exists rewindnotes;
create database rewindnotes;
use rewindnotes;

create table rewindnotes(
  id char(21) primary key,
  note_name text not null,
  note_detail text not null
);