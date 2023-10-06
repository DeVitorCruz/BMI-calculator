"use strict";
$(document).ready(function () {
    $(".btn").click(function () {
        const weight = Number($("#weight").val());
        const height = Number($("#height").val());
        const bmi = Math.floor(weight / ((height) ** 2));
        if (bmi >= 18.5 && bmi <= 24.9) {
            $(".text-center").last().text(`your BMI is ${bmi} which means you are normal. :)`).addClass("dynamic-text-center");
        }
        else if (bmi < 18.5) {
            $(".text-center").last().text(`your BMI is ${bmi} which means you are underweight. :(`).addClass("dynamic-text-center");
        }
        else if (bmi > 24.9) {
            $(".text-center").last().text(`your BMI is ${bmi} which means you are obese. :(`).addClass("dynamic-text-center");
        }
        else {
            $(".text-center").last().text(`Sorry, we couldn't calculate your BMI. Please, try again! :/`).addClass("dynamic-text-center");
        }
    });
});
