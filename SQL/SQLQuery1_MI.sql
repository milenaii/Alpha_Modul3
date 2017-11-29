SELECT * FROM Departments 

SELECT Name FROM Departments d

SELECT Salary  FROM Employees 

SELECT FirstName + ' ' + LastName 
	AS [FullName]
	FROM Employees
	
SELECT FirstName + '.' + LastName + '@telerik.com' 
	AS [Full Email Addresses]	
	FROM Employees 

SELECT  DISTINCT Salary FROM Employees

SELECT * FROM Employees e 
	WHERE e.JobTitle = 'Sales Representative' 

SELECT FirstName FROM Employees e
	WHERE e.FirstName LIKE 'SA%'

SELECT LastName FROM Employees e
 WHERE e.LastName LIKE '_ei_'

 SELECT salary FROM  Employees e
	WHERE salary BETWEEN 20000 AND 30000

	 		
SELECT salary FROM Employees e
	WHERE e.Salary In (25000, 14000,12500, 23600)		 
	
SELECT e.ManagerID FROM Employees e
	WHERE e.ManagerID IS null

SELECT salary FROM Employees e
	WHERE e.salary > 50000  
	ORDER BY e.salary desc

SELECT TOP 5 salary FROM employees 
	ORDER BY salary desc
	 
SELECT e.firstname + ' '+  e.LastName AS [fullName], a.AddressText FROM Employees e
	JOIN Addresses a 
	ON e.AddressID = a.AddressID

SELECT	e.firstName, a.AddressText 
	FROM Employees e, Addresses a
	WHERE e.AddressID = a.AddressID 
	
SELECT e.FirstName, m.FirstName
	 FROM Employees e  
	 JOIN Employees m
	 ON e.ManagerID = m.EmployeeID

SELECT e.FirstName + ' ' + e.LastName AS[Employee], 
	m.FirstName + ' '+ m.LastName AS [Manager]
	FROM Employees e
	INNER JOIN  Employees m
	ON e.ManagerID = m.EmployeeID

SELECT e.firstName, 
	 m.firstName  AS [Manager],
	 a.AddressText
	FROM Employees e
	JOIN Employees m
	ON m.EmployeeID = e.ManagerID
	JOIN Addresses a 
	ON e.AddressID = a.AddressID 
	 
	 