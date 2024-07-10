var hero = $(".hero_area");

$(document).ready(function () {
    $('.footer_section > p').html(`© ${new Date().getFullYear()} All Rights Reserved.`);
    $('#loginForm').on('submit', function (event) {
        event.preventDefault();
    
        // Check validity of the form
        var form = this;
        if (form.checkValidity() === false) {
            event.stopPropagation();
            $(form).addClass('was-validated');
        } else {
            // Perform AJAX login or further processing here
            alert('Form submitted successfully!');
        }
    });

    $('#signupForm').on('submit', function (event) {
        event.preventDefault();

        // Check validity of the form
        var form = this;
        if (form.checkValidity() === false) {
            event.stopPropagation();
            $(form).addClass('was-validated');
        } else {
            // Check if passwords match
            var password = $('#password').val();
            var confirmPassword = $('#confirmPassword').val();
            if (password !== confirmPassword) {
                $('#confirmPassword').addClass('is-invalid');
                return;
            } else {
                $('#confirmPassword').removeClass('is-invalid');
            }

            // Perform AJAX signup or further processing here
            alert('Form submitted successfully!');
        }
    });

    const $chatbotToggler = $(".chatbot-toggler");
    const $closeBtn = $(".close-btn");
    const $chatbox = $(".chatbox");
    const $chatInput = $(".chat-input textarea");
    const $sendChatBtn = $(".chat-input span");

    let userMessage = null;
    const inputInitHeight = $chatInput[0].scrollHeight;

    const createChatLi = (message, className) => {
        const $chatLi = $("<li>").addClass("chat").addClass(className);
        const chatContent = className === "outgoing" ? `<p></p>` : `<span><img width="50px" height="50px" src="./images/bot.png" /></span><p></p>`;
        $chatLi.html(chatContent);
        $chatLi.find("p").text(message);
        return $chatLi;
    }

    const generateResponse = (chatElement) => {
        const $messageElement = $(chatElement).find("p");
        $messageElement.text("The answer is yes");
        $chatbox.scrollTop($chatbox[0].scrollHeight);
    }

    const handleChat = () => {
        userMessage = $chatInput.val().trim();
        if (!userMessage) return;

        // Clear the input textarea and set its height to default
        $chatInput.val("");
        $chatInput.css("height", `${inputInitHeight}px`);

        // Append the user's message to the chatbox
        $chatbox.append(createChatLi(userMessage, "outgoing"));
        $chatbox.scrollTop($chatbox[0].scrollHeight);

        setTimeout(() => {
            // Display "Thinking..." message while waiting for the response
            const $incomingChatLi = createChatLi("Thinking...", "incoming");
            $chatbox.append($incomingChatLi);
            $chatbox.scrollTop($chatbox[0].scrollHeight);
            generateResponse($incomingChatLi);
        }, 600);
    }

    $chatInput.on("input", () => {
        // Adjust the height of the input textarea based on its content
        $chatInput.css("height", `${inputInitHeight}px`);
        $chatInput.css("height", `${$chatInput[0].scrollHeight}px`);
    });

    $chatInput.on("keydown", (e) => {
        // If Enter key is pressed without Shift key and the window
        // width is greater than 800px, handle the chat
        if (e.key === "Enter" && !e.shiftKey && $(window).width() > 800) {
            e.preventDefault();
            handleChat();
        }
    });

    $sendChatBtn.on("click", handleChat);
    $closeBtn.on("click", () => $("body").removeClass("show-chatbot"));
    $chatbotToggler.on("click", () => $("body").toggleClass("show-chatbot"));
})

var myCircle = Circles.create({
    id: "circles-1",
    radius: 65,
    value: 85,
    maxValue: 100,
    width: 5,
    text: function (value) {
        return value + "%";
    },
    colors: ["transparent", "#ffffff"],
    duration: 400,
    wrpClass: "circles-wrp",
    textClass: "progress_text",
    valueStrokeClass: "circles-valueStroke",
    maxValueStrokeClass: "circles-maxValueStroke",
    styleWrapper: true,
    styleText: true
});
var myCircle = Circles.create({
    id: "circles-2",
    radius: 65,
    value: 90,
    maxValue: 100,
    width: 5,
    text: function (value) {
        return value + "%";
    },
    colors: ["transparent", "#ffffff"],
    duration: 400,
    wrpClass: "circles-wrp",
    textClass: "progress_text",
    valueStrokeClass: "circles-valueStroke",
    maxValueStrokeClass: "circles-maxValueStroke",
    styleWrapper: true,
    styleText: true
});
var myCircle = Circles.create({
    id: "circles-3",
    radius: 65,
    value: 89,
    maxValue: 100,
    width: 5,
    text: function (value) {
        return value + "%";
    },
    colors: ["transparent", "#ffffff"],
    duration: 400,
    wrpClass: "circles-wrp",
    textClass: "progress_text",
    valueStrokeClass: "circles-valueStroke",
    maxValueStrokeClass: "circles-maxValueStroke",
    styleWrapper: true,
    styleText: true
});
var myCircle = Circles.create({
    id: "circles-4",
    radius: 65,
    value: 83,
    maxValue: 100,
    width: 5,
    text: function (value) {
        return value + "%";
    },
    colors: ["transparent", "#ffffff"],
    duration: 400,
    wrpClass: "circles-wrp",
    textClass: "progress_text",
    valueStrokeClass: "circles-valueStroke",
    maxValueStrokeClass: "circles-maxValueStroke",
    styleWrapper: true,
    styleText: true
});


