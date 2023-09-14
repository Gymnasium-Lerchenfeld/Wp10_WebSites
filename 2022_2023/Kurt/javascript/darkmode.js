let root = document.querySelector(":root");

document.cookie = "username=John Doe;path=/folder1/folder2/";

if ($("#image").length) {
    let image = document.querySelector("#image");
    if (getCookie("currentmode") == "dark") {
        image.style.setProperty("filter", "invert(100)");
    } else {
        setCookie("currentmode", "light", 2);
        image.style.setProperty("filter", "invert(0)");
    }
}
if (getCookie("currentmode") == "dark") {
    setCookie("currentmode", "dark", 2);
    root.style.setProperty("--maincolor", "#000000");
    root.style.setProperty("--bgcolor", "#111111");
    root.style.setProperty("--fontcolor", "#cccccc");
} else {
    setCookie("currentmode", "light", 2);
    root.style.setProperty("--maincolor", "white");
    root.style.setProperty("--bgcolor", "#eee");
    root.style.setProperty("--fontcolor", "#333");
}

function toggle_darkmode() {
    if ($("#image").length) {
        let image = document.querySelector("#image");
        if (getCookie("currentmode") == "light") {
            image.style.setProperty("filter", "invert(100)");
        } else if (getCookie("currentmode") == "dark") {
            image.style.setProperty("filter", "invert(0)");
        }
    }
    if (getCookie("currentmode") == "light") {
        setCookie("currentmode", "dark", 2);
        root.style.setProperty("--maincolor", "#000000");
        root.style.setProperty("--bgcolor", "#111111");
        root.style.setProperty("--fontcolor", "#cccccc");
    } else if (getCookie("currentmode") == "dark") {
        setCookie("currentmode", "light", 2);
        root.style.setProperty("--maincolor", "white");
        root.style.setProperty("--bgcolor", "#eee");
        root.style.setProperty("--fontcolor", "#333");
    }
}

$(".darkmode").click(() => {
    toggle_darkmode();
});
