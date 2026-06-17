CREATE SCHEMA petstore;

CREATE TABLE petstore.animals (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title character varying NOT NULL,
  description text,
  photo bytea,
  CONSTRAINT animals_title_key UNIQUE (title)
);

CREATE INDEX animals_uniqu_idx ON petstore.animals (title);

CREATE INDEX animals_complex_idx ON petstore.animals (title, description);
