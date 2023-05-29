const Layout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>Lale</title>
        <link
          rel="icon"
          href="https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg"
        />
      </head>

      <body>
        <header>Header</header>
        {children}
        <footer>Footer</footer>
      </body>
    </html>
  );
};

export default Layout;
