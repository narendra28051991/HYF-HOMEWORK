-- Get meals that has a price smaller than a specific price fx 90
SELECT 
    *
FROM
    meal
WHERE
    price < 350;

-- Get meals that still has available reservations
SELECT 
    meal.id,
    meal.title,
    meal.max_reservations,
    reservation.id AS reservation_id,
    reservation.number_of_guests
FROM
    meal
        LEFT JOIN
    reservation ON reservation.meal_id = meal.id
WHERE
    meal.max_reservations > (SELECT 
            SUM(number_of_guests)
        FROM
            reservation
        WHERE
            reservation.meal_id = meal.id)
ORDER BY meal.id;

-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT 
    *
FROM
    meal
WHERE
    title LIKE '%burger%';

-- Get meals that has been created between two dates
SELECT
  *
FROM
  meal
WHERE
  created_date > '2021-07-12'
  AND created_date < '2021-08-15';

-- Get only specific number of meals fx return only 5 meals
SELECT
  *
FROM
  meal
ORDER BY
  price
LIMIT
  5;

-- Get the meals that have good reviews
SELECT
  *
FROM
  meal
WHERE
  id IN (
    SELECT
      meal_id
    FROM
      review
    WHERE
      stars = 4
  );

-- Get reservations for a specific meal sorted by created_date
SELECT
  *
FROM
  reservation
WHERE
  meal_id IN (
    SELECT
      id
    FROM
      meal
    WHERE
      description = 'fried chicken'
  )
ORDER BY
  created_date;

-- Sort all meals by average number of stars in the reviews
SELECT
  meal.title,
  AVG(review.stars) as average_stars
FROM
  meal
  JOIN review ON meal.id = review.meal_id
GROUP BY
  meal.id
ORDER BY
  average_stars DESC;