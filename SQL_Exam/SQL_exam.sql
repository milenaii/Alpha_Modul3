select ProductName, UnitPrice
from Northwind.dbo.Products
order by UnitPrice desc

select top 5 p.ProductName, s.CompanyName as [Supplier company name]
from Northwind.dbo.Products as p
join Northwind.dbo.Suppliers s on p.SupplierID = s.SupplierID
order by p.ProductName

select FirstName, LastName
from Northwind.dbo.Employees em
where 
(select Count(*)
from Northwind.dbo.Employees e
where e.ReportsTo = em.EmployeeID) > 2

select p.ProductName, p.UnitPrice, c.CategoryName
from Northwind.dbo.Products as p
join Northwind.dbo.Categories c on p.CategoryID = c.CategoryID
where p.UnitPrice = (select max(UnitPrice) from Northwind.dbo.Products where CategoryID = p.CategoryID)
order by p.UnitPrice

select top 1 s.CompanyName
from Northwind.dbo.Employees e
join Northwind.dbo.Orders o on e.EmployeeID = o.EmployeeID
join Northwind.dbo.Shippers s on s.ShipperID = o.ShipVia
group by s.CompanyName
order by count(*)



