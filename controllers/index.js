displayName = (req, res) => {
    const names = {
        "contact" : {
            "fistName": "David",
            "LastName": "Peña",
            "email": "daf_171@hotmail.com",
            "favoriteColor": "Red",
            "birthday": "17/10/1988"
        },
        "contact2" : {
            "fistName": "Azahara",
            "LastName": "Soler",
            "email": "daf_171@hotmail.com",
            "favoriteColor": "Pink",
            "birthday": "30/12/1991"
        },
        "contact3" : {
            "fistName": "Jenny",
            "LastName": "Andrade",
            "email": "daf_171@hotmail.com",
            "favoriteColor": "Green",
            "birthday": "27/02/1966"
        }
    }
    ;
    res.status(200).send(names);
};

module.exports = {
    displayName,
  };