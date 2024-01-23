# Using SQL with GraphQL:

## Use of an ORM (Object-Relational Mapping)
- An ORM is a programming technique used to convert data between incompatible type systems in OOP languages. It's a tool that lets you interact with a database using your programming language's objects instead of SQL queries.<br><br>
<b>Should an ORM be used with GraphQL & SQL?</b>
- Complexity of the Application: If your application has complex database operations or involves multiple tables with relationships, an ORM can simplify these interactions. It abstracts the complex SQL queries into simpler object-oriented code.

- Development Speed: ORMs can speed up the development process by automating the creation of database queries. This can be particularly useful in the early stages of a project or when rapid prototyping.

- Database Changes: If you anticipate frequent changes to the database schema, an ORM can make it easier to manage these changes, as you wouldn't need to rewrite raw SQL queries.

- Performance Considerations: For high-performance applications, using raw SQL queries can be more efficient than using an ORM, as ORMs add an additional layer of abstraction which can sometimes lead to less optimized queries.

- Learning Curve and Team Expertise: If your team is more comfortable with SQL or if the ORM has a steep learning curve, it might be more efficient to stick with raw SQL queries.

- Integration with GraphQL: Some ORMs work seamlessly with GraphQL, providing features like automatic generation of GraphQL schemas based on your database models. This can significantly reduce the amount of boilerplate code you need to write.

- The Apollo Auth tutorial used Sequelize, which is a popular ORM for Node.js. Sequelize abstracts database interactions and allows you to work with JavaScript objects instead of writing raw SQL queries.

Source of Questioning this:
[Reddit Thread](https://www.reddit.com/r/graphql/comments/ez6x5h/graphql_and_sql_do_i_need_an_orm/)

## 
