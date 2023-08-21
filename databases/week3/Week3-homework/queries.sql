/* Meals */
-- Get all meals
SELECT 
    *
FROM
    meal;

-- Get a meal with any id, fx 1
SELECT 
    *
FROM
    meal
WHERE
    id = 6;

-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE meal 
SET 
    `title` = 'KFC fried chicken',
    `price` = 35
WHERE
    id = 6;

-- Delete a meal with any id, fx 1
DELETE FROM meal 
WHERE
    id = 6;

/* Reservations */
-- Get all reservations
SELECT 
    *
FROM
    reservation;

-- Get a reservation with any id, fx 1
SELECT 
    *
FROM
    reservation
WHERE
    id = 4;

-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE reservation 
SET 
    `number_of_guests` = 7,
    `contact_name` = 'Ninja',
    `contact_email` = 'ninja@dk.com'
WHERE
    id = 3;

-- Delete a reservation with any id, fx 1
DELETE FROM reservation 
WHERE
    id = 5;

/* Reviews */
-- Get all reviews
SELECT
    *
FROM
    review;

-- Get a Review with any id, fx 1
SELECT 
    *
FROM
    review
WHERE
    id = 4;

-- Update a Review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE review 
SET 
    `title` = 'super',
    `stars` = 5
WHERE
    id = 3;

-- Delete a Review with any id, fx 1
DELETE FROM review 
WHERE
    id = 5;