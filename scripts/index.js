let Movie = [
    { name: "Pushpa", image_url: "https://daddymoviez.xyz/wp-content/uploads/2022/01/pushpa-200x300.png", releasing_year: 2022, rating: 4.6 },
    { name: "RRR", image_url: "https://daddymoviez.xyz/wp-content/uploads/2022/05/Screenshot_1-200x300.png", releasing_year: 2022, rating: 4.7 },
    { name: "KGF Chapter 2", image_url: "https://daddymoviez.xyz/wp-content/uploads/2022/04/Screenshot_8-200x300.png", releasing_year: 2022, rating: 4.6 },
    { name: "Pati Patni or Woh", image_url: "https://daddymoviez.xyz/wp-content/uploads/2020/04/Download-Pati-Patni-Aur-Woh-2019-Hindi-Movie-200x300.jpg", releasing_year: 2022, rating: 4.4 },
    { name: "Jugjugg Jiyo", image_url: "https://daddymoviez.xyz/wp-content/uploads/2022/06/Screenshot_1-9-200x300.png", releasing_year: 2022, rating: 4.2 },
    { name: "Anek", image_url: "https://daddymoviez.xyz/wp-content/uploads/2022/06/Screenshot_15-1-200x300.png", releasing_year: 2022, rating: 4.5 },
    { name: "Attack", image_url: "https://daddymoviez.xyz/wp-content/uploads/2022/05/Screenshot_2-2-200x300.png", releasing_year: 2022, rating: 4.0 },
    { name: "Jayeshbhai Jordaar", image_url: "https://daddymoviez.xyz/wp-content/uploads/2022/05/jayesh-200x300.jpg", releasing_year: 2022, rating: 4.4 },
    { name: "Veere Di Wedding", image_url: "https://daddymoviez.xyz/wp-content/uploads/2020/05/Download-Veere-Di-Wedding-2018-Hindi-Movie-Bluray-200x300.jpg", releasing_year: 2018, rating: 4.0 },
    { name: "Hello Charlie", image_url: "https://daddymoviez.xyz/wp-content/uploads/2021/04/Download-Hello-Charlie-2021-Hindi-Movie-Web-DL-Custom-200x300.png", releasing_year: 2021, rating: 4.2 },
    { name: "Dhamaal", image_url: "https://daddymoviez.xyz/wp-content/uploads/2020/05/Download-Dhamaal-2007-Hindi-Movie-Bluray-200x300.jpg", releasing_year: 2011, rating: 4.5 },
    { name: "Chennai Express", image_url: "https://daddymoviez.xyz/wp-content/uploads/2021/04/Download-Chennai-Express-2013-Hindi-Movie-Bluray-200x300.png", releasing_year: 2013, rating: 4.5 },
    { name: "Coolie No. 1", image_url: "https://daddymoviez.xyz/wp-content/uploads/2020/12/Download-Coolie-No.-1-2020-Hindi-Movie-WEB-DL-200x300.jpg", releasing_year: 2020, rating: 4.3 },
    { name: "Dabangg", image_url: "https://i.pinimg.com/236x/c5/42/13/c5421357356e7ba2ebe9e4101452b929--salman-khan-bollywood-posters.jpg", releasing_year: 2010, rating: 4.6 },
    { name: "KGF Chapter 1", image_url: "https://themoviesflix.ac/wp-content/uploads/2020/08/Download-KGF-Chapter-1-2018-Hindi-Movie-Bluray-200x300-1.jpg", releasing_year: 2018, rating: 4.5 },
    { name: "Deadpool 2", image_url: "https://themoviesverse.co/wp-content/uploads/deadpool2_feature-poster_584x800_69bc155b-200x300.jpg", releasing_year: 2018, rating: 4.6 },
    { name: "Mugguru Monagallu", image_url: "https://daddymoviez.xyz/wp-content/uploads/2021/11/Download-Mugguru-Monagallu-2021-Hindi-Telugu-Movie-Web-DL-200x300.jpg", releasing_year: 2021, rating: 4.3 },
    { name: "One Two Three", image_url: "https://daddymoviez.xyz/wp-content/uploads/2020/06/Download-One-Two-Three-2008-Hindi-Movie-Bluray-200x300.jpg", releasing_year: 2008, rating: 4.4 },
    { name: "Zindagi Na Milegi Dobara", image_url: "https://daddymoviez.xyz/wp-content/uploads/2020/04/Download-Zindagi-Na-Milegi-Dobara-2011-Hindi-Movie-200x300.jpg", releasing_year: 2011, rating: 4.6 },
    { name: "Haunted", image_url: "https://daddymoviez.xyz/wp-content/uploads/2020/04/Download-Haunted-2013-Hindi-Movie-200x300.jpg", releasing_year: 2013, rating: 3.9 },
    { name: "Robot", image_url: "https://daddymoviez.xyz/wp-content/uploads/2020/06/Download-Robot-2010-Hindi-Movie-Bluray-200x300.jpg", releasing_year: 2010, rating: 4.4 },
    { name: "Welcome", image_url: "https://daddymoviez.xyz/wp-content/uploads/2020/06/Download-Welcome-2007-Hindi-Movie-Bluray-200x300.jpg", releasing_year: 2007, rating: 4.5 },
    { name: "Annabelle Sethupathi", image_url: "https://daddymoviez.xyz/wp-content/uploads/2021/09/Download-Annabelle-Sethupathi-2021-Hindi-Hotstar-Movie-Web-DL-200x300.jpg", releasing_year: 2021, rating: 4.1 },
    { name: "Queen", image_url: "https://daddymoviez.xyz/wp-content/uploads/2020/05/Download-Queen-2013-Hindi-Movie-Bluray-200x300.jpg", releasing_year: 2013, rating: 4.2 }
];
document.querySelector("#sortmovie").addEventListener("change", sortFun);
function sortFun(event) {
    let selected = document.querySelector("#sortmovie").value;
    if (selected == "all") {
        window.location.reload();
    }
    if (selected == "Ascending") {
        Movie.sort(function (a, b) {
            if (a.name > b.name) {
                return 1;
            }
            if (a.name < b.name) {
                return -1;
            }
            return 0;
        })
        Display(Movie);
    } else if (selected === "Descending") {
        Movie.sort(function (a, b) {
            if (a.name > b.name) {
                return -1;
            }
            if (a.name < b.name) {
                return 1;
            }
            return 0;
        })
        Display(Movie);
    }
    if (selected == "Sort Movies") {
        Display(Movie);
    }
    if (selected == "Oldest") {
        Movie.sort(function (a, b) {
            if (a.releasing_year > b.releasing_year) {
                return 1;
            }
            if (a.releasing_year < b.releasing_year) {
                return -1;
            }
            return 0;
        })
        Display(Movie);
    }
    if (selected == "Latest") {
        Movie.sort(function (a, b) {
            if (a.releasing_year > b.releasing_year) {
                return -1;
            }
            if (a.releasing_year < b.releasing_year) {
                return 1;
            }
            return 0;
        })
        Display(Movie);
    }
    if (selected == "High Ratings") {
        Movie.sort(function (a, b) {
            if (a.rating > b.rating) {
                return -1;
            }
            if (a.rating < b.rating) {
                return 1;
            }
            return 0;
        })
        Display(Movie);
    }
    if (selected == "Low Ratings") {
        Movie.sort(function (a, b) {
            if (a.rating > b.rating) {
                return 1;
            }
            if (a.rating < b.rating) {
                return -1;
            }
            return 0;
        })
        Display(Movie);
    }
}
Display(Movie);

function Display() {
    document.querySelector("#movies").innerHTML = null;
    Movie.forEach(function (element) {
        let cdiv1 = document.createElement("div");
        let Name = document.createElement("h4");
        let H4 = document.createElement("h4");
        let P = document.createElement("p");
        let Download = document.createElement("button");
        Download.innerText = "Watch Now !";
        let link = document.createElement("a");
        link.addEventListener("click", download);
        link.append(Download);
        let div1 = document.createElement("div");
        div1.setAttribute("id", "details");
        div1.append(Name, P, H4, link);
        Name.innerText = element.name;
        H4.innerText = element.releasing_year;
        P.innerText = (`Rating :- ${element.rating}`);
        let Poster = document.createElement("img");
        Poster.src = element.image_url;
        cdiv1.append(Poster, div1);
        document.querySelector("#movies").append(cdiv1);
    });
}


function slideShow() {
    let container = document.querySelector("#slideshow");
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let div3 = document.createElement("div");
    let div4 = document.createElement("div");
    let div5 = document.createElement("div");
    let Images = Movie.map(function (elem) {
        return elem.image_url;
    })
    let i = 0;
    setInterval(function () {
        if (i == Images.length) {
            i = 0;
        }
        let Img = document.createElement("img");
        Img.src = Images[i];
        div1.innerHTML = "";
        div1.append(Img);
        container.append(div1);
        i++;
    }, 2500)
    let j = 1;
    setInterval(function () {
        if (j == Images.length) {
            j = 0;
        }
        let IMG = document.createElement("img");
        IMG.src = Images[j];
        div2.innerHTML = "";
        div2.append(IMG);
        container.append(div2);
        j++;
    }, 2500)
    let k = 2;
    setInterval(function () {
        if (k == Images.length) {
            k = 0;
        }
        let IMG = document.createElement("img");
        IMG.src = Images[k];
        div3.innerHTML = "";
        div3.append(IMG);
        container.append(div3);
        k++;
    }, 2500)
    let l = 3;
    setInterval(function () {
        if (l == Images.length) {
            l = 0;
        }
        let IMG = document.createElement("img");
        IMG.src = Images[l];
        div4.innerHTML = "";
        div4.append(IMG);
        container.append(div4);
        l++;
    }, 2500)
    let m = 4;
    setInterval(function () {
        if (m == Images.length) {
            m = 0;
        }
        let IMG = document.createElement("img");
        IMG.src = Images[m];
        div5.innerHTML = "";
        div5.append(IMG);
        container.append(div5);
        m++;
    }, 2500)
}
slideShow();

function download(event) {
    movieArr = JSON.parse(localStorage.getItem("Movies")) || [];
    let x = this.parentElement.children[0].innerText;
    if (x == "Pushpa") {
        movieArr.push("Pushpa");
        localStorage.setItem("Movies", JSON.stringify(movieArr));
        window.location.href = "Stream.html";
    }
    if (x == "RRR") {
        movieArr.push("RRR");
        localStorage.setItem("Movies", JSON.stringify(movieArr));
        window.location.href = "Stream.html";

    }
    if (x == "KGF Chapter 2") {
        movieArr.push("KGF Chapter 2");
        localStorage.setItem("Movies", JSON.stringify(movieArr));
        window.location.href = "Stream.html";

    }
    if (x == "Pati Patni or Woh") {
        movieArr.push("Pati Patni or Woh");
        localStorage.setItem("Movies", JSON.stringify(movieArr));
        window.location.href = "Stream.html";

    }
    if (x == "Jugjugg Jiyo") {
        movieArr.push("Jugjugg Jiyo");
        localStorage.setItem("Movies", JSON.stringify(movieArr));
        window.location.href = "Stream.html";

    }
    if (x == "Anek") {
        movieArr.push("Anek");
        localStorage.setItem("Movies", JSON.stringify(movieArr));
        window.location.href = "Stream.html";

    }
    if (x == "Attack") {
        movieArr.push("Attack");
        localStorage.setItem("Movies", JSON.stringify(movieArr));
        window.location.href = "Stream.html";

    }
    if (x == "Jayeshbhai Jordaar") {
        movieArr.push("Jayeshbhai Jordaar");
        localStorage.setItem("Movies", JSON.stringify(movieArr));
        window.location.href = "Stream.html";

    }
    if (x == "Veere Di Wedding") {
        movieArr.push("Veere Di Wedding");
        localStorage.setItem("Movies", JSON.stringify(movieArr));
        window.location.href = "Stream.html";

    }
    if (x == "Hello Charlie") {
        movieArr.push("Hello Charlie");
        localStorage.setItem("Movies", JSON.stringify(movieArr));
        window.location.href = "Stream.html";

    }
    if (x == "Dhamaal") {
        movieArr.push("Dhamaal");
        localStorage.setItem("Movies", JSON.stringify(movieArr));
        window.location.href = "Stream.html";

    }
    if (x == "Chennai Express") {
        movieArr.push("Chennai Express");
        localStorage.setItem("Movies", JSON.stringify(movieArr));
        window.location.href = "Stream.html";

    }
    if (x == "Coolie No. 1") {
        movieArr.push("Coolie No. 1");
        localStorage.setItem("Movies", JSON.stringify(movieArr));
        window.location.href = "Stream.html";

    }
    if (x == "Dabangg") {
        movieArr.push("Dabangg");
        localStorage.setItem("Movies", JSON.stringify(movieArr));
        window.location.href = "Stream.html";
    }
    if (x == "KGF Chapter 1") {
        movieArr.push("KGF Chapter 1");
        localStorage.setItem("Movies", JSON.stringify(movieArr));
        window.location.href = "Stream.html";
    }
    if (x == "Deadpool 2") {
        movieArr.push("Deadpool 2");
        localStorage.setItem("Movies", JSON.stringify(movieArr));
        window.location.href = "Stream.html";
    }
    if (x == "Mugguru Monagallu") {
        movieArr.push("Mugguru Monagallu");
        localStorage.setItem("Movies", JSON.stringify(movieArr));
        window.location.href = "Stream.html";
    }
    if (x == "One Two Three") {
        movieArr.push("One Two Three");
        localStorage.setItem("Movies", JSON.stringify(movieArr));
        window.location.href = "Stream.html";
    }
    if (x == "Zindagi Na Milegi Dobara") {
        movieArr.push("Zindagi Na Milegi Dobara");
        localStorage.setItem("Movies", JSON.stringify(movieArr));
        window.location.href = "Stream.html";
    }
    if (x == "Haunted") {
        movieArr.push("Haunted");
        localStorage.setItem("Movies", JSON.stringify(movieArr));
        window.location.href = "Stream.html";
    }
    if (x == "Robot") {
        movieArr.push("Robot");
        localStorage.setItem("Movies", JSON.stringify(movieArr));
        window.location.href = "Stream.html";
    }
    if (x == "Welcome") {
        movieArr.push("Welcome");
        localStorage.setItem("Movies", JSON.stringify(movieArr));
        window.location.href = "Stream.html";
    }
    if (x == "Annabelle Sethupathi") {
        movieArr.push("Annabelle Sethupathi");
        localStorage.setItem("Movies", JSON.stringify(movieArr));
        window.location.href = "Stream.html";
    }
    if (x == "Queen") {
        movieArr.push("Queen");
        localStorage.setItem("Movies", JSON.stringify(movieArr));
        window.location.href = "Stream.html";
    }
}

