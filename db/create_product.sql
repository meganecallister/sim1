INSERT INTO Products
(ProductId, ProductName, ProductPrice, ImageUrl)
VALUES (ceil(random() * 10), $1, $2, $3);