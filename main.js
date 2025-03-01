let getStarted = document.getElementById("get-started");
let items = document.querySelectorAll(".item");
let trial = document.getElementById("Trial");
let get = document.getElementById("get");
let p4 = document.querySelectorAll(".p4");
let basic = document.querySelectorAll(".basic-aa");
let standard = document.querySelector(".standard-aa");
let pro = document.querySelector(".pro-aa");
const collapsibleHeaders = document.querySelectorAll('.collapsible-header');
let foot = document.querySelectorAll(".eig-foot");
items.forEach(function(item) {
    item.addEventListener("mouseenter", function() {
        item.style.color = "#3d8adc"; // Change the background of the hovered item
    });
    item.addEventListener("mouseleave", function() {
        item.style.color = "#4d4f4e"; // Reset the background of the hovered item
    });
});


getStarted.addEventListener("mouseenter" , function(){
getStarted.style.color = "white"; 
getStarted.style.backgroundColor = "#3d8adc"; 

});
getStarted.addEventListener("mouseleave" , function(){
getStarted.style.color = "#3d8adc"; 
getStarted.style.backgroundColor = "white"; 
});

trial.addEventListener("mouseenter" , function(){
    trial.style.boxShadow = "none";
    trial.style.color = "white";
});
trial.addEventListener("mouseleave" , function(){
    trial.style.boxShadow = "0 0px 14px #3d8adc";
});


get.addEventListener("mouseenter" , function(){
    get.style.boxShadow = "none";
    get.style.animation = "ease-out"
    get.style.color = "white";
});
get.addEventListener("mouseleave" , function(){
    get.style.boxShadow = "0 0px 19px #3d8adc";
});

p4.forEach(function(e){
    e.addEventListener("mouseenter" , function(){
        e.style.color = "white"; 
        e.style.backgroundColor = "#3d8adc"; 
        });
        e.addEventListener("mouseleave" , function(){
        e.style.color = "#3d8adc"; 
        e.style.backgroundColor = "white"; 
        });
});
  
basic.forEach(function(e){
    e.addEventListener("mouseenter" , function(){
        e.style.color = "white"; 
        e.style.backgroundColor = "#3d8adc"; 
        });
        e.addEventListener("mouseleave" , function(){
        e.style.color = "#3d8adc"; 
        e.style.backgroundColor = "white"; 
        });
});
standard.addEventListener("mouseenter" , function(){
    standard.style.color = "white"; 
    standard.style.backgroundColor = "#3d8adc"; 
    });
    standard.addEventListener("mouseleave" , function(){
    standard.style.color = "#3d8adc"; 
    standard.style.backgroundColor = "white"; 

});
pro.addEventListener("mouseenter" , function(){
    pro.style.color = "white"; 
    pro.style.backgroundColor = "#3d8adc"; 
    });
    pro.addEventListener("mouseleave" , function(){
    pro.style.color = "#3d8adc"; 
    pro.style.backgroundColor = "white"; 

});
collapsibleHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const contentId = header.getAttribute('data-content');
        const content = document.getElementById(contentId);
        const isOpen = content.style.display === "block";

 
        const allContents = document.querySelectorAll('.collapsible-content');
        allContents.forEach(content => {
            content.style.display = "none";
        });


        if (!isOpen) {
            content.style.display = "block";
        }
    });
});
const collapsibleHeaderse = document.querySelectorAll('.collapsible-header');

collapsibleHeaderse.forEach(header => {
    header.addEventListener('click', () => {
        const hr = header.nextElementSibling;

        const allHr = document.querySelectorAll('.collapsible-header + hr');
        allHr.forEach(item => {
            item.style.borderTopColor = '#ccc'; // لون افتراضي
        });

        hr.style.borderTopColor = '#3d8adc'; // اللون الجديد
    });
});

let sub = document.querySelector(".fiveteen-submit");
let submitButton = document.getElementById("submitBtn");
let confirmationMessage = document.getElementById("confirmationMessage");
let emailInput = document.getElementById("emailInput");
// Check if elements exist
console.log(submitButton, confirmationMessage, emailInput);  // Debugging line

// Add event listener for submit button click
submitButton.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission (page reload)

    // Log to confirm button click
    console.log("Button clicked");

    // Hide the input and submit button
    emailInput.style.display = "none";
    submitButton.style.display = "none";

    // Set the confirmation message
    confirmationMessage.innerHTML = "We received your message and you'll hear from us soon. Thank You!";

    // Show the confirmation message
    confirmationMessage.style.display = "block";

    // Log to confirm the message is visible
    console.log("Confirmation message displayed");
});

// let hov = document.querySelector(".image-foot1");
// let ig = document.querySelector(".eye-icon");
// hov.addEventListener("mouseenter"  , function(){
//     ig.style.display = "block";
//     ig.style.background = URL("fa fa-link eye-icon");
// });
// function imgage(){
//     document.write(`<img src = "images/imagefoot2.webp"`);
// }
// showImage.forEach(function (e){
//     e.addEventListener("click" , function(){
//         e.style.ima
//     })
// })
// let show = document.querySelector(".next");
// let prev = document.querySelector(".prev");

// let currentGroup = 1; // تتبع المجموعة الحالية (1 أو 2)

// // الدالة لعرض مجموعة معينة من الصور
// function displayGroup(group) {
//     if (group === 1) {
//         // عرض المجموعة الأولى
//         document.querySelector(".show1").style.display = "flex";
//         document.querySelector(".show2").style.display = "flex";
//         document.querySelector(".show3").style.display = "flex";
//         document.querySelector(".show4").style.display = "flex";
//         document.querySelector(".show7").style.display = "none";
//         document.querySelector(".show8").style.display = "none";
//         document.querySelector(".show9").style.display = "none";
//         document.querySelector(".show10").style.display = "none";
//     } else if (group === 2) {
//         // عرض المجموعة الثانية
//         document.querySelector(".show1").style.display = "none";
//         document.querySelector(".show2").style.display = "none";
//         document.querySelector(".show3").style.display = "none";
//         document.querySelector(".show4").style.display = "none";
//         document.querySelector(".show7").style.display = "flex";
//         document.querySelector(".show8").style.display = "flex";
//         document.querySelector(".show9").style.display = "flex";
//         document.querySelector(".show10").style.display = "flex";
//     }
// }
// اختيار الأزرار
let show = document.querySelector(".next");
let prev = document.querySelector(".prev");

let currentGroup = 1; // تتبع المجموعة الحالية

// دالة عرض الصور بناءً على المجموعة
function displayGroup(group) {
    const imagesGroup1 = [".show1", ".show2", ".show3", ".show4"];
    const imagesGroup2 = [".show7", ".show8", ".show9", ".show10"];

    // الصور النشطة وغير النشطة
    const activeImages = group === 1 ? imagesGroup1 : imagesGroup2;
    const inactiveImages = group === 1 ? imagesGroup2 : imagesGroup1;

    // عرض الصور النشطة
    activeImages.forEach(selector => {
        const element = document.querySelector(selector);
        element.classList.add("active");
    });

    // إخفاء الصور غير النشطة
    inactiveImages.forEach(selector => {
        const element = document.querySelector(selector);
        element.classList.remove("active");
    });
}

// زر "التالي"
show.addEventListener("click", function () {
    currentGroup = currentGroup === 1 ? 2 : 1; // التبديل بين المجموعتين
    displayGroup(currentGroup); // تحديث العرض
});

// زر "السابق"
prev.addEventListener("click", function () {
    currentGroup = currentGroup === 1 ? 2 : 1; // التبديل بين المجموعتين
    displayGroup(currentGroup); // تحديث العرض
});

// عرض المجموعة الأولى افتراضياً عند التحميل
displayGroup(currentGroup);


let slideIndicators = document.querySelectorAll(".carousel-indicators li");

slideIndicators.forEach(function (indicator) {
  indicator.addEventListener("click", function () {
    // Reset all indicators to their default background color
    slideIndicators.forEach(function (item) {
      item.style.backgroundColor = ""; // Resets the background color
    });

    // Apply the red background color to the clicked indicator
    indicator.style.backgroundColor = "#2d8de4";
  });
});
let guide = document.querySelectorAll(".foot-h1");
guide.forEach(function(e){
    e.addEventListener("mouseenter" , function(){
        e.style.color = "#3d8adc"; 
        });
        e.addEventListener("mouseleave" , function(){
        e.style.color = "#4d4f4e"; 
        });
});
let foots =document.querySelectorAll(".dd");
foots.forEach(function(e){
    e.addEventListener("mouseenter" , function(){
        e.style.color = "#3d8adc"; 
        });
        e.addEventListener("mouseleave" , function(){
        e.style.color = "black"; 
        });
});
// let fourteen = document.querySelector(".fourteen-h2");

//         fourteen.addEventListener("mouseenter" , function(){
//         fourteen.style.color = "white"; 
//         fourteen.style.boxShadow = "0 0px 14px #3d8adc";        
//     });
//     fourteen.addEventListener("mouseleave" , function(){
//         fourteen.style.boxShadow = "none";
//     });


    // document.addEventListener('DOMContentLoaded', function () {
    //     let submitButton = document.getElementById("submitBtn");
    //     let confirmationMessage = document.getElementById("confirmationMessage");
    //     let emailInput = document.getElementById("emailInput");

    //     // Check if elements exist
    //     console.log(submitButton, confirmationMessage, emailInput);  // Debugging line
        
    //     // Add event listener for submit button click
    //     submitButton.addEventListener("click", function(event) {
    //         event.preventDefault(); // Prevent form submission (page reload)

    //         // Log to confirm button click
    //         console.log("Button clicked");

    //         // Hide the input and submit button
    //         emailInput.style.display = "none";
    //         submitButton.style.display = "none";

    //         // Set the confirmation message
    //         confirmationMessage.innerHTML = "We received your message and you'll hear from us soon. Thank You!";

    //         // Show the confirmation message
    //         confirmationMessage.style.display = "block";

    //         // Log to confirm the message is visible
    //         console.log("Confirmation message displayed");
    //     });
    // });
    
    

document.querySelectorAll(".eig-foot").display = "flex";
document.querySelectorAll(".eig-foot").color = "white";


// function openModal() {
//     document.getElementById("myModal").style.display = "block";
//   }
  
//   function closeModal() {
//     document.getElementById("myModal").style.display = "none";
//   }
  
//   var slideIndex = 1;
//   showSlides(slideIndex);
  
//   function plusSlides(n) {
//     showSlides(slideIndex += n);
//   }
  
//   function currentSlide(n) {
//     showSlides(slideIndex = n);
//   }
  
//   function showSlides(n) {
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     var dots = document.getElementsByClassName("demo");
//     var captionText = document.getElementById("caption");
//     if (n > slides.length) {slideIndex = 1}
//     if (n < 1) {slideIndex = slides.length}
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex-1].style.display = "block";
//     dots[slideIndex-1].className += " active";
//     captionText.innerHTML = dots[slideIndex-1].alt;
//   }
// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// function showSlides(n) {
//     let i;
//     let slides = document.getElementsByClassName("mySlides");
//     let dots = document.getElementsByClassName("dot");
//     if (n > slides.length) { slideIndex = 1 }
//     if (n < 1) { slideIndex = slides.length }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].className += " active";
// }
// document.addEventListener("DOMContentLoaded", function() {
//     let s = document.querySelector("#submitBtn");

//     s.addEventListener("click", function(event) {
//         event.preventDefault(); // منع السلوك الافتراضي (إرسال النموذج)
//         window.alert("asdasd"); // عرض الرسالة عند النقر
//     });
// });