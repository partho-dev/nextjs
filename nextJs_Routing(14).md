## Next JS Routing

- We dont need to install any other packages to handle the routing
- NextJs 14 comes with inbuilt routing.
- The component written in `page.js` becomes the routing file
- It can not be any other name apart from `page.js`

- <img width="377" alt="next-js-routing" src="https://github.com/user-attachments/assets/d2a407e7-2142-4756-8e63-c865435a4ba1">

-  https://github.com/user-attachments/assets/5b7162a6-e588-4898-9e4e-79ae1f1ae3a3

- On the main page.js file, created these nav 
```
      <nav className="w-full bg-slate-700 flex justify-evenly p-3" > 
        <p className="cursor-pointer"> Home </p>
        <p className="cursor-pointer"> About  </p>
        <p className="cursor-pointer"> Products </p>
      </nav>
```

- I am able to access the products page by typing `http://localhost:3000/products` on the URL
- To enable the click and direct to respective route, uneed to use `<Link> </Link>` component from `nextjs`

```
      <nav className="w-full bg-slate-700 flex justify-evenly p-3" > 
      <Link href={"/"}>
        <p className="cursor-pointer"> Home </p>
      </Link>
      
      <Link href={"/about"}>
      <p className="cursor-pointer"> About  </p>
      </Link>
       
       <Link href={"/products"}>
       <p className="cursor-pointer"> Products </p>
       </Link>
      </nav>
```