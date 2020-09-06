##      Memento SQL

###     Basics 

SELECT  *   
        column_name, another, column    
        COUNT(\*) FROM table_name *count entrie's number of the table*  
        CONCAT((column_one, ' a text too concatenate ' , column_two, 'another text')) FROM table_name *create concatenated string*

FROM    table_name

WHERE   colone_name LIKE 'what_I_search'    
        column name LIKE 'what%'    
        column_name LIKE '%search'  
        column_name LIKE '%I_sea%   
        column_name < > <= >= =     

ASC / DESC  

LIMIT 0,1  *0 = starting point, 1 = number of rows to keep* 

INSERT INTO table_name (column_one, column_two, ...) VALUES (value_column_one, value_column_two, ...)

UPDATE table_name 
SET column_name = 'new_column_name_value'
WHERE column_name < > <= >= 'value' 
optionnal: AND / OR column_name < > <= >= 'value'

DELETE FROM table_name
WHERE column_name < > <= >= 'value'
optionnal: AND / OR column_name < > <= >= 'value'