// التحقق من أن التاريخ في المستقبل
function validateDate() {
    const dateField = document.getElementById("date");
    const selectedDate = new Date(dateField.value);
    const currentDate = new Date();

    // التحقق من أن التاريخ في المستقبل
    if (selectedDate <= currentDate) {
        alert("Please choose a future date.");
        return false; // منع إرسال النموذج
    }
    return true; // السماح بإرسال النموذج
}

// ربط الدالة مع حدث إرسال النموذج
document.getElementById("bookingForm").addEventListener("submit", function(event) {
    // إذا لم يكن التاريخ في المستقبل، منع إرسال النموذج
    if (!validateDate()) {
        event.preventDefault();
    }
});