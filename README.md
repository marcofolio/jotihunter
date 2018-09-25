# Jotihunter

![Jotihunter](_install/overview.jpg?raw=true "Jotihunter")

This tool has been created by [Marco Kuiper](https://marcofolio.net/) from [Scouting Aerendheem](http://aerendheem.nl/) for usage during the yearly [Jotihunt](https://jotihunt.net/). It works by using the [Jotihunt API 1.0](https://jotihunt.net/pagina/api).

# Tips
- Use `.htaccess` to protect this tool for being accessed by the public

# (Yearly) configuration
Search for `Configure value` and change the following files:
- `config.php`
- `js/index.js`
- `js/vm/groepen.js`
- `index.html`

- `car/index.html`
- `templates/info.html`

# Installation
- Make sure you did the configuration
- Create the tables by running `_install\CREATE.sql` on your database
- Upload all files to a server supporting PHP

# API usage
Adding / changing a car location. When the name exists, it'll get updated, otherwise it'll get created by using the following URL:
`YOURDOMAIN.COM/api/car.php?name=[NAME]&time=[TIME]&lat=[LAT]&lng=[LNG]`
Example:
`YOURDOMAIN.COM/api/car.php?name=marco&time=20:19:42&lat=51.99319&lng=5.92360`

Retrieval of last positions of the Fox teams:
`YOURDOMAIN.COM/api/fox.php`

Retrieval of last car locations:
`YOURDOMAIN.COM/api/cars.php`

# Reset game
Go to the *Info* page and enter these passwords to reset the game.
- `newgame` : Removal of all coordinates and hunts
- `clearall` : Removal of everything: coordinates, hunts, car positions

# Contribution
Feel free to send a Pull Request in order to make changes to the code.