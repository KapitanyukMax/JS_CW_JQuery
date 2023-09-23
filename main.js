// const list = document.getElementById("my-list");

// list.children[2].setAttribute("title", "hello");

// list.innerHTML += "<li>The last new element.</li>";

// for (const elem of list.children) {
//     elem.onmouseenter = function () {
//         this.classList.add("bigger");
//     }

//     elem.onmouseleave = function () {
//         this.classList.remove("bigger");
//     }
// }

const list = $("#my-list");

list.append("<li>New item with jQuery</li>");

$("#my-list li").on("mouseenter", function () {
    $(this).addClass("bigger");

    $(this).prev().addClass("muted");
    $(this).next().addClass("muted");
});
$("#my-list li").on("mouseleave", function () {
    $(this).removeClass("bigger");

    $(this).prev().removeClass("muted");
    $(this).next().removeClass("muted");
});