function redirect(className, href) {
    let item = document.getElementsByClassName(className);

    if (item = "img") {
        if(href.includes("http://www.instagram.com")){
            iziToast.warning({
                title: "Warning",
                message: "Извините, instagram временно недоступен в нашем регионе:(",
            });
        }
        if(href.includes("https://auto.ru")){
            iziToast.success({
                title: "success",
                message: "Добро пожаловать в наш каталог на авто.ру",
                document: location.href = href,
            });
        }
        if(href.includes("https://www.avito.ru")){
            iziToast.success({
                title: "success",
                message: "Добро пожаловать в наш каталог на авито",
                document: location.href = href,
            });
        }
    }
}