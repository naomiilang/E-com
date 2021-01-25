INSERT INTO category (category_name)
VALUES 
    ('Shirts'),
    ('Shorts'),
    ('Music'),
    ('Hats'),
    ('Shoes');

INSERT INTO product (product_name, price, stock, category_id)
VALUES
    ('Plain T-shirt', 14.99, 14, 1),
    ('Cargo Shorts', 29.99, 22, 2),
    ('Top 40 Music Compilation Record', 12.99, 50, 3),
    ('Branded Baseball Hat', 22.99, 12, 4),
    ('Running Sneakers', 90.0, 25, 5);